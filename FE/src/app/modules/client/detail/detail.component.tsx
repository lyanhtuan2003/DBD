import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';

const DetailComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };

    const config: any = {
        data,
        xField: 'year',
        yField: 'gdp',
        seriesField: 'name',
        yAxis: {
            label: {
                formatter: (v: any) => `${(v / 10e8).toFixed(1)} B`,
            },
        },
        legend: {
            position: 'top',
        },
        smooth: true,
        // @TODO 后续会换一种动画方式
        animation: {
            appear: {
                animation: 'path-in',
                duration: 5000,
            },
        },
    };

    return (
        <>
            <div className='sm:w-[1440px] m-auto'>
                <Line {...config} />
            </div>

            {/* Thêm thông tin bổ sung */}
            <div className='sm:w-[1440px] m-auto mt-4'>
                <h2 className='text-2xl font-bold'>Thông Tin Đầu Tư</h2>
                <p className='text-gray-600 mt-2'>
                    Đây là biểu đồ thống kê về GDP của các năm, giúp bạn theo dõi sự phát triển của đầu tư theo thời gian.
                </p>
                <ul className='list-disc list-inside mt-4'>
                    <li>Thời gian: Từ năm 2000 đến năm 2022</li>
                    <li>Dữ liệu được cung cấp bởi Alipay</li>
                    <li>Đơn vị đo lường: Tỷ USD</li>
                </ul>
            </div>
        </>
    );
};

export default DetailComponent;
