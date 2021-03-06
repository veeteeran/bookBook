
import BookCarousel from '../BookCarousel/BookCarousel'
import BookIcons from '../BookIcons/BookIcons'
import LoadingPhrase from '../LoadingPhrase/LoadingPhrase'
import { Box, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Rating from '@material-ui/lab/Rating'
import React, { useEffect, useState } from 'react'
const styles = require('./welcome.module.scss')

const labels = {
  0.5: "Glad that's over",
  1: "Glad that's over",
  1.5: 'Not terrible',
  2: 'Not terrible',
  2.5: 'Pretty good',
  3: 'Pretty good',
  3.5: 'Told all my friends',
  4: 'Told all my friends',
  4.5: 'Own a copy',
  5: 'Own a copy',
}
const useStyles = makeStyles({
  button: {
    textTransform: "none"
  },
  disabled: {
    textTransform: "none",
    opacity: 0.5
  }
})

const Welcome = () => {
  const [title, setTitle] = useState('')
  const [data, setData] = useState({})
  const [userId, setUserId] = useState('')
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(-1)
  // This is commented out for demo purposes
  // const [url, setUrl] = useState(`/api/getISBN/?title=${title}&rating=${rating}`)
  const [url, setUrl] = useState(`/api/demoData/?title=${title}&rating=${rating}`)
  const [isLoading, setIsLoading] = useState(false)
  const [booksAdded, setBooksAdded] = useState(0)
  const [showCarousel, setShowCarousel] = useState(false)
  const [bookData, setBookData] = useState([])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const handleSetUrl = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setUrl(userId === ''
      // commented out for demo
      // ? `/api/getISBN/?title=${title}&rating=${rating}`
      // : `/api/getISBN/?title=${title}&rating=${rating}&userId=${userId}`)
      ? `/api/demoISBN/?title=${title}&rating=${rating}`
      : `/api/demoISBN/?title=${title}&rating=${rating}&userId=${userId}`)
  }

  const fetchBookData = async () => {
    // const bookData = await fetch(`/api/getBookData`)
    const bookData = await fetch(`/api/demoBookData`)
      .then(response => response.json())
      .catch(err => console.log(err))

    setBookData(bookData)
    setShowCarousel(true)
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
          setBooksAdded(booksAdded + 1)
        })
        .catch(err => console.log(err))
    }
    fetchData()
    const timer = setTimeout(() => {
      setIsLoading(false)
      setRating(0)
      setTitle('')
    }, 6000)

    return () => clearTimeout(timer)
  }, [url]);

  const classes = useStyles()
  return (
    <div className={styles.section}>
      {isLoading
        ? <LoadingPhrase data={data} rating={Math.round(rating / 2)} />
        : !showCarousel
          ? <>
            {/* <h1 className={styles.title}>Feed me your favorites</h1> */}
            <form onSubmit={handleSetUrl}>
              <input
                onChange={handleChange}
                placeholder='Sea Programming'
                type='text'
                value={title}
              />
              <Box className={styles.starContainer} component="fieldset" mb={3} borderColor="transparent">
                <Rating
                  size="large"
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
                {rating !== null &&
                  <Box style={{ textAlign: 'center' }}>
                    {labels[hover !== -1 ? hover : rating]}
                  </Box>
                }
              </Box>
              <div className={styles.buttonContainer}>
                <Button
                  type='submit'
                  disabled={title !== '' && rating > 0 ? false : true}
                  className={title !== '' && rating > 0 ? classes.button : classes.disabled}
                >
                  Add Book
                </Button>
                {booksAdded >= 3 &&
                  <Button
                    type='button'
                    className={classes.button}
                    onClick={fetchBookData}
                  >
                    Get List
                  </Button>
                }
              </div>
            </form>
            <BookIcons booksAdded={booksAdded} />
          </>
          : < BookCarousel bookData={bookData} />
      }
    </div>
  )
}

export default Welcome