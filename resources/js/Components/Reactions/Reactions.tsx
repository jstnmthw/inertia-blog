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
                <div className="flex justify-between">
                    <div className="relative mr-1 flex -space-x-0.5 overflow-hidden">
                        {reaction_agg.map((reaction, index) => (
                            <ReactionIcon type={reaction.label} key={index} />
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
    const style =
        'w-6 h-6 hover:w-10 hover:h-10 transition-all transform items-center'
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
                <Popover.Panel className="fixed bottom-full left-1/2 z-50 -translate-x-1/2 transform rounded-full border border-gray-100 bg-white p-2 shadow-lg">
                    <div className="flex h-full flex-col items-center justify-center">
                        <div className="relative flex items-center space-x-1 overflow-hidden">
                            {REACTION_LIST.map((reaction, index) => (
                                <button
                                    type="button"
                                    onClick={() => handleReaction(reaction)}
                                    key={index}
                                >
                                    <ReactionIcon
                                        type={reaction}
                                        className={style}
                                    />
                                </button>
                            ))}
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
}> = ({ type, className = 'w-4 h-4' }) => {
    const styles = classNames(
        className,
        'relative rounded-full border-1 border-white'
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
