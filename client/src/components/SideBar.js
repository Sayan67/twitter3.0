'use client'

import { AiOutlineHome, AiOutlineProfile, AiOutlineNotification, AiOutlineBook } from 'react-icons/ai'

const ACTIONS = [
    { id: 'home', name: 'Home', href: '', icon: <AiOutlineHome /> },
    { id: 'profile', name: 'Profile', href: '', icon: <AiOutlineProfile /> },
    { id: 'notifications', name: 'Notifications', href: '', icon: <AiOutlineNotification /> },
    { id: 'bookmarks', name: 'Bookmarks', href: '', icon: <AiOutlineBook /> }
]

export default function SideBar({ current = 'home', onAction }) {
    return (
        <div>
            <ul className="flex flex-col gap-4">
                {
                    ACTIONS.map((v, i) => (
                        <li key={i} className='flex items-center gap-4'>
                            <div className='text-[1.3em]'>
                                {v.icon ? v.icon : null}
                            </div>
                            <Action
                                active={current === v.id}
                                onClick={(e) => onAction && onAction(e, v)}
                            >
                               {v.name}
                            </Action>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

const Action = ({ active, children, onClick, ...props }) => (
    <div
        className={active ? "action-active" : "action-not-active"}
        onClick={(e) => onClick && onClick(e)}
        {...props}
    >
        {children}
    </div>
)