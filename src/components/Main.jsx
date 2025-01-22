import React from 'react'
import { Header } from './Header'
import { Outlet } from 'react-router-dom'

export const Main = () => {
  return (

    <div className="parent flex flex-col bg-gray-900 min-h-screen">
      <div className="container mx-auto w-full">
        <Header />
        <div className="flex flex-grow bg-gray-900 items-center ">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
