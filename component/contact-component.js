import css from "./style/contact-component.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"

export default function ContactComponent() {
  return (
    <div className={css.wrapper}>
      <h1 className={css.h1}>Contact</h1>
      <div className={css.text}>
      <a className={css.links} href="mailto: amcdon23@vols.utk.edu" style={{color: "black"}}><FontAwesomeIcon icon={faEnvelope} style={{marginRight: "10px"}}/>amcdon23@vols.utk.edu</a>
      </div>

      <div className={css.text}>
      <a className={css.links} href="tel: +18652362836" style={{color: "black"}}><FontAwesomeIcon icon={faPhone} style={{marginRight: "10px"}}/>(865)236-2836</a> 
      </div>

      <div className={css.text}>
      <a className={css.links} href="https://instagram.com/abelleart" target="_blank" style={{color: "black"}}><FontAwesomeIcon icon={faInstagram} style={{marginRight: "10px"}}/>abelleart</a>
      </div>

      <div className={css.text}>
      <a className={css.links} href="https://tiktok.com/@amandabelleart" target="_blank" style={{color: "black"}}><FontAwesomeIcon icon={faTiktok} style={{marginRight: "10px"}}/>amandabelleart</a> 
      </div> 
      
      
    </div>
  )
}