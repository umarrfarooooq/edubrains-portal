import React, { useEffect } from 'react'
import Wellcome from '@/components/Wellcome/Wellcome'
import FilterIcon from '@/components/icons/FilterIcon'
import Tabs from '../Tabs/Tabs'
import { useDispatch, useSelector } from 'react-redux'
import UserTable from './UserTable'
import { getAllUsers } from '../store/userSlice'

const UserSide = () => {
  const dispatch = useDispatch()
  const activeTab = useSelector((state) => state.tabs.activeTab)
  const users = useSelector((state) => state.user.users)
  const loading = useSelector((state) => state.user.loading)
  const error = useSelector((state) => state.user.error)

  const tabs = ["Students", "Teachers", "Staff", "Admins"];

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])

  const filteredUsers = Array.isArray(users) 
    ? users.filter(user => {
        return user
      })
    : []


  return (
    <div className='w-full bg-[#FFF9EF] min-h-screen p-6 flex flex-col gap-4'>
      <Wellcome
        name="User Management"
        search={true} 
        shortcutAction2={<FilterIcon />}
        counts={Array.isArray(users) ? users.length : 0}
        actionBtn="Add User"
        btnRedirect="/users/add-user"
      />
      <div className='p-6 rounded-xl border border-[#F4F1EB] bg-[#FFFDFA] flex flex-col gap-4'>
        <div>
          <Tabs tabs={tabs} defaultTab="Students" />
        </div>
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <UserTable tabName={activeTab} users={filteredUsers} />
          )}
        </div>
      </div>
    </div>
  )
}

export default UserSide