import catchAsync from "../../../../utils/catchAsync.js";
import status from 'http-status';
import { getAllUsers } from "../../service/auth.service.js";

const getAllUser = catchAsync(async (req, res) => {
    const user = await getAllUsers()
    return res.status(status.OK).json(user)
})

export default getAllUser