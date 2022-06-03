import Image from 'next/image'
import css from './style/main-component.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function MainComponent() {
    return (
      <div className={css.wrapper}>
          <div className={css.content}>
              <div className={css.carousel}>
				<Carousel
					autoPlay 
					infiniteLoop 
					interval={3000} 
					showThumbs={false} 
					showStatus={false}
					showArrows={false}
					dynamicHeight
					stopOnHover={false}
					width={'65%'}
					>
					<div>
						<img src="https://i.ibb.co/qDLK3GJ/IMG-4346-1.png"/>
					</div>
					<div>
						<img src="https://i.ibb.co/gzsH1q8/IMG-1266-2.jpg"/>
					</div>
					<div>
						<img src="https://i.ibb.co/Lvn54Cx/IMG-9374-1.jpg" />
					</div>
					<div>
						<img src="https://i.ibb.co/4fcJwK0/IMG-0406.jpg" />
					</div>
					<div>
						<img src="https://i.ibb.co/Q9kjW0s/IMG-4347-1.png" />
					</div>
					<div>
						<img src="https://i.ibb.co/ZYB6xR2/IMG-1096.jpg" />
					</div>
					<div>
						<img src="https://i.ibb.co/7p5XMpj/IMG-5203.jpg" />
					</div>
					<div>
						<img src="https://i.ibb.co/Nr3R7z8/66406803854-5488-DA80-BBEF-45-BE-9-FC0-98-DD2-E4-FE91-B.jpg" />
					</div>
					<div>
						<img src="https://i.ibb.co/6rZwG3D/IMG-7800.jpg" />
					</div>
					<div>
						<img src="https://i.ibb.co/6nHj35D/IMG-1103.jpg" />
					</div>
					<div>
						<img src="https://i.ibb.co/GVMjn4H/IMG-7435.jpg" />
					</div>
					<div>
						<img src="https://i.ibb.co/Ks2s5Xy/IMG-2919.jpg" />
					</div>
					<div>
						<img src="https://i.ibb.co/mHVTMph/20210903-173119.jpg" />
					</div>
					<div>
						<img src="https://i.ibb.co/vjSFPQP/IMG-2921.jpg" />
					</div>
					<div>
						<img src="https://i.ibb.co/P5JXfHj/beehive.jpg" />
					</div>
					<div>
						<img src="https://i.ibb.co/RjH5VW7/IMG-5381.jpg" />
					</div>
					<div>
						<img src="https://i.ibb.co/BN1qMrB/20210903-173108.jpg" />
					</div>
					<div>
						<img src="https://i.ibb.co/TPKmBfY/IMG-9564.jpg" />
					</div>
					<div>
						<img src="https://i.ibb.co/BBGRKPz/final-1.jpg" />
					</div>
					<div>
						<img src="https://i.ibb.co/x1swN7w/final-2.jpg" />
					</div>
					<div>
						<img src="https://i.ibb.co/JkCdhzV/IMG-8718.jpg" />
					</div>
				</Carousel>
			  </div>
			
			  <div className={css.buttons}>
              <a className={css.mobileLinks} href="/2D">2D</a>
              <a className={css.mobileLinks} href="/3D">3D</a>
              <a className={css.mobileLinks} href="/4D">4D</a>

              <div className={css.flexText}>
                  <a className={css.links} href="/2D">2D</a>
                  <a className={css.links} href="/3D">3D</a>
                  <a className={css.links} href="/4D">4D</a>
              </div>
			  </div>
          </div>
      </div>
    )
  }