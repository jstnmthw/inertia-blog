import { Posts } from '@/types/posts'
import Pagination from '@/Components/Posts/Pagination'
import { Post } from '@/Components/Posts/Post'

export default function PostList({ posts }: { posts: Posts }) {
    return (
        <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
            {posts && posts?.data?.length >= 1 ? (
                <>
                    {posts.data.map((post) => (
                        <Post post={post} key={post.id} />
                    ))}
                    <Pagination paginatorMeta={posts.meta} />
                </>
            ) : (
                <div className="text-center text-gray-400">No posts found.</div>
            )}
        </div>
    )
}
