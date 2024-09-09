import React from 'react'
import PopupBox from './popup/PopupBox'
import Overview from './overview/Overview'
import Actions from './actions/Actions'

const Dashboard = () => {
    return (
        <div className='w-full space-y-6'>
            {/* Popup box */}
            <PopupBox />

            {/*  */}
            <div className="w-full flex items-start gap-6 overflow-y-scroll flex-wrap">
                {/* Overview */}
                <Overview />

                {/* Actions */}
                <Actions />

            </div>
        </div>
    )
}

export default Dashboard