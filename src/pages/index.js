import React from 'react'
import Granim from '../../packages/react-granim'
import Avatar from '../components/Avatar'
import Header from '../components/Header'

function Home() {
  const granimProps = {
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    states: {
      'default-state': {
        gradients: [
          ['rgba(50, 50, 50, .9)', 'rgba(33, 33, 33, .9)'],
          ['rgba(33, 33, 33, .9)', 'rgba(50, 50, 50, .9)'],
        ],
      },
    },
    // image: {
    //   source: 'img/patt.png',
    //   position: ['left', 'top'],
    //   stretchMode: ['stretch', 'stretch'],
    //   blendingMode: 'lighten',
    // },
    className: 'canva-background',
  }

  return (
    <>
      <Granim id='background' {...granimProps} />
      <div className='content'>
        <Header />
        <main>
          <div className='avatar-container'>
            <Avatar />
          </div>
          <h2>FELIPE ACOSTA</h2>
          <h4>Front-End Developer</h4>
        </main>
      </div>

      <style jsx>{`
        .content {
          position:relative;
        }

        main {
          display: flex;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          letter-spacing: 0.5px;
          z-index: 1;
        }

        .avatar-container {
          margin-top: 30%;
          display: flex;
          justify-content: center;
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
          background-color: #323232;
        }

        #__next {
          height: 100%;
        }

        .canva-background {
          background-attachment: scroll;
          background-clip: border-box;
          background-color: #333333;
          background-image: url("img/patt.png");
          background-origin: padding-box;
          background-position: 50% 50% !important;
          background-repeat: repeat;
        }
      `}</style>
    </>
  )
}

export default Home
