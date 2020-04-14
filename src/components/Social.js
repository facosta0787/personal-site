import React from 'react'
import { IconContext } from 'react-icons'
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Social () {
  return (
    <IconContext.Provider value={{ className: 'social-icons' }}>
    <ul>
      <li><FaTwitter /></li>
      <li><FaLinkedinIn /></li>
      <li><FaGithub /></li>
    </ul>
    <style jsx>{`
      ul {
        margin-top: 50px;
        width: 100%;
        display: flex;
        justify-content: center;
        list-style: none;
      }

      ul > li {
        opacity: .5;
        transition: opacity .3s ease-in-out;
      }

      ul li:hover {
        opacity: .7;
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
