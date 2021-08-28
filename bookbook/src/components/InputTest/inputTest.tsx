import React, { useState } from 'react'

const InputTest = () => {
  const [textInput, setTextInput] = useState('')
  const [data, setData] = useState([])
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(event.target.value)
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    fetch(`https://venv-rouge-eight.vercel.app/api/${textInput}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.log(err))
    // call serverless function
    console.log(`You typed ${textInput}`)
  }
  console.log(data)
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