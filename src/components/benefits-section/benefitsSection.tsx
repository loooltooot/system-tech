import { SlideInTop } from '@/motion/slideInTop/slideInTop'
import { BenefitsSelector, iBenefit } from './__benefits-selector/benefitsSelector'
import styles from './benefitsSection.module.scss'

const benefits: iBenefit[] = [
    {
        title: 'простота использования',
        description: '3D – декали проще в работе, чем интерьеры, выполненные по традиционным технологиям. Вам нет необходимости заниматься тщательной подгонкой и окраской',
        img: '1.png',
    },
    {
        title: 'рельеф и фактура',
        description: 'На 3D-декалях мы сделали рельефными такие детали, как утопленные циферблаты приборов и их выступающие рамки, блоки и тумблеры, кнопки и сигнальные лампы, рычаги и рукоятки, клепки и головки винтов.',
        img: '2.png',
    },
    {
        title: 'долговечность',
        description: 'Материал изделия – полимеризованный винил. Поэтому 3D-декали имеют достаточный запас прочности и эластичности, так что при умеренной аккуратности в работе можно не бояться повредить их.',
        img: '3.png',
    },
]

export function BenefitsSection() {
    return (
        <section className={styles.benefits} id='benefits'>
            <SlideInTop>
                <header className={styles.heroHeader}>
                    <h2 style={{ opacity: "0", position: "absolute", zIndex: "-1" }}>3 причины выбрать нас</h2>
                    <span className={styles.bigNum}>{benefits.length}</span>
                    <span>причины <br />выбрать нас</span>
                </header>
            </SlideInTop>
            <BenefitsSelector benefits={benefits} />
        </section>
    )
}