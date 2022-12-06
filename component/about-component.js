import css from './style/about-component.module.css'
import Image from 'next/image'
import amanda from './images/amanda.jpg'

export default function AboutComponent() {
  return (
    <div className={css.wrapper}>
      <h1 className={css.h1}>About Me</h1>
      <div className={css.content}>
        <Image src={amanda} alt="Picture of me" width="336px" height="315px"/>
        <div className={css.body}>Amanda McDonald grew up in Knoxville, Tennessee and is currently pursuing her BFA with a concentration in sculpture and a minor in art education at the University of Tennessee. Amanda began making art from a young age and continued to explore these interests throughout her K-12 schooling and to the present day. Her art generally focuses on playful and inviting forms that often evoke a sense of childhood through the use of soft sculpture, ceramics, and more. After college, Amanda aspires to continue to make and to show her own art, in addition to teaching art at the elementary school level. She is eager to work with children to facilitate art-making processes and to bring her love of art and creativity into the classroom environment. </div>
      </div>
    </div>
  )
}