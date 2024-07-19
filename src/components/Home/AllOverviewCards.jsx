import React from 'react'
import OverviewCard from './OverviewCard'

const AllOverviewCards = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
      <OverviewCard />
      <OverviewCard />
      <OverviewCard />
      <OverviewCard />
    </div>
  )
}

export default AllOverviewCards
