import catchAsync from "../../../../utils/catchAsync.js";
import status from 'http-status'
import { updateUsers } from "../../service/auth.service.js";
import authModel from "../../model/auth.model.js";

const updateUser = catchAsync(async (req, res) => {
    const { email } = req.body
    if (email) {
        const checkEmail = await authModel.findOne({ email })
        if (checkEmail == email) {
            return res.status(status.BAD_REQUEST).json("Email đã tồn tại")
        }
    }
    const user = await updateUsers(req)
    return res.status(status.OK).json(user)
})

export default updateUser