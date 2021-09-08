import React, { useEffect, useState } from 'react'
const styles = require('./carousel.module.scss')


const BookCarousel = () => {
  const [booksData, setBooksData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`/api/getBookData`)
        .then(response => response.json())
        .then(data => { setBooksData(data) })
        .catch(err => console.log(err))
    }
    fetchData()
  }, [])
  return (
    <div className={styles.section}>
      {booksData.map((book, i) => (
        <div key={i} className={styles.container}>
          <div className={styles.image} style={{ backgroundImage: `url(${book.ImageLarge})` }} />
          <p>{book.Title}</p>
          <p>{book.Author}</p>
        </div>
      ))}
    </div>
  )
}

export default BookCarousel