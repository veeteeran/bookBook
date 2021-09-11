import React, { useEffect, useState } from 'react'
const styles = require('./carousel.module.scss')
import { useSpringCarousel } from 'react-spring-carousel-js'

const BookCarousel = () => {
  const [listExists, setListExists] = useState(false)
  const [booksData, setBooksData] = useState([])
  const [booksArray, setBooksArray] = useState([])

  const createCarouselArray = (data) => {
    return data.map((book, i) => (
      {
        id: `item-${i + 1}`,
        renderItem:
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              // filter: 'blur(4px)',
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
    const foo = createCarouselArray(booksData)
    setBooksArray(foo)
    setListExists(true)
  }

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

  const { carouselFragment, getIsActiveItem, getCurrentActiveItem, useListenToCustomEvent } = useSpringCarousel({
    withThumbs: false,
    withLoop: true,
    itemsPerSlide: listExists ? 5 : 1,
    initialStartingPosition: 'center',
    items: listExists ? booksArray : [{ id: "item-1", renderItem: <p>List does not exist</p> }]
  });
  // console.log('Current active item', getCurrentActiveItem())

  useListenToCustomEvent((data) => {
    if (data.eventName === "onSlideChange") {
      // Once we've narrowed the type of event
      // you can safetely access to the props
      // related to the current event.
      const activeItem = getCurrentActiveItem()
      console.log(data.currentItem === activeItem.index)
    }
  })
  return (
    <div className={styles.section}>
      {
        listExists
          ? <div style={{
            width: '100%',
            display: 'grid',
            // gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
            // overflow: 'hidden'
          }}>
            {carouselFragment}
          </div>
          : <button onClick={doIt}>Get List</button>
      }
      {/* {console.log('Active item === 1: ', getIsActiveItem('1'))} */}
      {/* <div style={{
        width: '100%',
        display: 'grid',
        // gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        // overflow: 'hidden'
      }}>
        {carouselFragment}
      </div> */}
    </div>
  )
}

export default BookCarousel