import css from './header.module.css'

export default function Header() {
  return (
    <div className={css.header}>
      <a href="#home" className={css.logo}>Amanda McDonald</a>
      <div className={css.headerRight}>
        <a className={css.active} href="#art">Art</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  )
}
