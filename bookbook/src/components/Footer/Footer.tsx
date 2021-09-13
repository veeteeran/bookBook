import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import {
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon
} from '@material-ui/icons'
const styles = require('./footer.module.scss')

const useStyles = makeStyles({
  root: {
    minWidth: '3vw',
    width: '3vw',
    height: '3vw',
    borderRadius: '50%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
  }
})

const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.social}>
          <p className={styles.follow}>Follow #bookBook</p>
          <div className={styles.socialIcons}>
            <Button
              className={styles.button}
              href="https://www.linkedin.com/"
              target="_blank" rel="noopener noreferrer"
            >
              <LinkedInIcon style={{ color: '#7CAA2D' }} />
            </Button>
            <Button
              className={styles.button}
              href="https://twitter.com"
              target="_blank" rel="noopener noreferrer"
            >
              <TwitterIcon style={{ color: '#7CAA2D' }} />
            </Button>
            <Button
              className={styles.button}
              href="https://www.instagram.com/"
              target="_blank" rel="noopener noreferrer"
            >
              <InstagramIcon style={{ color: '#7CAA2D' }} />
            </Button>
          </div>
        </div>
        <div className={styles.bookaroos}>
          <p className={styles.title}>Bookaroos</p>
          <div className={styles.images}>
            <Button
              className={`${styles.staci} ${classes.root}`}
              href="https://www.linkedin.com/in/staci-af/"
              target="_blank" rel="noopener noreferrer"
            />
            <Button
              className={`${styles.kelsie} ${classes.root}`}
              href="https://www.linkedin.com/in/kelsie-merchant-physics/"
              target="_blank" rel="noopener noreferrer"
            />
            <Button
              className={`${styles.viet} ${classes.root}`}
              href="https://www.linkedin.com/in/viet-t/"
              target="_blank" rel="noopener noreferrer"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer