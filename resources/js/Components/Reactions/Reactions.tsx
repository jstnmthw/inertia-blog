import { ReactionAggregateProps } from '@/types/posts'
import {
    AngryFaceIcon,
    AstonishedFaceIcon,
    CryingFaceIcon,
    DisappointedFaceIcon,
    RollingOnTheFloorLaughingIcon,
    ThumbsUpIcon,
    ThumbsDownIcon,
    SmilingFaceWithHeartsIcon,
} from '@jstnmthw/react-fluentui-emoji/icons'
import { useEffect, useState } from 'react'

export default function Reactions({
    reaction_agg,
}: {
    reaction_agg: ReactionAggregateProps[]
}) {
    // const [totalCount, setTotalCount] = useState<number>(0)
    // useEffect(() => {
    //     let count = 0
    //     reaction_agg.map((reaction) => {
    //         count += reaction.count
    //     })
    //     setTotalCount(count)
    // }, [reaction_agg])

    return (
        <>
            {reaction_agg && reaction_agg.length >= 1 && (
                <div className="flex justify-between items-center">
                    <div className="flex -space-x-0.5 overflow-hidden relative mr-1">
                        {reaction_agg.map((reaction, index) =>
                            matchReaction({
                                reaction: reaction.label,
                                key: index,
                            })
                        )}
                    </div>
                    <div className="ml-1 font-medium">
                        <button className="hover:underline">Like</button>
                    </div>
                </div>
            )}
        </>
    )
}

export function matchReaction({
    reaction,
    key = null,
}: {
    reaction: string
    key?: number | null
}) {
    const zIndex = key ?? 1
    const styles =
        'relative w-4 h-4 rounded-full border-1 border-white z-' +
        (50 - zIndex * 10)
    switch (reaction.toLowerCase()) {
        case 'like':
            return <ThumbsUpIcon className={styles} key={key} />
        case 'dislike':
            return <ThumbsDownIcon className={styles} key={key} />
        case 'love':
            return <SmilingFaceWithHeartsIcon className={styles} key={key} />
        case 'cry':
            return <CryingFaceIcon className={styles} key={key} />
        case 'laughingcry':
            return (
                <RollingOnTheFloorLaughingIcon className={styles} key={key} />
            )
        case 'angry':
            return <AngryFaceIcon className={styles} key={key} />
        case 'wow':
            return <AstonishedFaceIcon className={styles} key={key} />
        case 'sad':
            return <DisappointedFaceIcon className={styles} key={key} />
    }
}
