import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className="flex">
            <div className="basis-[18%]">
                <Sidebar></Sidebar>
            </div>
            <div className="bg-gray-300/40 basis-[82%]">
                <Header></Header>
                <Dashboard></Dashboard>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}

export default Layout
