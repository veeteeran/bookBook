import { Box } from '@material-ui/core'
// import Header from '../Header/Header'
import Rating from '@material-ui/lab/Rating'
import React, { useState } from 'react'
const styles = require('./welcome.module.scss')

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
}

const Welcome = () => {
  const [textInput, setTextInput] = useState('')
  const [data, setData] = useState({})
  const [userId, setUserId] = useState('')
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(-1)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(event.target.value)
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // const rating = 10
    const url = userId === ''
      ? `/api/getISBN/?title=${textInput}&rating=${rating}`
      : `/api/getISBN/?title=${textInput}&rating=${rating}&userId=${userId}`

    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.log(err))
    // call serverless function
    // console.log('DATA AFTER FETCH', data)
    // console.log('userId before setting state', userId)
    if (userId === '')
      setUserId(data['userId'])
    // console.log(`You typed ${textInput}`)
  }
  // console.log(userId)
  // console.log(localStorage.getItem('userId'))
  return (
    <div className={styles.section}>
      <h1 className={styles.title}>Feed me your favorites</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            onChange={handleChange}
            placeholder='A Tale of Two Cities'
            type='text'
          />
        </label>
        {/* <button type="submit">Submit</button> */}
      </form>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="simple-controlled"
          value={rating / 2}
          onChange={(event, newRating) => {
            setRating(newRating * 2)
          }}
          precision={0.5}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
        />
        {rating !== null && <Box ml={2}>{labels[hover !== -1 ? hover : rating]}</Box>}
      </Box>
      <button className={styles.button} type="submit">Submit</button>
    </div>
  )
}

export default Welcome