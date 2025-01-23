import React from 'react'
import { Header } from './Header'
import { Outlet } from 'react-router-dom'

export const Main = () => {
  return (

    <div className="parent flex flex-col bg-gray-900 min-h-screen overflow-hidden pb-10">
      <div className=" mx-auto w-full">
        <div className="sm:fixed w-full z-50 top-0 left-0">
        <Header />
        </div>
        <div className="flex flex-grow bg-gray-900 items-center container mx-auto pt-10">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
