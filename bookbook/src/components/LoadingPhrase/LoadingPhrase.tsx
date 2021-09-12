import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@material-ui/core'
import { getLoadingPhrase } from '../../../util/getPhrase'

const styles = require('./loadingPhrase.module.scss')

const LoadingPhrase = ({ data }) => {
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
            ? <div className={styles.happyBook} />
            : <div className={styles.sadBook} />
      }
    </div >
  )
}

export default LoadingPhrase