import css from './style/statement-component.module.css'
import Image from 'next/image'
import amanda from './images/amanda.jpg'

export default function StatementComponent() {
  return (
    <div className={css.wrapper}>
      <h1 className={css.h1}>Artist Statement</h1>
      <div className={css.content}>
        <Image src={amanda} alt="Picture of me" width="236px" height="315px"/>
        <div className={css.body}>Artist Statement</div>
      </div>
    </div>
  )
}