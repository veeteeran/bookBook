import React from 'react'
import { ImportContacts as ImportContactsIcon } from '@material-ui/icons'

const styles = require('./bookIcons.module.scss')

const BookIcons = ({ booksAdded }) => {
  return (
    <div className={styles.section}>
      <ImportContactsIcon
        className={styles.icon}
        style={
          booksAdded > 0
            ? { color: '#4170b4' }
            : { color: 'gray' }
        }
      />
      <ImportContactsIcon
        className={styles.icon}
        style={
          booksAdded > 1
            ? { color: '#4170b4' }
            : { color: 'gray' }
        }
      />
      <ImportContactsIcon
        className={styles.icon}
        style={
          booksAdded > 2
            ? { color: '#4170b4' }
            : { color: 'gray' }
        }
      />
    </div>
  )
}

export default BookIcons
