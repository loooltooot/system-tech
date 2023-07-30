import { SectionHeader } from '../section-header/sectionHeader'
import { ProductCard, iProductCard } from './__product-card/productCard'
import styles from './productsSection.module.scss'

const productCards: iProductCard[] = [
    {
        title: '3D интерьер',
        description: 'Детальный интерьер, каждый прибор покрыт слоем прозрачного глянцевого полимера',
        img: '1.png',
        bg: 'linear-gradient(225deg, #FFA040 0%, #D48636 100%)',
    },
    {
        title: 'Объёмные декали',
        description: "Колоризированные 3D декали, выполненные из поли-винила в масштабах: 1/32, 1/35, 1/48, 1/72",
        img: '2.png',
        bg: 'linear-gradient(225deg, #37DE6A 0%, #30C35D 100%)',
    },
    {
        title: '3D заклёпки',
        description: 'Объёмные заклёпки от 1мм до 0.4мм партиями по 660 штук',
        img: '3.png',
        bg: 'linear-gradient(225deg, #EB3B8B 0%, #CE397D 100%)',
    },
]

export function ProductsSection() {
    return (
        <section id='products' className={styles.section}>
            <div className={styles.headerWrapper}>
                <SectionHeader title='делаем качественно' subtitle='quality' />
            </div>
            <ul className={styles.productsList}>
                {productCards.map((product, index) => (
                    <ProductCard key={index} title={product.title} description={product.description} img={product.img} bg={product.bg} />
                ))}
            </ul>
        </section>
    )
}