'use client'

import Image from "next/image";
import Hero from "./__hero/hero";
import styles from './welcomeSection.module.scss';
import { useEffect } from "react";
import { gsap } from "gsap";

export default function WelcomeSection() {
    useEffect(() => {
        gsap.from('.quinta-logo', { y: 50, opacity: 0, duration: 1 })
    }, [])

    return (
        <section className={styles.welcome}>
            <Hero />
            <Image className="quinta-logo" src="/img/quinta.png" alt="Quinta Studio" width={274} height={88} />
        </section>
    )
}