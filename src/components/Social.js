import React from 'react'
import { IconContext } from 'react-icons'
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa'

import { socialList, socialListItem, socialGlobal } from '../styles/main'

function Social() {
  const social = [
    {
      id: 'linkedin',
      url: 'https://www.linkedin.com/in/facosta0787/',
      Icon: FaLinkedinIn,
    },
    {
      id: 'twitter',
      url: 'https://twitter.com/facosta0787',
      Icon: FaTwitter,
    },
    {
      id: 'github',
      url: 'https://github.com/facosta0787',
      Icon: FaGithub,
    },
  ]
  return (
    <IconContext.Provider value={{ className: 'social-icons' }}>
      <ul>
        {social.map((item) => (
          <SocialItem key={item.id} {...item} />
        ))}
      </ul>
      <style jsx>{socialList}</style>
      <style jsx global>
        {socialGlobal}
      </style>
    </IconContext.Provider>
  )
}

export default Social

function SocialItem({ url, Icon }) {
  return (
    <>
      <li>
        <a href={url} target="_blank">
          <Icon />
        </a>
      </li>
      <style jsx>{socialListItem}</style>
    </>
  )
}
