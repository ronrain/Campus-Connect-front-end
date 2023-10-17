// npm modules
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// services
import * as authService from '../../services/authService'

// css
import styles from './Login.module.css'

const LoginPage = ({ handleAuthEvt }) => {
  const navigate = useNavigate()

  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = evt => {
    setMessage('')
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      if (!import.meta.env.VITE_BACK_END_SERVER_URL) {
        throw new Error('No VITE_BACK_END_SERVER_URL in front-end .env')
      }
      await authService.login(formData)
      handleAuthEvt()
      navigate('/')
    } catch (err) {
      console.log(err)
      setMessage(err.message)
    }
  }

  const { email, password } = formData

  const isFormInvalid = () => {
    return !(email && password)
  }

  return (
    <main className={styles.container}>
      <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
      <h1 className={styles.title}>Log In</h1>
      <p className={styles.message}>{message}</p>
      <div className={styles.inputContainer}>
          <input
            type="text"
            value={email}
            name="email"
            onChange={handleChange}
            placeholder=" "
          />
        <label className={styles.label}>Email</label>
        </div>
        <div className={styles.inputContainer}>
          <input
            required
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
            placeholder=" "
          />
          <label className={styles.label}>
          Password</label>
        </div>
        <div>
        <div className={styles.link}>
            <Link to="/">Cancel</Link>
          </div>
          <div className={styles.button}>
          <button className={styles.button30} disabled={isFormInvalid()}>
            Log In
          </button>
          </div>
        </div>
      </form>
    </main>
  )
}

export default LoginPage
