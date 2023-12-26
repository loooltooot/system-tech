import styles from './hero.module.scss'

export default function Hero() {
    return (
        <div className={styles.div}>
            <ul className={styles.ul}>
                <li>
                    <span>B2B.</span>
                </li>
                <li>
                    <span>3D.</span>
                </li>
                <li>
                    <span>2023.</span>
                </li>
            </ul>
            <p className={styles.p}>
                Мы B2B компания, специализирующаяся на 3D печати декалей для моделирования
            </p>
        </div>
    )
}