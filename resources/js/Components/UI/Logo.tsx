import { FC } from 'react'
import { Link } from '@inertiajs/react'

export const Logo: FC<{ className?: string }> = ({ className }) => {
    return (
        <Link href="/">
            <span className="sr-only">Justin.ly</span>
            <svg
                className={className ? className : 'h-10 w-10'}
                viewBox="0 0 100 100"
            >
                <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="black" />
            </svg>
        </Link>
    )
}
