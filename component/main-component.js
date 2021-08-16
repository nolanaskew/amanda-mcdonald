import Image from 'next/image'
import css from './style/main-component.module.css'
import clock from './images/clock.jpg'
import peopleDrawing from './images/people_drawing.jpg'
import beehive from './images/beehive.jpg'
import amanda from './images/amanda.jpg'

export default function MainComponent() {
    return (
      <div className={css.wrapper}>
        <h1 className={css.h1}>Explore</h1>
        <div className={css.flexImages}>
            <div className={css.image}>
                <Image src={peopleDrawing} alt="Drawing of people" width="236px" height="315px"/>
            </div>
            <div className={css.mobileLinks}>
                <a className={css.mobileLinkText} href="/drawing">Drawing</a>
            </div>
            <div className={css.image}>
                <Image src={clock} alt="Clock sculpture" width="236px" height="315px"/>
            </div>
            <div className={css.mobileLinks}>
                <a className={css.mobileLinkText} href="/sculpture">Sculpture</a>
            </div>
            <Image src={beehive} alt="Beehive painting" width="236px" height="315px"/>
            <div className={css.mobileLinks2}>
                <a className={css.mobileLinkText} href="/painting">Painting</a>
            </div>
        </div>

        <div className={css.flexText}>
            <div className={css.links}>
                <a className={css.linkText} href="/drawing">Drawing</a>
            </div>
            <div className={css.links}>
                <a className={css.linkText} href="/sculpture">Sculpture</a>
            </div>
            <div className={css.links2}>
                <a className={css.linkText} href="/painting">Painting</a>
            </div>
        </div>

        <h1 className={css.h1}>About Me</h1>
        <Image src={amanda} alt="Picture of me" width="236px" height="315px"/>
        <div className={css.aboutMeText}>Hi! I'm Amanda McDonald. I'm an undergraduate student at UTK majoring in Studio Art with a minor in Art Education. Click below to learn more about me </div>
        <a href="/about" className={css.button}>Learn More</a>
        <br></br>
        <br></br>
        <a href="/contact" className={css.button2}>Contact</a>
      </div>
    )
  }