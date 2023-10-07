import {
    PiChat,
    PiChatThin,
    PiDotOutline,
    PiDotsThreeOutlineVertical,
    PiHeartFill,
    PiHeartThin,
    PiShareNetworkLight
} from 'react-icons/pi'

export default function Tweet({ tweet }) {
    return (
        <div className='flex flex-col gap-8 py-8 border-b-[1px] border-[#ffffff07]'>
            <ProfCard tweet={tweet} />
            <div className='pl-0 flex flex-col gap-8'>
                <div className='text-zinc-400 font-thin'>
                    {tweet.content}
                </div>
                <div>
                    <ActionBar isLiked={tweet.isLiked} />
                </div>
            </div>
        </div>
    )
}

function ProfCard({ tweet }) {
    return (
        <div className="flex gap-4 items-center">
            <div className="w-12 h-12 rounded-full border-[1px] border-[#0005] bg-[#0002] overflow-hidden"></div>
            <div>
                <div className="flex items-center">
                    <span>{tweet.user.name}</span>
                    <span className='text-xl text-zinc-500'><PiDotOutline /></span>
                    <span className='text-xs text-zinc-500'>{tweet.postedAt.toString()}</span>
                </div>
                <div className="text-zinc-500 text-sm font-light">{tweet.user.id}</div>
            </div>
        </div>
    )
}


function ActionBar({ isLiked, onLike, onShare, onComment }) {
    return (
        <div className='flex justify-between text-2xl text-zinc-600'>
            <div className='flex gap-12 [&>*]:cursor-pointer'>
                <Action onClick={_ => onLike && onLike()}>
                    {
                        isLiked ?
                            <PiHeartFill className='fill-pink-700' />
                            :
                            <PiHeartThin className='fill-neutral-400' />
                    }
                </Action>
                <Action onClick={_ => onShare && onShare()}>
                    <PiShareNetworkLight className='fill-neutral-400' />
                </Action>
                <Action onClick={_ => onComment && onComment()}>
                    <PiChatThin className='fill-neutral-400'/>
                </Action>
            </div>
            <Action>
                <PiDotsThreeOutlineVertical className='fill-neutral-400'/>
            </Action>
        </div>
    )
}

function Action({ children, ...props }) {
    return <div
        className='hover:bg-[#0002] rounded-full p-2 cursor-pointer transition-all border-[1px] border-transparent hover:border-gray-700'
        {...props}
    >
        {children}
    </div>
}