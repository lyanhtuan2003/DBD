import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import { CloudinaryStorage } from "multer-storage-cloudinary"
cloudinary.config({
    cloud_name: "df3xmajf8",
    api_key: "663151963334922",
    api_secret: 'V-8XEaIiwzGn4Zjq3GG93GFCkVg'
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        fordel: "ECMA",
        allowed_formats: ['jpg', 'png', 'jpeg', 'gif'],
        public_id: (req, file) => `${file.originalname}`
    }
})

const upload = multer({ storage })

export default upload

