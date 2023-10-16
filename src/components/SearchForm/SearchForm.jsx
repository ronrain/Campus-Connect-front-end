// npm modules
import { useState } from 'react'

// css
import styles from './SearchForm.module.css'

const SearchForm = (props) => {
  const [formData, setFormData] = useState({query: ''})

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleSchoolSearch(formData)
  }

  return (
    <form action="" className={styles.container} onSubmit={handleSubmit}>
      <input className={styles.input}
        name="query"
        type="text"
        autoComplete="off"
        pattern='.*\S.*' required
        placeholder='Search...'
        value={formData.query}
        onChange={handleChange}
        placeholder="Search by Schools name"
      />
        <div className={styles.search}></div>
    </form>
  )
}

export default SearchForm