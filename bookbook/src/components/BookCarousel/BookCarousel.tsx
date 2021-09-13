import React, { useEffect, useState } from 'react'
const styles = require('./carousel.module.scss')
import { useSpringCarousel } from 'react-spring-carousel-js'
import { CircularProgress } from '@material-ui/core'
import { getCarouselLoadingPhrase } from 'util/getPhrase'
import bookEater from '../../../static/kelsie.jpeg'

const BookCarousel = ({ bookData }) => {
  const [listExists, setListExists] = useState(false)
  const [booksArray, setBooksArray] = useState([])

  const createCarouselArray = (data) => {
    return data.map((book, i) => (
      {
        id: `item-${parseInt(i) + 1}`,
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
    const foo = createCarouselArray(bookData)
    setBooksArray(foo)
    setListExists(true)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      doIt()
    }, 3500)

    return () => clearTimeout(timer)
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
            display: 'grid'
          }}>
            {carouselFragment}
          </div>
          : <div className={styles.container}>
            <div
              // style={{
              //   backgroundImage: `url(${bookEater})`,
              //   width: '10vw',
              //   height: '10vw',
              //   backgroundSize: 'contain',
              //   backgroundRepeat: 'no-repeat',
              //   backgroundPosition: 'center center'
              // }}
              className={styles.image}
            />
            <p className={styles.phrase}>{getCarouselLoadingPhrase()}</p>
            <CircularProgress size='3vw' />
          </div>
      }
      {console.log('Active item === 1: ', getIsActiveItem('1'))}
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