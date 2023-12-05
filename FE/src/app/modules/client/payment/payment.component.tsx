

const PaymentComponent = () => {
    const recipientInfo = {
        recipientName: 'LY ANH TUAN',
        recipientBank: 'Ngân hàng ABC',
        recipientAccountNumber: '1234 5678 9012',
    };

    return (
        <>
            <div className="bg-white p-8 rounded-md shadow-md max-w-xs mx-auto">
                <h2 className="text-2xl font-bold mb-4">Thông tin thanh toán 1</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="recipientName">
                        TÊN CHỦ THẺ
                    </label>
                    <p className="text-gray-800">{recipientInfo.recipientName}</p>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="recipientBank">
                        NGÂN HÀNG THÙ HƯỞNG
                    </label>
                    <p className="text-gray-800">{recipientInfo.recipientBank}</p>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="recipientAccountType">
                        SỐ TÀI KHOẢN NGƯỜI NHÂN
                    </label>
                    <p className="text-gray-800">{recipientInfo.recipientAccountNumber}</p>
                </div>

                {/* <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="recipientAccountNumber">
                    Số tài khoản người nhận
                </label>
                <p className="text-gray-800">{recipientInfo.recipientAccountNumber}</p>
            </div> */}

                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Xác nhận Chuyển tiền
                </button>
            </div>


            <div className="bg-white p-8 rounded-md shadow-md max-w-xs mx-auto">
                <h2 className="text-2xl font-bold mb-4">Thông tin thanh toán 2</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="recipientName">
                        TÊN CHỦ THẺ
                    </label>
                    <p className="text-gray-800">{recipientInfo.recipientName}</p>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="recipientBank">
                        NGÂN HÀNG THÙ HƯỞNG
                    </label>
                    <p className="text-gray-800">{recipientInfo.recipientBank}</p>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="recipientAccountType">
                        SỐ TÀI KHOẢN NGƯỜI NHÂN
                    </label>
                    <p className="text-gray-800">{recipientInfo.recipientAccountNumber}</p>
                </div>

                {/* <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="recipientAccountNumber">
                    Số tài khoản người nhận
                </label>
                <p className="text-gray-800">{recipientInfo.recipientAccountNumber}</p>
            </div> */}

                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Xác nhận Chuyển tiền
                </button>
            </div>
        </>

    );
};

export default PaymentComponent;
