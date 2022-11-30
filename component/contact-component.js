import css from "./style/contact-component.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { blackTie } from "fontawesome"

export default function ContactComponent() {
  return (
    <div className={css.wrapper}>
      <h1 className={css.h1}>Contact</h1>
      <h2 className={css.headers}>Contact</h2>
      <div className={css.text}>amcdon23@vols.utk.edu</div>
      <i class="fa-3x">
        <a href="https://tiktok.com/@amandabelleart" target="_blank" style={{color: "black"}}><FontAwesomeIcon icon={faTiktok} /></a>
        <a href="https://instagram.com/abelleart" target="_blank" style={{color: "black"}}><FontAwesomeIcon icon={faInstagram} /></a>
      </i>
      <h2 className={css.headers}>Education</h2>
      <div className={css.text}>Central High School Salutatorian 2016-2020<br/>University of Tennessee, Knoxville 2020-Present</div>
      <h2 className={css.h2}>Experience</h2>
      <div className={css.text}>Liza Moz Pottery - May 2021-Present</div>
      <h2 className={css.h2}>Awards</h2>
      <div className={css.text}>Girl Scout Gold Award</div>
      
    </div>
  )
}