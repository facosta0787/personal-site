import React from 'react'
import { IconContext } from 'react-icons'
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa'

import { social, socialGlobal } from '../styles/main'

function Social() {
  return (
    <IconContext.Provider value={{ className: 'social-icons' }}>
      <ul>
        <li>
          <a href='https://www.linkedin.com/in/facosta0787/' target='_blank'>
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a href='https://twitter.com/facosta0787' target='_blank'>
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href='https://github.com/facosta0787' target='_blank'>
            <FaGithub />
          </a>
        </li>
      </ul>
      <style jsx>{social}</style>
      <style jsx global>{socialGlobal}</style>
    </IconContext.Provider>
  )
}

export default Social
