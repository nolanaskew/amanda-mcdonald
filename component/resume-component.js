import css from "./style/cv-component.module.css"
import Image from 'next/image'
import resume from './images/resume.jpg'

export default function ResumeComponent() {
  return (
    <div className={css.wrapper}>
      <h1 className={css.h1}>Resume</h1>
      <div className={css.content}>
      <Image src={resume} alt="Resume" width="566px" height="705px"/>
      </div>
      
    </div>
  )
}