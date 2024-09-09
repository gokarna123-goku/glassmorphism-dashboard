import React, { PureComponent } from 'react';
import { IoEllipsisHorizontalOutline } from 'react-icons/io5';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { month: 'Jan', office: 40, remote: 20 },
    { month: 'Feb', office: 30, remote: 25 },
    { month: 'Mar', office: 50, remote: 30 },
    { month: 'Apr', office: 35, remote: 20 },
    { month: 'May', office: 38, remote: 22 },
    { month: 'Jun', office: 60, remote: 35 },
    { month: 'Jul', office: 45, remote: 28 },
    { month: 'Aug', office: 55, remote: 33 },
    { month: 'Sep', office: 40, remote: 25 },
    { month: 'Oct', office: 60, remote: 40 },
    { month: 'Nov', office: 50, remote: 30 },
    { month: 'Dec', office: 65, remote: 45 },
];

const SatisfactionChart = () => {
    return (
        <div className="w-full bg-neutral-950/15 border border-neutral-900/20 rounded-xl p-4 space-y-6">
            <div className="w-full flex items-center justify-between">
                <h1 className="text-lg text-neutral-100 font-medium">
                    Employer Satisfaction
                </h1>
                <button className='text-base text-neutral-100'>
                    <IoEllipsisHorizontalOutline />
                </button>
            </div>
            <ResponsiveContainer width="100%" height={270}>
                <AreaChart data={data}>
                    <CartesianGrid strokeDasharray="2 2" stroke="#8884d8" />
                    <XAxis dataKey="month" stroke="#D1D5DB" />
                    <YAxis stroke="#D1D5DB" />
                    <Tooltip
                        contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                        labelStyle={{ color: '#9CA3AF' }}
                        itemStyle={{ color: '#F9FAFB' }}
                    />
                    <Area type="monotone" dataKey="office" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="remote" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default SatisfactionChart
