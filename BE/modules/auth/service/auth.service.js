import bcrypt from "bcrypt"
import authModel from "../model/auth.model.js"
import jwt from 'jsonwebtoken'
import nodemailer from "nodemailer"

export const registers = async (dataBody) => {
    const { password } = dataBody
    const hashPassword = await bcrypt.hash(password, 10)
    const user = await authModel.create({
        ...dataBody,
        password: hashPassword
    })
    return user
}

export const logins = async (dataBody) => {
    const { email, password } = dataBody

    const user = await authModel.findOne({ email: email })
    const validPassword = await bcrypt.compare(password, user.password)
    const accessToken = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, { expiresIn: "5d" })
    return {
        user,
        validPassword,
        accessToken
    }
}

export const getAllUsers = async () => {
    const users = await authModel.find()
    return users
}

export const deleteUsers = async (req) => {
    const user = await authModel.findByIdAndDelete(req.params.id)
    return user
}

export const updateUsers = async (req) => {
    const { email, fullname } = req.body;

    // Hash mật khẩu chỉ khi có mật khẩu mới được cung cấp
    let hashedPassword;
    if (req.body.password) {
        hashedPassword = await bcrypt.hash(req.body.password, 10);
    }

    const id = req.params.id;

    // Tạo đối tượng cập nhật chỉ với email và fullname
    const updateFields = {
        email,
        fullname,
    };

    // Thêm mật khẩu vào đối tượng cập nhật nếu có
    if (hashedPassword) {
        updateFields.password = hashedPassword;
    }

    // Thực hiện cập nhật
    const update = await authModel.updateOne(
        { _id: id },
        updateFields
    );

    return update;
}

export const searchAuths = async (req) => {
    const { email } = req.query
    const user = await authModel.find({
        email: {
            $regex: '.*' + email + '.*',
            $options: 'i'
        }
    })
    return user
}

export const getUserDetails = async (query) => {
    const user = await authModel.findById(query.userId)

    return user
}

export const forgotPasswords = async (email) => {
    try {
        const newPassword = Math.random().toString(36).slice(-8);
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        const user = await authModel.findOne({ email: email });
        if (user) {
            user.password = hashedPassword;
            await user.save();
        }
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_APP,
                pass: process.env.EMAIL_APP_PASSWORD
            }
        });

        const info = await transporter.sendMail({
            from: '"HaiDang Shop👻" <fptkiki@gmail.com>',
            to: email,
            subject: "HaiDang Password Reset",
            html: `
            <p>Mật khẩu mới của tài khoản ${email} là: <strong>${newPassword}</strong></p>
            <p>Vui lòng giữ thông tin này riêng tư và không chia sẻ với người khác.</p>
            <p>Để bảo mật tài khoản. Hãy đổi mật khẩu ngay sau khi đăng nhập thành công.<p/>
            <p>Trân trọng!<p/>
          `
        });
        return info;
    } catch (error) {
        console.error("Error sending password reset email: ", error);
        throw error;
    }
}

export const getOneAuths = async (req) => {
    const users = await authModel.findById(req.params.id)
    return users
}