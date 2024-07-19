"use client"
import React from 'react'
import BackIcon from '../icons/BackIcon'
import { useRouter } from 'next/navigation'; 

const NavigateBack = ({prevPage}) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className='p-6 rounded-xl border border-[#F4F1EB] bg-[#FFFDFA] flex items-center gap-5'>
      <div className='cursor-pointer' onClick={handleBack}><BackIcon /></div>
      <div className='text-lg font-semibold'>{prevPage}</div>
    </div>
  )
}

export default NavigateBack
