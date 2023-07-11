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
import { Popover, Transition } from '@headlessui/react'
import React, { FC } from 'react'
import classNames from '@/Helpers/classNames'

export default function Reactions({
    reaction_agg,
}: {
    reaction_agg: ReactionAggregateProps[]
}) {
    return (
        <>
            {reaction_agg && reaction_agg.length >= 1 && (
                <div className="flex items-center justify-between">
                    <div className="relative mr-1 flex -space-x-0.5 overflow-hidden">
                        {reaction_agg.map((reaction, index) => (
                            <ReactionIcon
                                type={reaction.label}
                                key={index}
                                zIndex={index + 1}
                            />
                        ))}
                    </div>
                    <div className="ml-1 font-medium">
                        <ReactionPopOver>
                            <span className="hover:underline">Like</span>
                        </ReactionPopOver>
                    </div>
                </div>
            )}
        </>
    )
}

export function ReactionPopOver({ children }: { children: React.ReactNode }) {
    const handleReaction = (type: string) => {
        console.log(type)
    }
    const style = 'w-6 h-6'
    return (
        <Popover className="relative">
            <Popover.Button>{children}</Popover.Button>
            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Popover.Panel className="fixed left-1/2 z-10 -translate-x-1/2 transform rounded-full bg-white p-2 shadow-lg">
                    <div className="flex h-full flex-col items-center justify-center">
                        <div className="relative flex space-x-1 overflow-hidden">
                            <button
                                type="button"
                                onClick={() => handleReaction('like')}
                            >
                                <ReactionIcon type="like" className={style} />
                            </button>
                            <button
                                type="button"
                                onClick={() => handleReaction('dislike')}
                            >
                                <ReactionIcon
                                    type="dislike"
                                    className={style}
                                />
                            </button>
                            <button
                                type="button"
                                onClick={() => handleReaction('love')}
                            >
                                <ReactionIcon type="love" className={style} />
                            </button>
                            <button
                                type="button"
                                onClick={() => handleReaction('laughingcry')}
                            >
                                <ReactionIcon type="cry" className={style} />
                            </button>
                            <button
                                type="button"
                                onClick={() => handleReaction('laughingcry')}
                            >
                                <ReactionIcon
                                    type="laughingcry"
                                    className={style}
                                />
                            </button>
                            <button
                                type="button"
                                onClick={() => handleReaction('angry')}
                            >
                                <ReactionIcon type="angry" className={style} />
                            </button>
                            <button
                                type="button"
                                onClick={() => handleReaction('wow')}
                            >
                                <ReactionIcon type="wow" className={style} />
                            </button>
                            <button
                                type="button"
                                onClick={() => handleReaction('sad')}
                            >
                                <ReactionIcon type="sad" className={style} />
                            </button>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}

export const ReactionIcon: FC<{
    type: string
    className?: string
    zIndex?: number
}> = ({ type, className = 'w-4 h-4', zIndex }) => {
    const z = zIndex ?? 1
    const styles = classNames(
        className,
        'relative rounded-full border-1 border-white z-' + (50 - z * 10)
    )
    switch (type.toLowerCase()) {
        case 'like':
            return <ThumbsUpIcon className={styles} />
        case 'dislike':
            return <ThumbsDownIcon className={styles} />
        case 'love':
            return <SmilingFaceWithHeartsIcon className={styles} />
        case 'cry':
            return <CryingFaceIcon className={styles} />
        case 'laughingcry':
            return <RollingOnTheFloorLaughingIcon className={styles} />
        case 'angry':
            return <AngryFaceIcon className={styles} />
        case 'wow':
            return <AstonishedFaceIcon className={styles} />
        case 'sad':
            return <DisappointedFaceIcon className={styles} />
    }
}

export const REACTION_LIST = [
    'like',
    'dislike',
    'love',
    'cry',
    'laughingcry',
    'angry',
    'wow',
    'sad',
]
