import { CircularProgress, IconButton, useMediaQuery } from '@material-ui/core'
import {
  LocalLibrary as LocalLibraryIcon,
  Storefront as StorefrontIcon,
} from '@material-ui/icons'
import { getCarouselLoadingPhrase } from 'util/getPhrase'
import React, { useEffect, useState } from 'react'
import { useSpringCarousel } from 'react-spring-carousel-js'


const styles = require('./carousel.module.scss')

const BookCarousel = ({ bookData }) => {
  const [listExists, setListExists] = useState(false)
  const [booksArray, setBooksArray] = useState([])

  const createCarouselArray = (data) => {
    return data.map((book, i) => (
      {
        id: `item-${parseInt(i) + 1}`,
        renderItem:
          <div className={styles.bookData}>
            <div
              style={{
                backgroundImage: `url(${book.ImageLarge})`
              }}
              className={styles.bookCover}
            />
            <div className={styles.textContainer}>
              <p className={styles.title}>{book.Title}</p>
              <p className={styles.author}>{book.Author}</p>
            </div>
            <div className={styles.iconsContainer}>
              <IconButton
                className={styles.links}
                href="https://www.tulsalibrary.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LocalLibraryIcon />
              </IconButton>
              <IconButton
                className={styles.links}
                href="https://magiccitybooks.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StorefrontIcon />
              </IconButton>
            </div>
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

  const isMobile = useMediaQuery('(max-width:768px)')

  const { carouselFragment, getIsActiveItem, getCurrentActiveItem, useListenToCustomEvent } = useSpringCarousel({
    withThumbs: false,
    withLoop: true,
    itemsPerSlide: !listExists || isMobile ? 1 : 5,
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
              className={styles.image}
            />
            <p className={styles.phrase}>{getCarouselLoadingPhrase()}</p>
            <CircularProgress className={styles.spinner} />
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