import React from 'react'
import { Header } from './Header'
import { Outlet } from 'react-router-dom'
import { Home } from './Home'

export const Main = () => {
  return (

<div className="parent flex flex-col mx-auto bg-gray-900 min-h-screen w-full">
  <div className="container mx-auto flex flex-col h-full">
    <Header />
    <div className="flex flex-grow bg-gray-900 items-center min-h-[80vh] ">
      <Outlet />
    </div>
  </div>
</div>

  )
}
