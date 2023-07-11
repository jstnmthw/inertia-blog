import { User } from '@/types/index'
import { PaginatorInfo } from '@/types/paginator-info'

export interface Post {
    id: number
    user_id: number
    title: string
    description: string
    slug: string
    content: string
    created_at: string
    updated_at: string

    // Relationships
    user: User
    comment_count: number
    reactions: [Reaction]
    categories: [Categories]
    reaction_agg: [ReactionAggregateProps]
}

export interface Posts extends PaginatorInfo {
    data: Post[]
}

export interface Categories {
    id: number
    slug: string
    title: string
    description: string
    created_at: string
    updated_at: string
}

export interface Reaction {
    id: number
    user_id: number
    post_id: number
    type: string
    created_at: string
    updated_at: string
}

export interface ReactionAggregateProps {
    label: string
    count: number
}
