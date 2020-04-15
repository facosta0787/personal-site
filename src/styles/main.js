import css from 'styled-jsx/css'

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

export const social = css`
  ul {
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    list-style: none;
  }

  ul a {
    text-decoration: none;
    color: white;
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;
  }

  ul a:hover {
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
