import React from 'react'
import StudentsIcon from '@/components/icons/StudentsIcon'
import RightArrowIcon from '@/components/icons/RightArrowIcon'

const OverviewCard = () => {
  return (
    <div className='p-4 rounded-xl border border-[#F4F1EB] bg-[#FFFDFA]'>
      <div className='flex flex-col gap-4'>
        <div>
            <div className='w-10 h-10 rounded-lg bg-[#F4F1EB] flex items-center justify-center'>
                <StudentsIcon />
            </div>
        </div>
        <div className='flex flex-col gap-1'>
            <div className='text-[0.6875rem] text-[#696969]'>Total Students</div>
            <div className='text-lg text-[#151515] font-semibold'>1585</div>
            <hr />
        </div>
        <div className='flex items-center justify-between'>
            <div>View All</div>
            <div><RightArrowIcon /></div>
        </div>
      </div>
    </div>
  )
}

export default OverviewCard
