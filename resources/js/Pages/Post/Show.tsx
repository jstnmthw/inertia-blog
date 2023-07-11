import { Head, usePage } from '@inertiajs/react'
import Navigation from '@/Components/Navigation'
import { PageProps } from '@/types'
import Footer from '@/Components/Footer'

interface HomepageProps extends PageProps {
    post: any
}

export default function Show() {
    const { post } = usePage<HomepageProps>().props
    return (
        <>
            <Head title="Web dev blog | justin.ly" />
            <div className="max-w-5xl mx-auto">
                <Navigation />
                <div className="mx-auto max-w-5xl px-6 lg:px-8">
                    <pre className="mx-auto max-w-2xl h-[300px] overflow-scroll">
                        {JSON.stringify(post, null, 2)}
                    </pre>
                </div>
            </div>
            <Footer />
        </>
    )
}
