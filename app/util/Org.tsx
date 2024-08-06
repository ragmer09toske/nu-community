import React from 'react'
import useStore from "@/app/Store"

const Org = () => {
  localStorage.getItem("user")
  const UserDetails = useStore((state) => state.user);
  return (
    <div>{UserDetails?.acount}</div>
  )
}

export default Org