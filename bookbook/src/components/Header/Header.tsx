import React from 'react'
const styles = require('./header.module.scss')

const Header = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.icon} />
        <div className={styles.title}>bookBook</div>
        <div className={styles.getList} />
      </div>
    </div>
  )
}

export default Header