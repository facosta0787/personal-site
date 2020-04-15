import css from 'styled-jsx/css'


export const gradient = {
  primary: 'rgba(0, 0, 0, .85)',
  secondary: 'rgba(51, 51, 51, .85)',
}

export const csslocals = css`
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
`

export const cssglobals = css.global`
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
`
