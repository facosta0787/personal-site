import React from 'react'

import { header } from '../styles/main'

function Header({ mobil, email }) {
  return (
    <>
      <header>
        <h1 className='title'>FA.</h1>
        <div className='contact-info'>
          <p>{mobil}</p>
          <p>{email}</p>
        </div>
      </header>
      <style jsx>{header}</style>
    </>
  )
}

export default Header