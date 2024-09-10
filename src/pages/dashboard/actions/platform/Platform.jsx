import React from 'react';
import { IoEllipsisHorizontalOutline } from 'react-icons/io5';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
    { name: 'Google', value: 700 },
    { name: 'Microsoft Teams', value: 400 },
    { name: 'Zoom', value: 300 },
];
const COLORS = ['#4285F4', '#5864A6', '#f26d21'];

const Platform = () => {
    return (
        <div className="w-full bg-neutral-950/15 border border-neutral-900/20 rounded-xl p-4 space-y-4">

            <div className="w-full flex items-center justify-between">
                <h1 className="text-lg text-neutral-100 font-medium">
                    Interview Platforms
                </h1>
                <button className='text-base text-neutral-100'>
                    <IoEllipsisHorizontalOutline />
                </button>
            </div>

            <div className="w-full flex items-center justify-between">
                {/* Show the legend title here */}
                <div className="w-1/2">
                    {/* Show the legend name with their color in rounded-full */}
                    {data.map((entry, index) => (
                        <div key={`legend-${index}`} className="flex items-center space-x-2">
                            <span
                                className="w-4 h-2 rounded-full"
                                style={{ backgroundColor: COLORS[index % COLORS.length] }}
                            />
                            <span className="text-neutral-100">{entry.name}</span>
                        </div>
                    ))}
                </div>

                <div className="flex-1 flex justify-end">
                    <PieChart width={200} height={150}>
                        <Pie
                            data={data}
                            cx="60%"
                            cy="50%"
                            innerRadius={45}
                            outerRadius={65}
                            fill="#8884d8"
                            paddingAngle={7}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </div>
            </div>
        </div>
    )
}

export default Platform
