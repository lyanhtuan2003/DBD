import React from 'react';
import ContentInvest from '../home/content-invest/content-invest.component';
import { Card, Col, Row, Divider } from 'antd';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const HomeComponent = () => {
    const members = [
        { name: 'Người Dùng 1', phoneNumber: '123-456-7890' },
        { name: 'Người Dùng 2', phoneNumber: '987-654-3210' },
        { name: 'Người Dùng 3', phoneNumber: '555-123-4567' },
    ];

    const data = [
        { name: 'Tháng 1', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Tháng 2', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Tháng 3', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Tháng 4', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Tháng 5', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Tháng 6', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Tháng 7', uv: 3490, pv: 4300, amt: 2100 },
        { name: 'Tháng 8', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Tháng 9', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Tháng 10', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Tháng 11', uv: 3490, pv: 4300, amt: 2100 },
        { name: 'Tháng 12', uv: 3490, pv: 4300, amt: 2100 },
    ];

    return (
        <div className='sm:w-[1400px] m-auto'>
            <div>
                <img
                    src="https://img.lovepik.com//back_pic/05/82/23/985c4032749c148.jpg_wh860.jpg"
                    alt=""
                    className='w-full sm:h-[350px]'
                />
            </div>
            <div className='mt-2'>
                <ContentInvest />
            </div>
            <div className='mt-4'>
                <Row>
                    <Col span={24}>
                        <Card title="Sơ Đồ Đầu Tư" bordered={false}>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart
                                    data={data}
                                    margin={{
                                        top: 3,
                                        bottom: 5,
                                    }}
                                >
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                                    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                                </LineChart>
                            </ResponsiveContainer>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div>

            </div>
            <div className='flex flex-col-reverse mt-5'>
                {members.map((member, index) => (
                    <div
                        key={index}
                        className='p-4 mb-4 bg-blue-100 rounded-md shadow-md animate-slide-up'
                    >
                        <h3 className='text-xl font-semibold text-blue-800'>
                            {member.name}
                        </h3>
                        <p className='text-gray-600'>{member.phoneNumber}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeComponent;
