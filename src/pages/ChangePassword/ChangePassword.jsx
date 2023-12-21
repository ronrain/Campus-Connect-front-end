// npm modules
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// services
import * as authService from '../../services/authService'

// css
import styles from './ChangePassword.module.css'

// components
import Sidebar from '../../components/SideBar/SideBar'

const ChangePassword = ({ handleAuthEvt }) => {
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    password: '',
    newPassword: '',
    newPasswordConf: '',
  })

  const handleChange = evt => {
    setMessage('')
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.changePassword(formData)
      handleAuthEvt()
      navigate('/')
    } catch (err) {
      setMessage(err.message)
    }
  }

  const { password, newPassword, newPasswordConf } = formData

  const isFormInvalid = () => {
    return !(password && newPassword && newPassword === newPasswordConf)
  }

  return (
    <>
    <Sidebar />
    <main className={styles.container}>
      <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
      <h1 className={styles.title}>Change Password</h1>
      <p className={styles.message}>{message}</p>
      <div className={styles.inputContainer}>
          <input
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
            placeholder=" "
          />
        <label className={styles.label}>
          Current Password</label>
        </div>
        <div className={styles.inputContainer}>
          <input
            type="password"
            value={newPassword}
            name="newPassword"
            onChange={handleChange}
            placeholder=" "
            />
        <label className={styles.label}>
          New Password</label>
            </div>
            <div className={styles.inputContainer}>
          <input
            type="password"
            value={newPasswordConf}
            name="newPasswordConf"
            onChange={handleChange}
            placeholder=" "
          />
        <label className={styles.label}>
          Confirm New Password</label>
        </div>
        <div>
          <div className={styles.link}>
            <Link to="/">Cancel</Link>
          </div>
          <div className={styles.button}>
          <button className={styles.button30} disabled={isFormInvalid()}>
            Change Password
          </button>
          </div>
        </div>
      </form>
    </main>
    
    </>
  )
}

export default ChangePassword
