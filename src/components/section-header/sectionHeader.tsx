import { SlideInLeft } from '@/motion/slideInLeft/slideInLeft'
import styles from './sectionHeader.module.scss'

interface iSectionHeader {
    title: string,
    subtitle: string,
}

export function SectionHeader({ title, subtitle }: iSectionHeader) {
    return (
        <header className={styles.header}>
            <SlideInLeft>
                <span>{subtitle}</span>
            </SlideInLeft>
            <h2>{title}</h2>
        </header>
    )
}