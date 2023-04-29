import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    const { locale } = this.props.__NEXT_DATA__;

    return (
      <Html lang={locale} className='dark' dir={locale === "fa" ? "rtl" : "ltr"}>
        <Head />
        <body className={`dark:bg-dark-800 bg-light-100 primary-text`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;