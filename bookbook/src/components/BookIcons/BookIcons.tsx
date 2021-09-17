import { ImportContacts as ImportContactsIcon } from '@material-ui/icons'
import React from 'react'
const styles = require('./bookIcons.module.scss')

const BookIcons = ({ booksAdded }) => {
  return (
    <div className={styles.section}>
      <ImportContactsIcon
        className={styles.icon}
        style={
          booksAdded > 0
            ? { color: '#4170b4' }
            : { color: '#a1a0a0' }
        }
      />
      <ImportContactsIcon
        className={styles.icon}
        style={
          booksAdded > 1
            ? { color: '#4170b4' }
            : { color: '#a1a0a0' }
        }
      />
      <ImportContactsIcon
        className={styles.icon}
        style={
          booksAdded > 2
            ? { color: '#4170b4' }
            : { color: '#a1a0a0' }
        }
      />
    </div>
  )
}

export default BookIcons
