import Header from '../component/header'
import Footer from '../component/footer'
import AboutComponent from "../component/about-component"

export default function About() {

  return (
    <div>
      <title>Amanda McDonald</title>
      <body style={{margin: 0, padding: 0, width: "100%", height: "100%", fontFamily: "Josefin Sans"}}>
    <div>
      <Header />
      <AboutComponent />
    </div>
    </body>
    </div>
  )
}