import styles from './benefitsSection.module.scss'

export function BenefitsSection() {
    return (
        <section className={styles.benefits}>
            <header>
                <h2 style={{ opacity: "0", position: "absolute", zIndex: "-1" }}>3 причины выбрать нас</h2>
                <div className={styles.heroHeader}>
                    <span className={styles.bigNum}>3</span>
                    <span>причины выбрать нас</span>
                </div>
            </header>
        </section>
    )
}