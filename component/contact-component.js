import css from "./style/contact-component.module.css"

export default function ContactComponent() {
  return (
    <div className={css.wrapper}>
      <h1 className={css.h1}>Contact/CV</h1>
      <h2 className={css.headers}>Contact</h2>
      <div className={css.text}>amcdon23@vols.utk.edu<br/>@abelleart</div>
      <h2 className={css.headers}>Education</h2>
      <div className={css.text}>Central High School Salutatorian 2016-2020<br/>University of Tennessee, Knoxville 2020-Present</div>
      <h2 className={css.h2}>Experience</h2>
      <div className={css.text}>Liza Moz Pottery - May 2021-Present</div>
      <h2 className={css.h2}>Awards</h2>
      <div className={css.text}>Girl Scout Gold Award</div>
      
    </div>
  )
}