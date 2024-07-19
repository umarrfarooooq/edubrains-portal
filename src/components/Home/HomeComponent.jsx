import React from 'react'
import Sidebar from '@/components/Sidebar/Sidebar'
import HomeRight from './HomeRight'

const HomeComponent = () => {
  return (
    <div>
        <div className='md:flex'>
            <div>
                <Sidebar />
            </div>
            <div className='w-full'>
              <HomeRight />
            </div>
        </div>
    </div>
  )
}

export default HomeComponent
