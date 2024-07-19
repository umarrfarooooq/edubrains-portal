import React from 'react'
import Wellcome from '@/components/Wellcome/Wellcome'
import AllOverviewCards from './AllOverviewCards'
import CommunicationIcon from '@/components/icons/CommunicationIcon'
import NotificationIcon from '@/components/icons/NotificationIcon'

const HomeRight = () => {
  return (
    <div className='w-full bg-[#FFF9EF] min-h-screen p-6 flex flex-col gap-4'>
      <Wellcome
        name="Overview"
        search={true} 
        shortcutAction1={<CommunicationIcon />}
        shortcutAction2={<NotificationIcon />} 
        counts={2}
        greeting={true}  
        />
      <AllOverviewCards />
    </div>
  )
}

export default HomeRight
