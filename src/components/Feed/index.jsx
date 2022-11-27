import MakeTweet from "./MakeTweet"
import Tweet from "./Tweet"
import "./index.css"
import TweetHead from "./TweetHead"
const Feed = () => {
    return(
        <>
        <div className="Feed-container">
            <TweetHead />
            <MakeTweet />
            <Tweet />
        </div>
        </>
    )
}

export default Feed