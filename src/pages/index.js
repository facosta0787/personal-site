import React from 'react'
import Granim from '../../packages/react-granim'
import Header from '../components/Header'
import Avatar from '../components/Avatar'
import Social from '../components/Social'

import { csslocals, cssglobals, gradient } from './styles'

const { primary, secondary } = gradient

function Home() {
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
        <Header />
        <main>
          <div className='avatar-container'>
            <Avatar />
          </div>
          <h2>FELIPE ACOSTA</h2>
          <h4>Front-End Developer</h4>
          <div className='social-container'>
            <Social />
          </div>
        </main>
      </div>

      <style jsx>{csslocals}</style>
      <style jsx global>{cssglobals}</style>
    </>
  )
}

export default Home
