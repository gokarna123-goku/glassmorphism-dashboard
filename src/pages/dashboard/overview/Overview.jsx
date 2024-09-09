import React from 'react'
import Employee from './employee/Employee'
import SatisfactionChart from './satisfactionChart/SatisfactionChart'

const Overview = () => {
    return (
        <div className='md:flex-1 w-full space-y-6'>
            {/* Employee Card */}
            <Employee />

            {/* Charts Graphical representation */}
            {/* Satisfaction */}
            <SatisfactionChart />

        </div>
    )
}

export default Overview