import cartModel from "../../cart/model/cart.model.js"
import productModel from "../../product/model/product.model.js"
import orderModel from "../model/order.model.js"


export const addOrders = async (req) => {
    const listProductOrder = req.body.productOrder
    const userId = req.user.id
    const cartUser = await cartModel.findOne({
        user: req.user._id
    })

    if (cartUser) {
        const filterData = cartUser.carts.filter(
            (itemCart) => listProductOrder.filter(
                (itemListProduct) => itemListProduct.product._id === String(itemCart.product)
            ).length === 0
        )

        for (let index = 0; index < listProductOrder.length; index++) {
            const element = listProductOrder[index];
            const productOrder = element.quantity
            const productDetail = await productModel.findOne({
                _id: element.product
            })

            productDetail.quantity = productDetail.quantity - productOrder
            await productDetail.save()
        }

        cartUser.carts = filterData
        await cartUser.save()
    }

    const newOrder = await orderModel.create({
        user: userId,
        ...req.body
    })

    return newOrder
}

export const updateOrders = async (req) => {
    const { orderId, orderStatus } = req.body;

    const order = await orderModel.findOne({
        _id: orderId
    });
    order.orderStatus = orderStatus;
    await order.save();
    if (orderStatus === 'đã huỷ') {
        for (let i = 0; i < order.productOrder.length; i++) {
            const productOrder = order.productOrder[i];
            const productDetail = await productModel.findById(productOrder.product);
            productDetail.quantity += productOrder.quantity;
            await productDetail.save();
        }
    }
};


export const getAllOrders = async (req) => {
    const orders = await orderModel.find({
        user: req.user.id,
    }).populate({
        path: 'productOrder',
        populate: {
            path: 'product',
        },
    })

    return orders
}

export const deleteOrders = async (req) => {
    const remove = await orderModel.findByIdAndDelete(req.params.id)
    return remove
}

export const filterDataOrders = async (bodyRequest) => {
    const { status, keyword } = bodyRequest
    const matchStage = {
        "orderStatus": { $in: [status] }
    };
    if (keyword) {
        matchStage.phoneNumber = { $regex: keyword, $options: 'i' };
    }

    const orders = await orderModel.aggregate([
        {
            $match: matchStage
        },
        {
            $unwind: "$productOrder"
        },
        {
            $lookup:
            {
                from: "products",
                localField: "productOrder.product",
                foreignField: "_id",
                as: "productInfo"
            }
        },
        {
            $unwind: "$productInfo"
        },
        {
            $set: {
                "productOrder.product": "$productInfo"
            }
        },
        {
            $group: {
                _id: "$_id",
                fullname: { $first: "$fullname" },
                total: { $first: "$total" },
                phoneNumber: { $first: "$phoneNumber" },
                district: { $first: "$district" },
                city: { $first: "$city" },
                commune: { $first: "$commune" },
                detailAddress: { $first: "$detailAddress" },
                productOrder: { $push: "$productOrder" },
                createdAt: { $first: "$createdAt" },
                updatedAt: { $first: "$updatedAt" },
                orderStatus: { $first: "$orderStatus" },
                __v: { $first: "$__v" }
            }
        }

    ]);
    return orders
}


