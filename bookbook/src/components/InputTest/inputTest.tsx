import React, { useEffect, useState } from 'react'

const InputTest = () => {
  const [textInput, setTextInput] = useState('')
  const [data, setData] = useState(null);
  const handleChange = event => {
    setTextInput(event.target.value);
  }
  // useEffect(() => {
  //   // GET request using fetch inside useEffect React hook
  //   fetch("http://localhost:5000/api/3")
  //     .then(response => response.json())
  //     .then(data => setData(data));

  //   // empty dependency array means this effect will only run once (like componentDidMount in classes)
  // }, []);
  console.log(data)
  const handleSubmit = event => {
    event.preventDefault()
    fetch(`/api/${textInput}`)
      // fetch(`http://localhost:5000/api/${textInput}`)
      // fetch(`https://api-test-eight-iota.vercel.app/api/${textInput}`)
      // , {
      // mode: 'no-cors',
      //   method: "get",
      //     headers: {
      //   "Content-Type": "application/json"
      // }
      // })
      .then(response => response.json())
      .then(data => setData(data));
    // call serverless function
    console.log(`You typed ${textInput}`)
  }
  console.log(data)
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <textarea onChange={handleChange} value={textInput} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default InputTest