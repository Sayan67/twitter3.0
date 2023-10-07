'use client'

import Feed from "@/components/Feed";
import SideBar from "@/components/SideBar";
import TweeBox from "@/components/TweeBox";
import { generateDummyTweet, generateDummyUser } from "@/utiils/dummy";
import { useEffect, useState } from "react";

export default function UserHome({params}) {
    const uid = params.uid
    console.log(uid)

    const [user, setUser] = useState()
    const [currentTab, setCurrentTab] = useState('home')
    const [tweets, setTweets] = useState([])

    useEffect(() => {
        setUser(generateDummyUser({id: uid}))
    }, [])

    useEffect(() => {
        const n = 5 + Math.random() * 5 
        let tweets = []
        for (let i=0; i < n; ++i) {
            tweets.push(generateDummyTweet())
        }

        setTweets(tweets)
    }, [])

    const onSideBarAction = (_, v) => {
        setCurrentTab(v.id)
    }

    return (
        <div className="flex justify-center">
            <div className="sm:mt-10 lg:w-3/4 xl:w-1/2 flex gap-12">
                <div>
                    <SideBar current={currentTab} onAction={onSideBarAction.bind(this)}/>
                </div>
                <div className="flex-auto flex flex-col">
                    <TweeBox user={user} />
                    <hr className="mt-12 border-[#ffffff07]"/>
                    <Feed tweets={tweets}/>
                </div>
            </div>
        </div>
    )
}