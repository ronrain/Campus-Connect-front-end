// npm modules
import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import SchoolList from './pages/SchoolList/SchoolList'
import ServiceList from './pages/ServiceList/ServiceList'
import ProfileServices from './pages/profile/ProfileServices'
import ServicesShow from './pages/ServicesShow/ServicesShow'
import EditService from './pages/EditService/EditService'
import BookingForm from './pages/Bookings/BookingForm/BookingForm'
import BookingsList from './pages/Bookings/BookingsList'
import UserBookingsList from './pages/Bookings/UserBookingsList'
import MyProfile from './pages/profile/MyProfile.jsx'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import NewService from './components/ServiceForm/ServiceForm'

// services
import * as authService from './services/authService'
import * as serviceService from './services/serviceService'

// styles
import './App.css'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  const [editMode, setEditMode] = useState(false)

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = () => {
    setUser(authService.getUser())
  }

  const handleAddService = async (serviceFormData, schoolId) => {
    await serviceService.create(serviceFormData, schoolId)
    navigate('/')
  }

  const toggleEditMode = () => {
    setEditMode(!editMode)
  }

  const handleUpdateService = async (serviceFormData) => {
    await serviceService.updateService(serviceFormData)
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route 
          path='/profile/services'
          element={
            <ProtectedRoute user={user}>
              <ProfileServices user={user} />
            </ProtectedRoute>
          }      
        />
        <Route
          path="/auth/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
        
        <Route 
          path="/schools" 
          element={
            <SchoolList />
          } 
        />
        <Route 
          path="/schools/:schoolId" 
          element={
            <ServiceList user={user}/>
          } 
        />

        <Route path="service/new" element={
        <NewService 
        handleAddService={handleAddService}
        />} />
        <Route path='/service/:serviceId'
        element={
          <ProtectedRoute user={user}>
            <ServicesShow user={user}/>
          </ProtectedRoute >
        }/>
      <Route 
          path='/service/:serviceId/edit'
          element={
            <ProtectedRoute user={user}>
              <EditService 
              Service={toggleEditMode} 
              handleUpdateService={handleUpdateService}/>
            </ProtectedRoute>
          }
          />
      <Route 
        path='/service/:serviceId/booking/new'
        element={
          <ProtectedRoute user={user}>
            <BookingForm user={user}/>
          </ProtectedRoute>
        }
      />
      <Route 
        path='/profile/services/:serviceId/bookings' 
        element={
          <ProtectedRoute user={user}>
            <BookingsList user={user}/>
          </ProtectedRoute>
        }
      />
      <Route 
        path='/profile/bookings' 
        element={
          <ProtectedRoute user={user}>
            <UserBookingsList user={user}/>
          </ProtectedRoute>
        }
      />
      <Route 
        path='/myProfile' 
        element={
          <ProtectedRoute user={user}>
            <MyProfile user={user}/>
          </ProtectedRoute>
        }
      />
      </Routes>
    </>
  )
}

export default App
