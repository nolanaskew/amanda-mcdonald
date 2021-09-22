import css from './style/header.module.css'

export default function Header() {
  return (
    <div className={css.header}>
      <a href="/" className={css.logo}>Amanda Belle</a>
      <div className={css.headerRight}>
        <div className={css.dropdown}>
          <button className={css.dropbtn}>Art</button>
          <div className={css.dropdownContent}>
            <a href="/drawing">Drawing</a>
            <a href="/sculpture">Sculpture</a>
            <a href="/painting">Painting</a>
          </div>
        </div>
        <div className={css.otherLinks}>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div> 
    </div>
  )
  
}
