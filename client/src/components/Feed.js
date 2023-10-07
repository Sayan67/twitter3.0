import Tweet from "./Tweet";

export default function Feed({tweets = []}) {
    return (
        <div className="flex flex-col">
            {
                tweets.map((t, i) => (
                    <Tweet key={i} tweet={t}/>
                ))
            }
        </div>
    )
}