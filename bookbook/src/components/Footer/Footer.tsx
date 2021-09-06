import {
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon
} from '@material-ui/icons'
import React from 'react'
const styles = require('./footer.module.scss')

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.social}>
          <p className={styles.follow}>Follow #bookBook</p>
          <div className={styles.socialIcons}>
            <LinkedInIcon
              style={{ color: '#7CAA2D' }}
            />
            <TwitterIcon style={{ color: '#7CAA2D' }}
            />
            <InstagramIcon style={{ color: '#7CAA2D' }}
            />
          </div>
        </div>
        <div className={styles.bookaroos}>
          <p className={styles.title}>Bookaroos</p>
          <div className={styles.images}>
            <div className={styles.staci} />
            <div className={styles.kelsie} />
            <div className={styles.viet} />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer