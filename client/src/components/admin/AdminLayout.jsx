import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import Header from './Header'

const AdminLayout = () => {
    return (
        <div className='flex min-h-screen w-full'>
            {/* SideBar */}
            <SideBar />
            <div className='flex flex-1 flex-col'>
                {/* Admin Header */}
                <Header />
                <main className='flex-1 flex bg-muted/40 p-4 md:p-6'>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default AdminLayout