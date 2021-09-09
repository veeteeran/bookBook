import React, { useEffect, useState } from 'react'
const styles = require('./carousel.module.scss')
import { useSpringCarousel } from 'react-spring-carousel-js'

const BookCarousel = () => {
  const [listExists, setListExists] = useState(false)
  const [booksData, setBooksData] = useState([])
  const [booksArray, setBooksArray] = useState([])

  // const fetchData = async () => {
  //   await fetch(`/api/getBookData`)
  //     .then(response => response.json())
  //     .then(data => setBooksData(data))
  //     .catch(err => console.log(err))
  // }

  // console.log(`BOOKSDATA:`, booksData)

  const createCarouselArray = (data) => {
    return data.map((book, i) => (
      {
        id: `item-${i + 1}`,
        renderItem:
          <div style={{
            display: 'flex',
            flexDirection: 'column',
          }} >
            <div style={{
              backgroundImage: `url(${book.ImageLarge})`,
              width: '10vw',
              height: '10vw',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center'
            }} />
            <p>{book.Title}</p>
            <p>{book.Author}</p>
          </div>
      }
    ))
  }

  const doIt = () => {
    // fetchData()
    const foo = createCarouselArray(booksData)
    setBooksArray(foo)
    setListExists(true)
  }
  console.log(`bOOKSaRRAY: `, booksArray)
  useEffect(() => {
    let cancel = false
    const fetchData = async () => {
      await fetch(`/api/getBookData`)
        .then(response => response.json())
        .then(data => setBooksData(data))
        .catch(err => console.log(err))
    }
    fetchData()
    return () => {
      cancel = true
    }
  }, [])

  const { carouselFragment } = useSpringCarousel({
    withThumbs: false,
    withLoop: true,
    itemsPerSlide: listExists ? 5 : 1,
    initialStartingPosition: 'center',
    items: listExists ? booksArray : [{ id: "item-1", renderItem: <p>List does not exist</p> }]
  });
  return (
    <div className={styles.section}>
      {
        listExists
          ? <div style={{
            width: '100%', display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', overflow: 'hidden'
          }}>
            {carouselFragment}
          </div>
          : <button onClick={doIt}>Get List</button>
      }
    </div>
  )
}

export default BookCarousel