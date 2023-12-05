import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: String,
    newPrice: Number,
    cost: Number,
    images: {
        type: Array,
        default: [],
    },
    description: String,
    quantity: Number,
    categoryId: {
        _id: {
            type: mongoose.Types.ObjectId,
            ref: 'Category',
        },
        name: String
    },
},
    {
        timestamps: true
    }
)

export default mongoose.model("Product", productSchema)