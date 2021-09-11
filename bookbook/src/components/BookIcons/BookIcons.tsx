import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ImportContacts as ImportContactsIcon } from '@material-ui/icons'

const styles = require('./bookIcons.module.scss')

const BookIcons = ({ booksAdded }) => {
  return (
    <div className={styles.section}>
      <ImportContactsIcon
        style={
          booksAdded > 0
            ? {
              color: '#4170b4',
              fontSize: '3.5vw'
            }
            : {
              color: 'gray',
              fontSize: '3.5vw'
            }
        }
      />
      <ImportContactsIcon
        style={
          booksAdded > 1
            ? {
              color: '#4170b4',
              fontSize: '3.5vw'
            }
            : {
              color: 'gray',
              fontSize: '3.5vw'
            }
        }
      />
      <ImportContactsIcon
        style={
          booksAdded > 2
            ? {
              color: '#4170b4',
              fontSize: '3.5vw'
            }
            : {
              color: 'gray',
              fontSize: '3.5vw'
            }
        }
      />
    </div>
  )
}

export default BookIcons
