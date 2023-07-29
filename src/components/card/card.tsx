import { CSSProperties } from 'react'
import styles from './card.module.scss'

export function Card({ children, style, className }: { children: React.ReactNode, style?: CSSProperties, className?: string }) {
    let classes = [styles.card]

    // @ts-ignore
    Boolean(className) ? classes.push(className) : null

    return (
        <div className={classes.join(' ')} style={style}>
            {children}
        </div>
    )
}