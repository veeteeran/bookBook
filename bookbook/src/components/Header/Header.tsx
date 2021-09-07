import Link from 'next/link'
import React from 'react'
const styles = require('./header.module.scss')

const Header = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.icon} />
        <div className={styles.title}>bookBook</div>
        <Link href="/yourBooks">
          <div className={styles.getList} />
        </Link>
      </div>
    </div>
  )
}

export default Header