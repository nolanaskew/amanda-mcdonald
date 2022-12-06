import css from './style/header.module.css'
import "@fontsource/sacramento";

export default function Header() {
  return (
    <div className={css.header}>
      <strong><a href="/" className={css.logo} style={{fontFamily: "Sacramento"}} >Amanda Belle</a></strong>
      <div className={css.headerRight}>
        <div className={css.dropdown}>
          <button className={css.dropbtn}>Art</button>
          <div className={css.dropdownContent}>
            <a href="/2D">2D</a>
            <a href="/3D">3D</a>
            <a href="/4D">4D</a>
          </div>
        </div>
        <div className={css.dropdown}>
          <button className={css.dropbtn}>About</button>
          <div className={css.dropdownContent}>
            <a href="/about" style={{textAlign: "left"}}>About Me</a>
            <a href="/statement" style={{textAlign: "left"}}>Artist Statement</a>
          </div>
        </div>
        <div className={css.dropdown}>
          <button className={css.dropbtn}>Contact</button>
          <div className={css.dropdownContent}>
            <a href="/contact">Contact</a>
            <a href="/resume">Resume</a>
          </div>
        </div>
      </div> 
    </div>
  )
  
}
