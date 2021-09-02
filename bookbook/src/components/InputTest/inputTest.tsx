import React, { useEffect, useState } from 'react'

const InputTest = () => {
  const [textInput, setTextInput] = useState('')
  const [data, setData] = useState({})
  const [userId, setUserId] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(event.target.value)
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const rating = 10
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
    <form onSubmit={handleSubmit}>
      <label>
        <input
          onChange={handleChange}
          placeholder='Add a book'
          type='text'
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default InputTest