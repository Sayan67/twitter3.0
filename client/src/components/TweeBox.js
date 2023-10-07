import ProfileCard from "./ProfileCard";

export default function TweeBox({user, onChange, onTweet, ...props}) {
    return (
        <div {...props}>
            <ProfileCard user={user}/>
            <div className="mt-8">
                <textarea
                    className="resize-none w-full p-4 bg-[#0001] rounded text-zinc-600 border-[1px] border-[#0004] transition-all focus:border-[#fff1] outline-none" 
                    placeholder="What's happening ?"

                    onChange={e => onChange && onChange(e)}
                />
            </div>
            <div className="mt-4">
                <button className="px-4 py-2 text-white bg-indigo-500 rounded hover:bg-indigo-700 transition-all" onClick={e => onTweet && onTweet(e)}>Tweet</button>
            </div>
        </div>
    )
}
