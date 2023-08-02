'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import styles from './slider.module.scss'

export function Slider({ images }: { images: string[] }) {
    return (
        <Swiper
            slidesPerView={2}
            className={styles.slider}
            loop={true}
            initialSlide={2}
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