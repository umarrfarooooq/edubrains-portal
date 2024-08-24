import React from 'react'
import NavigateBack from '@/components/Navigate-Back/NavigateBack'
import AddUserForm from '../Forms/User/Add-User-Form'
import AddFinanceForm from '../Forms/Finance/Add-Finance-Form'

const AddFinanceComponent = () => {
  return (
    <div>
      <div className='p-6 flex flex-col gap-4'>
        <div><NavigateBack prevPage="Add New Record"/></div>
        <div className='px-8 py-6 bg-[#F4F1EB] flex items-center justify-center rounded-xl'>
          <div className='px-6'>
            <AddFinanceForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddFinanceComponent
