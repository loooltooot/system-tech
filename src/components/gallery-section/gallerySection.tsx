import { SectionHeader } from "../section-header/sectionHeader";
import { Slider } from "./__slider/slider";
import styles from './gallerySection.module.scss'

const images = [
    "/img/gallery/1.jpg",
    "/img/gallery/2.jpg",
    "/img/gallery/3.jpg",
    "/img/gallery/4.jpg",
    "/img/gallery/5.jpg",
    "/img/gallery/6.jpg",
]

export function GallerySection() {
    return (
        <section className={styles.gallery}>
            <SectionHeader title="лучшая детализация" subtitle="gallery" />
            <Slider images={images} />
        </section>
    )
}