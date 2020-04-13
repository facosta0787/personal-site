import React from 'react'
import Avatar from '../components/Avatar'
import Header from '../components/Header'

function Home() {
  return (
    <>
      <Header />
      <main>
        <div className='avatar-container'>
          <Avatar />
        </div>
        <h2>FELIPE ACOSTA</h2>
        <h4>Front-End Developer</h4>
      </main>

      <style jsx>{`
        main {
          display: flex;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          letter-spacing: 0.5px;
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
          background-image: linear-gradient(147deg, #323232 0%, #212121 74%);
          height: 100%;
        }
      `}</style>
    </>
  )
}

export default Home
