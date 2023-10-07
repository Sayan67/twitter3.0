
const ProfileCard = ({user}) => (
    <div className="flex gap-6 items-center">
        <div className="w-16 h-16 rounded-full border-[1px] border-[#0005] bg-[#0002] overflow-hidden">
            <img src={user && user.picture}></img>
        </div>
        <div>
            <div>{user && user.name}</div>
            <div className="font-thin text-sm">{user && user.id}</div>
        </div>
    </div>
)

export default ProfileCard