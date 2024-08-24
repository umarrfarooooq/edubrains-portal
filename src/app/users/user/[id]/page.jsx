import UserDetail from '@/components/Users/User-Detail'
import React from 'react'

const User = ({ params }) => {
  return (
    <div>
      <UserDetail id={params.id}/>
    </div>
  )
}

export default User
