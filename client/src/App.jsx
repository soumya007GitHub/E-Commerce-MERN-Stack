import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthLayout from './components/auth/AuthLayout'
import Login from './pages/auth/login'
import Register from "./pages/auth/register"
import AdminLayout from './components/admin/AdminLayout'
import Dashboard from './pages/admin/dashboard'
import Features from './pages/admin/features'
import Orders from './pages/admin/orders'
import Products from './pages/admin/products'
import ShoppingLayout from './components/shopping/ShoppingLayout'
import NotFound from './pages/not-found/NotFound'
import Home from './pages/shopping/home'
import Listing from './pages/shopping/listing'
import Checkout from './pages/shopping/checkout'
import Account from './pages/shopping/account'

const App = () => {
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <Routes>
        {/* Auth */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        {/* Admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="features" element={<Features />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<Products />} />
        </Route>
        {/* Shopping */}
        <Route path="/shop" element={<ShoppingLayout />}>
          <Route index element={<Home />} />
          <Route path="listing" element={<Listing />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="account" element={<Account />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App