import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SellCar from './pages/SellCar'
import BuyCar from './pages/BuyCar'
import About from './pages/About'
import ProtectedRoute from './components/ProtectedRoute'

import CarDetails from './components/BuyCar/CarDetails'
import Login from './components/Login'
import Register from './components/Register'
import UserHomePage from './components/UserHomePage'
import { UserAuthContextProvider } from './Context/UserAuthContext'
import ContactUs from './components/ContactUs'
import UserCarDetails from './components/UserCarDetails'
import ManageProfile from './components/ManageProfile'
import UpdateLogin from './components/UpdateLogin'

import Layout from './components/Admin/Layout'
import Dashboard from './components/Admin/Dashboard'
import UsersList from './components/Admin/Users/UsersList'
import DeleteUsers from './components/Admin/Users/DeleteUsers'
import SellcarsList from './components/Admin/Sellers/SellCarsList'
import DeleteSellCar from './components/Admin/Sellers/DeleteSellCar'
import AddCarMake from './components/Admin/Cars/AddCarMake'
import AddCarModel from './components/Admin/Cars/AddCarModel'
import DeleteCarmake from './components/Admin/Cars/DeleteCarMake'
import CarMakeList from './components/Admin/Cars/CarMakeList'
import SellcarList from './components/Admin/Sellers/SellCarsList'
import DeleteCarModel from './components/Admin/Cars/DeleteCarModel'
import Cities from './components/Admin/Locations/Cities'
import UserCars from './components/UserCars'
import AdminLogin from './components/Admin/AdminLogin'
import AdminProtectedRoute from './components/Admin/AdminProtectedRoute'
import Contacts from './components/Admin/Contacts/Contacts'

export default function App() {
  return (
    <UserAuthContextProvider>
      <BrowserRouter basename='/auto-portal'>
        <Routes>
          
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>}/>

          <Route path="/" element={<Login/>}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/sell-car" element={<ProtectedRoute><SellCar /></ProtectedRoute>}></Route>
          <Route path="/buy-car" element={<ProtectedRoute><BuyCar /></ProtectedRoute>}></Route>
          <Route path="/buy-car/car-details/:id" element={<ProtectedRoute><CarDetails /></ProtectedRoute>}></Route>
          <Route path="/user-home-page" element={<ProtectedRoute><UserHomePage /></ProtectedRoute>}></Route>
          <Route path="/contact-us" element={<ProtectedRoute><ContactUs /></ProtectedRoute>}></Route>
          <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>}></Route>
          <Route path="/user-car-details" element={<ProtectedRoute><UserCarDetails /></ProtectedRoute>}></Route>
          <Route path="/manage-profile" element={<ProtectedRoute><ManageProfile /></ProtectedRoute>}></Route>
          <Route path="/update-login" element={<ProtectedRoute><UpdateLogin /></ProtectedRoute>}></Route>
          <Route path="/user-cars" element={<ProtectedRoute><UserCars /></ProtectedRoute>}></Route>

          {/* Admin Routing */}
          
          <Route path="/admin" element={<AdminLogin />}></Route>
          <Route path="/admin/dashboard" element={<AdminProtectedRoute><Layout /></AdminProtectedRoute>}></Route>
          <Route path="/admin/users" element={<AdminProtectedRoute><UsersList /></AdminProtectedRoute>}></Route>
          <Route path="/admin/sellers/sell-cars-list" element={<AdminProtectedRoute><SellcarsList /></AdminProtectedRoute>}></Route>
          <Route path="/admin/sellers/:id" element={<AdminProtectedRoute><SellcarList /></AdminProtectedRoute>}></Route>
          <Route path="/admin/cars/add-car-make" element={<AdminProtectedRoute><AddCarMake /></AdminProtectedRoute>}></Route>
          <Route path="/admin/cars/add-car-model" element={<AdminProtectedRoute><AddCarModel /></AdminProtectedRoute>}></Route>
          <Route path="/admin/cars/delete-car-make/:id" element={<AdminProtectedRoute><AddCarMake /></AdminProtectedRoute>}></Route>
          <Route path="/admin/cars/delete-car-model/:id" element={<AdminProtectedRoute><AddCarModel /></AdminProtectedRoute>}></Route>
          <Route path="/admin/locations" element={<AdminProtectedRoute><Cities /></AdminProtectedRoute>}></Route>
          <Route path="/admin/locations/:id" element={<AdminProtectedRoute><Cities /></AdminProtectedRoute>}></Route>
          <Route path="/admin/contacts" element={<AdminProtectedRoute><Contacts /></AdminProtectedRoute>}></Route>
          <Route path="/admin/delete-contacts/:id" element={<AdminProtectedRoute><Contacts /></AdminProtectedRoute>}></Route>

        </Routes>
      </BrowserRouter>
    </UserAuthContextProvider>
  )
}

