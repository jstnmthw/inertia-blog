import { Head, usePage } from '@inertiajs/react'
import Navigation from '@/Components/Navigation'
import PostList from '@/Components/Posts/PostList'
import { Posts } from '@/types/posts'
import { PageProps } from '@/types'
import Footer from '@/Components/Footer'

interface HomepageProps extends PageProps {
    posts: Posts
}

export default function Welcome() {
    const { posts } = usePage<HomepageProps>().props
    const firstPage = posts?.meta?.current_page === 1
    return (
        <>
            <Head title="Web dev blog | justin.ly" />
            <div className="max-w-5xl mx-auto">
                <Navigation />
                <div className="mx-auto max-w-5xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl">
                        {firstPage && (
                            <>
                                <h2 className="text-3xl pt-24 sm:pt-32 font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    Scribbles from a web developer.
                                </h2>
                                <p className="mt-2 text-lg leading-8 text-gray-600">
                                    Helping build a modern web since 2012.
                                </p>
                            </>
                        )}
                        <PostList posts={posts} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
