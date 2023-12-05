import { css } from '@emotion/react'
import React from 'react'
import { Link } from 'react-router-dom'

const ContentInvest = () => {
    return (
        <div css={CssContentInvest} className='text-center'>
            <Link to={"/payment"}>
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-green active:bg-green-800">
                    Nạp Tiền
                </button>
            </Link>
            <Link to={"/withdrawmoney"}>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-red active:bg-red-800">
                    Rút Tiền
                </button>
            </Link>

            <Link to={"/option"}>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                    Đầu tư
                </button>
            </Link>

            {/* <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-purple active:bg-purple-800">
                Sản Phẩm
            </button> */}
        </div>
    )
}

export default ContentInvest

const CssContentInvest = css`

`