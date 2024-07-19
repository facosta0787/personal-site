import css from 'styled-jsx/css'

export const gradient = {
  primary: 'rgba(0, 0, 0, .85)',
  secondary: 'rgba(51, 51, 51, .85)',
}

export const home = css`
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

  footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    bottom: 0;
    align-items: center;
    margin-bottom: 20px;
  }

  footer > p {
    font-size: .7rem;
    opacity: .7;
  }

  @media screen and (min-width: 768px) {
    .avatar-container {
      margin-top: 100px;
    }
  }
`

export const homeGlobals = css.global`
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


export const header = css`
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
    transition: all 0.5s ease-in-out;
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
`

export const avatar = css`
  figure {
    margin: 0;
    padding: 0;
    display: contents;
  }

  img {
    width: 50%;
    max-width: 200px;
    border-radius: 50%;
    border: 6px solid white;
  }
`

export const socialList = css`
  ul {
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    list-style: none;
  }
`

export const socialListItem = css`
  a {
    text-decoration: none;
    color: white;
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;
  }

  a:hover {
    opacity: 0.7;
  }
`

export const socialGlobal = css.global`
  .social-icons {
    width: 20px;
    height: 20px;
    margin-right: 15px;
  }
`
