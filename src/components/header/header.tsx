'use client'

import Image from 'next/image'
import Nav from '@/components/nav/nav'
import styles from './header.module.scss'
import { useEffect } from 'react';

export default function Header() {
    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                // @ts-ignore
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }, [])

    return (
        <header className={styles.header}>
            <Image alt='Системотехника' src="/img/logo.svg" width={388} height={26.4} />
            <Nav className={styles._nav} />
        </header>
    )
}