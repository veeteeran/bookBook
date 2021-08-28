import React, { useState } from 'react'

const InputTest = () => {
  const [textInput, setTextInput] = useState('')
  const [data, setData] = useState([])
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(event.target.value)
  }
  // useEffect(() => {
  //   // GET request using fetch inside useEffect React hook
  //   fetch("http://localhost:5000/api/3")
  //     .then(response => response.json())
  //     .then(data => setData(data));

  //   // empty dependency array means this effect will only run once (like componentDidMount in classes)
  // }, []);
  // console.log(data)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // fetch(`/api/${textInput}`)
    fetch(`http://localhost:5000/api/${textInput}`)
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