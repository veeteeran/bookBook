import React from 'react'
import { Button } from '@material-ui/core'
const styles = require('./header.module.scss')

const Header = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <Button className={styles.logo} href="/" />
        <div className={styles.bB} />
      </div>
    </div>
  )
}

export default Header