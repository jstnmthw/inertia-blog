import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, usePage } from '@inertiajs/react'
import { PageProps } from '@/types'
import { Logo } from '@/Components/UI/Logo'

interface Navigation {
    name: string
    href: string
}

const navigation: Navigation[] = [
    // { name: 'Product', href: '#' },
]

export default function Navigation() {
    const { auth } = usePage().props.auth as PageProps
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header>
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex items-center gap-x-12">
                    <Logo className={'h-10 w-10'} />
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-semibold leading-6 text-gray-900"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md border border-transparent p-1 text-gray-600 transition-colors hover:border-gray-300 hover:text-gray-900 hover:shadow"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-8 w-8" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex">
                    {auth?.user ? (
                        <Link href={route('dashboard')}>Dashboard</Link>
                    ) : (
                        <Link
                            href={route('login')}
                            className="text-sm font-semibold leading-6 text-gray-900"
                        >
                            Log in <span aria-hidden="true">&rarr;</span>
                        </Link>
                    )}
                </div>
            </nav>
            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Logo className="h-8 w-8" />
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md border border-transparent p-1 text-gray-600 transition-colors hover:border-gray-300 hover:text-gray-900 hover:shadow"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
