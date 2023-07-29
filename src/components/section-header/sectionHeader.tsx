import styles from './sectionHeader.module.scss'

interface iSectionHeader {
    title: string,
    subtitle: string,
}

export function SectionHeader({ title, subtitle }: iSectionHeader) {
    return (
        <header className={styles.header}>
            <span>{subtitle}</span>
            <h2>{title}</h2>
        </header>
    )
}