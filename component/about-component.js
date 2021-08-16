import css from './style/about-component.module.css'
import Image from 'next/image'
import amanda from './images/amanda.jpg'

export default function AboutComponent() {
  return (
    <div className={css.wrapper}>
      <h1 className={css.h1}>About Me</h1>
      <div className={css.content}>
        <Image src={amanda} alt="Picture of me" width="236px" height="315px"/>
        <div className={css.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nisl nisi. Nunc rutrum condimentum tincidun</div>
      </div>
    </div>
  )
}