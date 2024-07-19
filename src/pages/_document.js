import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700,900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Lora:400,400i&display=swap" rel="stylesheet"></link>
          <link rel="stylesheet" type="text/css" href="css/normalize.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument