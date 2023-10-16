// npm modules
import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import SchoolList from './pages/SchoolServices/SchoolList'
import ServiceList from './pages/SchoolServices/ServiceList'

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
  const [services, setServices] = useState([])
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = () => {
    setUser(authService.getUser())
  }

  const handleAddService = async (serviceFormData, schoolId) => {
    const newService = await serviceService.create(serviceFormData, schoolId)

    navigate('/')
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
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
        <Route path="/schools" element={<SchoolList />} />
        <Route path="/:schoolId" element={<ServiceList />} />
        <Route path="/:schoolId/services/new" element={<NewService />} />
      </Routes>
    </>
  )
}

export default App
