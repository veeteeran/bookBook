import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@material-ui/core'
import { getLoadingPhrase } from '../../../util/getPhrase'

const styles = require('./loadingPhrase.module.scss')

const LoadingPhrase = ({ data, isLoading }) => {
  const [loadingPhrase, setLoadingPhrase] = useState([])
  const [bookAdded, setBookAdded] = useState(false)

  useEffect(() => {
    setLoadingPhrase(getLoadingPhrase())
    const timer = setTimeout(() => {
      if (data)
        setBookAdded(true)
    }, 7500)

    return () => {
      clearTimeout(timer)
    }
  }, [bookAdded])
  console.log('bookAdded inside LoadingPhrase: ', bookAdded)
  console.log('isLoading inside LoadingPhrase: ', isLoading)
  return (
    <div className={styles.section}>
      {
        isLoading && !bookAdded
          ?
          <>
            <div className={styles.curiousBook} />
            <blockquote className={styles.loadingQuote}>
              <p>{loadingPhrase[0]}</p>
            </blockquote>
            <figcaption className={styles.caption}> -{loadingPhrase[1]}</figcaption>
            <CircularProgress />
          </>
          : bookAdded
            ? <div className={styles.happyBook} />
            : <div className={styles.sadBook} />
      }
    </div >
  )
}

export default LoadingPhrase