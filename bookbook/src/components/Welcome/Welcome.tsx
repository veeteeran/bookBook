import { Box, Button, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Rating from '@material-ui/lab/Rating'
import React, { useEffect, useState } from 'react'
import BookCarousel from '../BookCarousel/BookCarousel'
const styles = require('./welcome.module.scss')

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
}
const useStyles = makeStyles({
  root: {
    marginBottom: 0,
    height: '25%'
  }
})

const Welcome = () => {
  const [title, setTitle] = useState('')
  const [data, setData] = useState({})
  const [userId, setUserId] = useState('')
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(-1)
  const [url, setUrl] = useState(`/api/getISBN/?title=${title}&rating=${rating}`)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const handleSetUrl = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setUrl(userId === ''
      ? `/api/getISBN/?title=${title}&rating=${rating}`
      : `/api/getISBN/?title=${title}&rating=${rating}&userId=${userId}`)
  }

  useEffect(() => {
    if (title === '') {
      return
    }
    const fetchData = async () => {
      setIsLoading(true)

      await fetch(url)
        .then(response => response.json())
        .then(data => {
          setData(data)
          setUserId(data['userId'])
        })
        .catch(err => console.log(err))
    }
    fetchData()

    const timer = setTimeout(() => {
      setIsLoading(false)
      setRating(0)
      setTitle('')
    }, 2000)

    return () => clearTimeout(timer)
  }, [url]);
  console.log('DATA AFTER FETCH:', data)
  const classes = useStyles()
  return (
    <div className={styles.section}>
      {isLoading
        ?
        <>
          <h1 className={styles.title}>Okay cutie!</h1>
          <CircularProgress />
        </>
        :
        <>
          < h1 className={styles.title}>Feed me your favorites</h1>
          <form onSubmit={handleSetUrl}>
            <input
              onChange={handleChange}
              placeholder='A Tale of Two Cities'
              type='text'
              value={title}
            />
            <Box className={classes.root} component="fieldset" mb={3} borderColor="transparent">
              <Rating
                name="simple-controlled"
                value={rating / 2}
                onChange={(event, newRating) => {
                  setRating(newRating * 2)
                }}
                precision={0.5}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
              />
              {rating !== null && <Box ml={2}>{labels[hover !== -1 ? hover : rating]}</Box>}
            </Box>
            <Button type='submit'>Submit</Button>
          </form>
        </>
      }
      <BookCarousel />
    </div>
  )
}

export default Welcome