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

        <a className={css.mobileLinks} href="/2D">2D</a>
        <a className={css.mobileLinks} href="/3D">3D</a>
        <a className={css.mobileLinks} href="/4D">4D</a>

        <div className={css.flexText}>
            <a className={css.links} href="/2D">2D</a>
            <a className={css.links} href="/3D">3D</a>
            <a className={css.links} href="/4D">4D</a>
        </div>
      </div>
    )
  }