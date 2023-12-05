import catchAsync from "../../../../utils/catchAsync.js";
import status from 'http-status'
import { deleteUsers } from "../../service/auth.service.js";
import authModel from "../../model/auth.model.js";

const deleteUser = catchAsync(async (req, res) => {
    const user1 = await authModel.findById(req.params.id);
    if (user1.role === 'ADMIN') {
        return res.status(status.BAD_REQUEST).json("Không thể xóa tài khoản admin");
    }
    const user = await deleteUsers(req)
    return res.status(status.OK).json(user)
})

export default deleteUser