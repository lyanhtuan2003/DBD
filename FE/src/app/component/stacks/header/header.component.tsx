import { GrLanguage } from "react-icons/gr";
import Marquee from 'react-fast-marquee'
import { Link } from "react-router-dom";
const HeaderComponent = () => {
    return (
        <div className='sm:w-[1400px] m-auto max-sm:px-3'>
            <div className='flex justify-between'>
                <div>
                    <Link to={"/"}>
                        <img src="https://saigoncons.com.vn/wp-content/uploads/2020/07/SGCC_LOGO-FINAL-Dimension-Model-copy-min-1-425x300.jpg" alt="" className='w-[150px]' />
                    </Link>

                </div>
                <div className="flex items-center">
                    <div className="mx-5">
                        <div className="px-2 bg-gray-200 rounded-md p-2 font-bold text-sm">
                            Số dư: 2,000,000đ
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <p className="text-lg font-semibold mr-2">Ngôn ngữ</p>
                        <p className="p-2 bg-red-500 rounded-full "><GrLanguage /></p>
                    </div>
                </div>

            </div>

            <div className="overflow-hidden mt-3">
                <Marquee className="marquee-text text-red-600">
                    Chúc mừng thành viên tài khoản ********585 đã mua VIP4 thành công，Chúc mừng thành viên tài khoản ********856 đã mua VIP5
                </Marquee>
            </div>

        </div>
    )
}

export default HeaderComponent