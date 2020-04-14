import React from 'react'

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
      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          padding-top: 40px;
        }

        header > .title {
          margin: 0;
          padding: 0;
          font-size: 30px;
          margin-left: 40px;
          text-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
          font-weight: 900;
        }

        header > .contact-info {
          margin-right: 20px;
          font-size: 14px;
          font-family: 'Lora';
          font-style: italic;
          color: #fafafa;
          display: flex;
          flex-direction: column;
          transition: all .5s ease-in-out;
        }

        header > .contact-info > p:first-child {
          opacity: 0.5;
          margin: 0 25px 3px 0;
        }

        @media screen and (min-width: 768px) {
          header > .contact-info {
            flex-direction: row;
          }
        }
      `}</style>
    </>
  )
}

export default Header