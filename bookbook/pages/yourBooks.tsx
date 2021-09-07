import React from 'react'
import Link from 'next/link'

export default function YourBooks() {
  return (
    <div>
      <h1>Your books</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  )
}