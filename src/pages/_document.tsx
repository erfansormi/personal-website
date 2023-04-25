import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {  
  return (
    <Html lang="fa" className='dark' dir='rtl'>
      <Head />
      <body className={`dark:bg-dark-800 dark:text-light-100 bg-light-50 text-dark-800`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}