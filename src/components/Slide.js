import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from "../css/slide.module.css";
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.jpg';


function Slide() {
    return (
        <div className={styles.slide}>
            <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                    delay: 3000,
                }}
            >
                <SwiperSlide>
                    <div>
                        <img src={img1} alt='img1' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={img2} alt='img2' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={img3} alt='img3' />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slide;