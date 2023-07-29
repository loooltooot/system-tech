import { Card } from "@/components/card/card";
import Image from "next/image";
import styles from './productCard.module.scss'

export interface iProductCard {
    title: string,
    description: string,
    img: string,
    bg: string,
}

export function ProductCard({ title, description, img, bg }: iProductCard) {
    return (
        <Card style={{ 'background': bg }} className={styles.card}>
            <h3 className={styles.title}>{title}</h3>
            <p>{description}</p>
            <div className={`img-wrapper ${styles.img}`}>
                <Image src={`/img/${img}`} alt={title} width={426} height={410} />
            </div>
        </Card>
    )
}