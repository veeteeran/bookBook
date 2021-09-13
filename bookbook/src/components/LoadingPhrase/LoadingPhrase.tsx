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
    }, 3500)

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
            <blockquote className={styles.loadingPhrase}>
              <p>{loadingPhrase[0]}</p>
            </blockquote>
            <p className={styles.caption}> -{loadingPhrase[1]}</p>
          </>
          : data.isbn !== isbn
            ? <>
              <div className={styles.happyBook} />
              <p className={styles.loadingPhrase}>{getBookAddedPhrase(rating - 1)}</p>
            </>
            : <>
              <div className={styles.sadBook} />
              <p className={styles.loadingPhrase}>{getBookRejectedPhrase()}</p>
            </>
      }
      <CircularProgress size='3vw' />
    </div >
  )
}

export default LoadingPhrase