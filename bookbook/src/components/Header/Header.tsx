import React from 'react'
const styles = require('./header.module.scss')

const Header = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.logo}></div>
        <div className={styles.bB} />
      </div>
    </div>
  )
}

export default Header