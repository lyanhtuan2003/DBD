import status from 'http-status'
import catchAsync from '../../../../utils/catchAsync.js'
import { getOneAuths } from '../../service/auth.service.js'

const getOneAuth = catchAsync(async (req, res) => {
    const users = await getOneAuths(req)
    return res.status(status.OK).json(users)
})

export default getOneAuth