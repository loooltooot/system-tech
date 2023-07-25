'use client'

import Image from "next/image";
import Hero from "./__hero/hero";
import styles from './welcomeSection.module.scss';
import { motion } from 'framer-motion'

export default function WelcomeSection() {
    return (
        <section className={styles.welcome}>
            <Hero />
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .6 }}
            >
                <Image src="/img/quinta.png" alt="Quinta Studio" width={274} height={88} />
            </motion.div>
        </section>
    )
}