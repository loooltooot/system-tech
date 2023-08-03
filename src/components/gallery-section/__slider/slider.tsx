'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/navigation'
import Image from 'next/image'
import styles from './slider.module.scss'

export function Slider({ images }: { images: string[] }) {
    return (
        <Swiper
            modules={[Navigation]}
            slidesPerView={2}
            className={styles.slider}
            loop={true}
            initialSlide={2}
            navigation
        >
            {images.map((img, index) => (
                <SwiperSlide
                    key={index}
                    className={styles.slide}
                >
                    <div className="img-wrapper">
                        <Image
                            alt='Quinta Studio'
                            width={689}
                            height={459}
                            src={img}
                            loading='lazy'
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}