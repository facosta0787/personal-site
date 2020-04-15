import React from 'react'

import { header } from '../styles/main'

function Header() {
  return (
    <>
      <header>
        <h1 className='title'>FA.</h1>
        <div className='contact-info'>
          <p>(+57 311 349 5655)</p>
          <p>facosta0787@gmail.com</p>
        </div>
      </header>
      <style jsx>{header}</style>
    </>
  )
}

export default Header