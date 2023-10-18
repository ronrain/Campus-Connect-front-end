// npm modules
import { useState, useEffect} from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import SchoolList from './pages/SchoolServices/SchoolList'
import ServiceList from './pages/SchoolServices/ServiceList'
import ProfileServices from './pages/Profiles/ProfileServices'
import ServicesShow from './pages/ServicesDetails/ServicesShow'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import NewService from './components/ServiceForm/ServiceForm'

// services
import * as authService from './services/authService'
import * as serviceService from './services/serviceService'
import * as schoolService from './services/schoolService'

// styles
import './App.css'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const [services, setServices] = useState([])
  const navigate = useNavigate()
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      const schools = await schoolService.getAllSchools()
      setSchools(schools);
    }
    fetchSchools()
  }, [])

  const handleSchoolSearch = formData => {
    const filteredSchoolResults = schools.filter(school => (
      school.name.toLowerCase().includes(formData.query.toLowerCase()) 
    ))
    setSchools(filteredSchoolResults)
  }

  const refreshList = () => {
    const fetchSchools = async () => {
      const schools = await schoolService.getAllSchools()
      setSchools(schools);
    }
    fetchSchools()
  }

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
          path="/profile"
          element={
            <ProtectedRoute user={user}>
              <Profiles user={user} />
            </ProtectedRoute>
          }
        />
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
        
        <Route path="/schools" element={
          <SchoolList
            schools={schools}
            handleSchoolSearch={handleSchoolSearch}
            refreshList={refreshList}
          />} />
        <Route path="/schools/:schoolId" element={
        
        <ServiceList
          user={user}
        />} />

        <Route path="service/new" element={
        <NewService 
        handleAddService={handleAddService}
        schools={schools}
        />} />
        <Route path='/service/:serviceId'
        element={
          <ProtectedRoute user={user}>
            <ServicesShow user={user}/>
          </ProtectedRoute >
        }/>
      </Routes>
      <Route 
          path='/service/:serviceId/edit'
          element={
            <ProtectedRoute user={user}>
              <EditService handleUpdateBlog={handleUpdateService} />
            </ProtectedRoute>
          }
        />
    </>
  )
}

export default App
