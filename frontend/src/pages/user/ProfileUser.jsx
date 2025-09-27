import React from 'react'
import { useSelector } from 'react-redux'

const ProfileUser = () => {
  const {users}=useSelector((state) => state.userReducer);
  return users? (
    <div>
        
    </div>
  ):(<div>Loading...</div>)
}

export default ProfileUser