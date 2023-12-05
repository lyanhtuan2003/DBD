import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const FooterComponent = () => {
    return (
        <div className='sm:w-[1400px] m-auto mt-5'>
            <footer className="bg-blue-900 text-white p-8">
                <div className="container mx-auto sm:flex justify-between items-center">
                    <div className="mb-8 sm:mb-0">
                        <h2 className="text-2xl font-bold mb-4">Thông Tin Đầu Tư</h2>
                        <p>Địa chỉ: 123 Đường ABC, Thành phố XYZ</p>
                        <p>Email: info@dauthu.com</p>
                        <p>Số điện thoại: (123) 456-7890</p>
                    </div>
                    <div className="mb-8 sm:mb-0">
                        <h2 className="text-2xl font-bold mb-4">Theo Dõi Chúng Tôi</h2>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-gray-300"><FaFacebook /></a>
                            <a href="#" className="text-white hover:text-gray-300"><FaTwitter /></a>
                            <a href="#" className="text-white hover:text-gray-300"><FaLinkedin /></a>
                            <a href="#" className="text-white hover:text-gray-300"><FaInstagram /></a>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Nội Dung Khác</h2>
                        <ul>
                            <li><a href="#">Bảo mật</a></li>
                            <li><a href="#">Điều khoản sử dụng</a></li>
                            <li><a href="#">Chính sách cookie</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default FooterComponent;
