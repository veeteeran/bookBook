import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@material-ui/core'
import {
  getBookAddedPhrase,
  getLoadingPhrase,
  getBookRejectedPhrase
} from '../../../util/getPhrase'

const styles = require('./loadingPhrase.module.scss')

const LoadingPhrase = ({ data, rating }) => {
  const [loadingPhrase, setLoadingPhrase] = useState([])
  const [bookAdded, setBookAdded] = useState(false)
  const [isbn, setIsbn] = useState('')

  useEffect(() => {
    setLoadingPhrase(getLoadingPhrase())
    setIsbn(data.isbn)
    const timer = setTimeout(() => {
      setBookAdded(true)
    }, 5000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className={styles.section}>
      {
        !bookAdded
          ?
          <>
            <div className={styles.curiousBook} />
            <blockquote className={styles.loadingQuote}>
              <p>{loadingPhrase[0]}</p>
            </blockquote>
            <figcaption className={styles.caption}> -{loadingPhrase[1]}</figcaption>
            <CircularProgress />
          </>
          : data.isbn !== isbn
            ? <>
              <div className={styles.happyBook} />
              <p>{getBookAddedPhrase(rating - 1)}</p>
            </>
            : <>
              <div className={styles.sadBook} />
              <p>{getBookRejectedPhrase()}</p>
            </>
      }
    </div >
  )
}

export default LoadingPhrase