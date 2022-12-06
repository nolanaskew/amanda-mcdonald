import css from './style/statement-component.module.css'

export default function StatementComponent() {
  return (
    <div className={css.wrapper}>
      <h1 className={css.h1}>Artist Statement</h1>
      <div className={css.content}>
        <div className={css.body}>In my practice I employ soft sculpture, ceramics, and wood to explore childhood and childlike sentiments that generally focus on overly feminine elements that are personal to my own life, experiences, and interests. My current work focuses on creating playful and inviting forms that often evoke this sense of childhood and a sense of play for the viewer and for myself as the artist during the creation process. Through my work I want to invite touch in a way that attracts all audiences to feel invited to engage with the work and to consider their relationship to and the feelings that come from participating with my work. Through immersing myself and my viewers with childhood sentiments, I want to allow children and adults alike to suspend time and to place themselves in a more fantastical space that allows for and invites fun and a regression into youth. 
        <br/><br/>
        I seek to accomplish these overall feelings and sentiments through the use of primarily soft sculpture and ceramics. Through soft sculpture I am able to make playful, oversized forms out of felt, fleece, and polyfill stuffing that are fantastical and are seemingly objects that have been recalled through that of a child’s memories or fantasies. These objects are often soft, larger-than-life, and are imaginative. With ceramics I am able to create smaller, hand-held multiples that engage the viewer differently, by inviting a sense of arrangement and play as with a children’s toy set. Through both of these mediums I am able to employ childlike colors and forms in different manners that are both playful and intriguing to the viewer. Through this intrigue and immersion into a childlike disposition, I want to allow my viewers and myself to feel invited to engage in a more imaginative space and youthful reversion. 
        </div>
      </div>
    </div>
  )
}