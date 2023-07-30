import { useState } from "react"

interface iBenefit {
    title: string,
    description: string,
    img: string,
}

export function BenefitsSelector({ benefits }: { benefits: iBenefit[] }) {
    const [selected, setSelected] = useState()

    return (
        <div>

        </div>
    )
}