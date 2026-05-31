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
import CheckAuth from './components/common/check-auth'

const App = () => {

  const isAuthenticated = true;
  const user = {
    'role' : 'user'
  };
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <Routes>
        {/* Auth */}
        <Route path="/auth" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout/>
          </CheckAuth>
        }>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        {/* Admin */}
        <Route path="/admin" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout/>
          </CheckAuth>
        }>
          <Route index element={<Dashboard />} />
          <Route path="features" element={<Features />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<Products />} />
        </Route>
        {/* Shopping */}
        <Route path="/shop" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShoppingLayout/>
          </CheckAuth>
        }>
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