import { PaginatorMeta } from '@/types/paginator-info'
import {
    ArrowLongLeftIcon,
    ArrowLongRightIcon,
} from '@heroicons/react/20/solid'
import { Link } from '@inertiajs/react'

export default function Pagination({
    paginatorMeta,
}: {
    paginatorMeta: PaginatorMeta
}) {
    // const { current_page, last_page } = paginatorMeta
    const links = paginatorMeta.links
    return (
        <nav className="flex items-center justify-between border-t border-gray-200 px-4 pb-10 sm:px-0">
            <div className="-mt-px flex w-0 flex-1">
                <Link
                    href={links[0].url}
                    className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-700 hover:text-gray-700"
                >
                    <ArrowLongLeftIcon
                        className="mr-3 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                    />
                    Previous
                </Link>
            </div>
            <div className="hidden md:-mt-px md:flex">
                {links.map((link, index) => {
                    if (index === 0 || index === links.length - 1) return
                    return (
                        <Link
                            key={index}
                            href={link.url}
                            className={
                                (link.active
                                    ? 'border-black text-black '
                                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700') +
                                'inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium text-gray-500'
                            }
                        >
                            {link.label}
                        </Link>
                    )
                })}
            </div>
            <div className="-mt-px flex w-0 flex-1 justify-end">
                <Link
                    href={links[links.length - 1].url}
                    className="group relative inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-700 hover:text-gray-700"
                >
                    Next
                    <ArrowLongRightIcon
                        className="ml-3 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                    />
                </Link>
            </div>
        </nav>
    )
}
