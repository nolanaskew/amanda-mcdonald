import Header from '../component/header'
import Footer from '../component/footer'
import MainComponent from '../component/main-component'
import "@fontsource/josefin-sans";
import Head from 'next/head';

export default function Home() {

  return (
    <div>
      <Head>
      <title>Amanda McDonald</title>
      <link rel="icon" type="image/x-icon" href="favicon.ico"></link>
      </Head>
    <body style={{margin: 0, padding: 0, width: "100%", height: "100%", fontFamily: "Josefin Sans"}}>
      <Header />
      <MainComponent />
      {/*<Footer />*/}
    </body>
    </div>
  )
}
