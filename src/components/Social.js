import React from 'react'
import { IconContext } from 'react-icons'
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa'

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
      <style jsx>{`
        ul {
          margin-top: 50px;
          width: 100%;
          display: flex;
          justify-content: center;
          list-style: none;
        }

        ul a {
          text-decoration: none;
          color: white;
          opacity: 0.5;
          transition: opacity 0.3s ease-in-out;
        }

        ul a:hover {
          opacity: 0.7;
        }
      `}</style>

      <style jsx global>{`
        .social-icons {
          width: 20px;
          height: 20px;
          margin-right: 15px;
        }
      `}</style>
    </IconContext.Provider>
  )
}

export default Social
