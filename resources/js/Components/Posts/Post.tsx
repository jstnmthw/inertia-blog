import { Link } from '@inertiajs/react'
import { format } from 'date-fns'
import Reactions from '@/Components/Reactions/Reactions'
import { Post as PostProps } from '@/types/posts'

export const Post = ({ post }: { post: PostProps }) => {
    return (
        <article
            key={post.id}
            className="flex max-w-xl flex-col items-start justify-between"
        >
            <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.created_at} className="text-gray-500">
                    {format(new Date(post.created_at), 'MMMM do, yyyy')}
                </time>
                {post.categories &&
                    post.categories.map((category) => (
                        <Link
                            key={category.id}
                            href={'category/' + category.slug}
                            className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                        >
                            {category.title}
                        </Link>
                    ))}
            </div>
            <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={'blog/' + post.slug}>
                        <span className="absolute inset-0" />
                        {post.title}
                    </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                </p>
            </div>
            <div className="item-center group mt-4 flex w-full gap-x-1 text-xs text-gray-500">
                <Reactions reaction_agg={post.reaction_agg} />
                <span className="mx-1 text-[9px]">•</span>
                <Link
                    href={'blog/' + post.slug + '#comments'}
                    className="flex items-center gap-x-1 font-medium hover:underline"
                >
                    {post.comment_count} Comments
                </Link>
            </div>
        </article>
    )
}
