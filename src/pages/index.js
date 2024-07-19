import React from 'react'
import Granim from '../../packages/react-granim'
import Header from '../components/Header'
import Avatar from '../components/Avatar'
import Social from '../components/Social'

import { home, homeGlobals, gradient } from '../styles/main'
import personalInfo from '../../config/personal-info'

const { primary, secondary } = gradient

function Home() {
  const { title, name, job, email, mobil, city, year } = personalInfo
  const granimConfig = {
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    states: {
      'default-state': {
        gradients: [
          [primary, secondary],
          [secondary, primary],
        ],
      },
    },
    className: 'canva-background',
  }

  return (
    <>
      <Granim id='background' {...granimConfig} />
      <div className='content'>
        <Header {...{mobil, email}}/>
        <main>
          <div className='avatar-container'>
            <Avatar />
          </div>
          <h2>{name}</h2>
          <h4>{job}</h4>
          <div className='social-container'>
            <Social />
          </div>
        </main>
        <footer>
          <p>{city}</p>
          <p>{year}</p>
        </footer>
      </div>

      <style jsx>{home}</style>
      <style jsx global>{homeGlobals}</style>
    </>
  )
}

export default Home
