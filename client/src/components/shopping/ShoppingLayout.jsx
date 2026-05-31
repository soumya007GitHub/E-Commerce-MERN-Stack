import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const ShoppingLayout = () => {
    return (
        <div className='flex flex-col bg-white overflow-hidden'>
            {/* Header */}
            <Header />
            <main className="flex flex-col w-full">
                <Outlet />
            </main>
        </div>
    )
}

export default ShoppingLayout