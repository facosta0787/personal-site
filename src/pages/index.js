import React from 'react'
import Granim from '../../packages/react-granim'
import Header from '../components/Header'
import Avatar from '../components/Avatar'
import Social from '../components/Social'

const gradient = {
  primary: 'rgba(0, 0, 0, .85)',
  secondary: 'rgba(51, 51, 51, .85)',
}

function Home() {
  const granimConfig = {
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    states: {
      'default-state': {
        gradients: [
          [gradient.primary, gradient.secondary],
          [gradient.secondary, gradient.primary],
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

      <style jsx>{`
        .content {
          position: relative;
          width: 100%;
          max-width: 1024px;
          margin: 0 auto;
        }

        main {
          display: flex;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          letter-spacing: 0.5px;
          z-index: 1;
          max-width: 1024px;
        }

        .avatar-container {
          margin-top: 30%;
          display: flex;
          justify-content: center;
          transition: all 1s ease-in-out;
        }

        main > h2 {
          margin-top: 35px;
          font-size: 28px;
          font-weight: 700;
        }

        main > h4 {
          font-family: 'Lora';
          font-style: italic;
          font-size: 14px;
          font-weight: 400;
        }

        @media screen and (min-width: 768px) {
          .avatar-container {
            margin-top: 100px;
          }
        }
      `}</style>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          height: 100vh;
          font-family: 'Montserrat', sans-serif;
          color: #fff;
          background-color: ${gradient.primary};
        }

        #__next {
          height: 100%;
        }

        .canva-background {
          background-attachment: scroll;
          background-clip: border-box;
          background-image: url('img/patt.png');
          background-origin: padding-box;
          background-position: 50% 50% !important;
          background-repeat: repeat;
        }
      `}</style>
    </>
  )
}

export default Home
