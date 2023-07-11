export interface PaginatorInfo {
    data: any[]
    links: PaginatorLink[]
    meta: PaginatorMeta
}

export interface PaginatorMeta {
    current_page: number
    from: number
    last_page: number
    links: PaginatorLink[]
    path: string
    per_page: number
    to: number
    total: number
}

export interface PaginatorLink {
    active: boolean
    label: string
    url: string
}
