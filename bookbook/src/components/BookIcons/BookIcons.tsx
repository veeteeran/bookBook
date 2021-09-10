import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ImportContacts as ImportContactsIcon } from '@material-ui/icons'

const styles = require('./bookIcons.module.scss')

const BookIcons = () => {
  const [success, setSuccess] = useState(0)

  return (
    <div className={styles.section}>
      <ImportContactsIcon
        style={
          success > 0
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
          success > 1
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
          success > 2
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
