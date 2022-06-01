import Header from '../component/header'
import Footer from '../component/footer'
import css from "./style/art.module.css"

export default function D4() {

  return (
    <div>
      <title>Amanda McDonald</title>
    <div>
      <Header />
    </div>
    <h1 className={css.h1}>4D</h1>
    <div className={css.content}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/g16mpON8dG4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div className={css.content}>
      <div><iframe width="560" height="315" src="https://www.youtube.com/embed/zOWfOHVQKLU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      <div><iframe width="560" height="315" src="https://www.youtube.com/embed/EMwg78Q9jR8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    </div>
    <div className={css.content}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/XMICaKLMEWc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <Footer />
    </div>
  )
}
