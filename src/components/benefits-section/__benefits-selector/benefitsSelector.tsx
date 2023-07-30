'use client'

import { useState } from "react"
import Image from "next/image"
import styles from './benefitsSelector.module.scss'

export interface iBenefit {
    title: string,
    description: string,
    img: string,
}

export function BenefitsSelector({ benefits }: { benefits: iBenefit[] }) {
    const [selected, setSelected] = useState(0)

    return (
        <div className={styles.selector}>
            <ul>
                {benefits.map((benefit, index) => (
                    <li key={index} onClick={() => { setSelected(index) }}>
                        <h3
                            className={selected === index ? styles.active : undefined}
                        >
                            <BubbleDecal className={selected === index ? styles.visible : undefined} />
                            {benefit.title}
                        </h3>
                        <p>{benefit.description}</p>
                    </li>
                ))}
            </ul>
            <div className="img-wrapper">
                <Image
                    src={`/img/benefits/${benefits[selected].img}`}
                    alt={benefits[selected].title}
                    width={658}
                    height={545}
                    loading="lazy"
                />
            </div>
        </div>
    )
}

function BubbleDecal({ className }: { className?: string }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
            <g filter="url(#filter0_f_207_31)">
                <circle cx="17.5" cy="17.5" r="9.5" fill="#37DE6A" />
            </g>
            <defs>
                <filter id="filter0_f_207_31" x="0" y="0" width="35" height="35" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_207_31" />
                </filter>
            </defs>
        </svg>
    )
}