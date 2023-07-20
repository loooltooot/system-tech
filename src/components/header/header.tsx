import Image from 'next/image'
import Nav from '@/components/nav/nav'
import styles from './header.module.scss'

export default function Header() {
    return (
        <header className={styles.header}>
            <Image alt='Системотехника' src="/img/logo.svg" width={388} height={26.4} />
            <Nav className={styles._nav} />
        </header>
    )
}