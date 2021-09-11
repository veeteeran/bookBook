import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@material-ui/core'
import { getLoadingPhrase } from '../../../util/getPhrase'

const styles = require('./loadingPhrase.module.scss')

const LoadingPhrase = () => {
  const [loadingPhrase, setLoadingPhrase] = useState([])

  useEffect(() => {
    setLoadingPhrase(getLoadingPhrase())
  }, [])

  return (
    <div className={styles.section}>
      <div className={styles.curiousBook} />
      <blockquote className={styles.loadingQuote}>
        <p>{loadingPhrase[0]}</p>
      </blockquote>
      <p className={styles.caption}> -{loadingPhrase[1]}</p>
      <CircularProgress />
    </div>
  )
}

export default LoadingPhrase