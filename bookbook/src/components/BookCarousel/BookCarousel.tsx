import React, { useEffect, useState } from 'react'
const styles = require('./carousel.module.scss')
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

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
          <Carousel responsive={responsive}>
            {/* <div className={styles.image} style={{ backgroundImage: `url(${book.ImageLarge})` }} />
            <p>{book.Title}</p>
            <p>{book.Author}</p> */}
            <img
              src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              style={{
                display: 'block',
                height: '100%',
                margin: 'auto',
                width: '100%'
              }}
            />
            <img
              src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              style={{
                display: 'block',
                height: '100%',
                margin: 'auto',
                width: '100%'
              }}
            />
          </Carousel>
        </div>
      ))}
      {/* <Carousel responsive={responsive}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel> */}
      <img
        src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        style={{
          display: 'block',
          height: '100%',
          margin: 'auto',
          width: '100%'
        }}
      />
      <img
        src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        style={{
          display: 'block',
          height: '100%',
          margin: 'auto',
          width: '100%'
        }}
      />
    </div>
  )
}

export default BookCarousel