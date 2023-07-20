import Link from "next/link"

const navLinks = [
    { title: 'продукция', href: '#products' },
    { title: 'преимущества', href: '#benefits' },
    { title: 'что-то', href: '#empty' },
]

export default function Nav({ className }: { className?: string }) {
    return (
        <nav className={className}>
            <ul>
                {navLinks.map((link, id) => (
                    <li key={id}>
                        <Link href={link.href}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}