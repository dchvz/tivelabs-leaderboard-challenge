import React from 'react'
import { Avatar } from "./Avatar"

export function Navbar(props) {
  const {username} = props
  return (
    <div className="shadow-md  bg-blue-400 p-2 mb-10">
      <div className="flex flex-row-reverse items-center gap-10 content-center ">
        <Avatar />
        <p className="font-medium text-white text-right">{username}</p>
      </div>
    </div>
  )
}