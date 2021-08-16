import css from './style/footer.module.css'

export default function Footer() {
  return (
    <div className={css.wrapper}>
      Site created by <a className={css.a} href="mailto:nolanaskew@gmail.com">Nolan Askew</a> &copy;2021
    </div>
  )
}