import React, { useState } from 'react';

const WithdrawMoney = () => {
    const [withdrawalData, setWithdrawalData] = useState({
        amount: '',
        accountNumber: '',
        bankName: '',
        cardHolderName: '',
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setWithdrawalData({
            ...withdrawalData,
            [name]: value,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="bg-white p-8 rounded-md shadow-md max-w-xs mx-auto">
                <h2 className="text-2xl font-bold mb-4">Thông tin rút tiền</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                            Ngân Hàng
                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="amount"
                            type="text"
                            placeholder="Ngân Hàng"
                            name="amount"
                            value={withdrawalData.amount}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="accountNumber">
                            Tên Người nhận
                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="accountNumber"
                            type="text"
                            placeholder="Tên Người nhận"
                            name="accountNumber"
                            value={withdrawalData.accountNumber}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bankName">
                            Số tài khoản
                        </label>
                        <input
                            className="w-full px-3 py-2 border rounded-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="bankName"
                            type="text"
                            placeholder="Số tài khoản"
                            name="bankName"
                            value={withdrawalData.bankName}
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Rút tiền
                    </button>
                </form>
            </div>
            <div className="flex items-center justify-center">
                <div className="bg-green-500 text-white p-6 rounded shadow-lg">
                    Chúng tôi sẽ xử lý yêu cầu rút tiền của bạn trong vòng 10 phút tới.
                </div>
            </div>
        </>

    );
};

export default WithdrawMoney;
