import MakeTweet from "./MakeTweet"
import Tweet from "./Tweet"
import "./index.css"
import TweetHead from "./TweetHead"
import Avatar from "../../assets/avatars/elon.jpeg"
import { useState } from "react"



const Feed = () => {
  let [Tweets, SetTweets] = useState([
    {
      id: 0,
      Avatar: Avatar,
      Author: "Abdgali Yerkingaliyev",
      Profile: "@aberkingaliev",
      Date: "Nov 27",
      Content: "Thanksgiving cuisine is such a delightful symphony of flavor!"
    }, {
      id: 1,
      Avatar: Avatar,
      Author: "Abdgali Yerkingaliyev",
      Profile: "@aberkingaliev",
      Date: "Nov 26",
      Content: "It'is"
    }, {
      id: 2,
      Avatar: Avatar,
      Author: "Abdgali Yerkingaliyev",
      Profile: "@aberkingaliev",
      Date: "Nov 26",
      Content: "My first"
    }, {
      id: 3,
      Avatar: Avatar,
      Author: "Abdgali Yerkingaliyev",
      Profile: "@aberkingaliev",
      Date: "Nov 26",
      Content: "tweet!"
    }, {
      id: 4,
      Avatar: Avatar,
      Author: "Abdgali Yerkingaliyev",
      Profile: "@aberkingaliev",
      Date: "Nov 26",
      Content: "Thank's for attention, it'is my first tweet!"
    }, {
      id: 5,
      Avatar: Avatar,
      Author: "Abdgali Yerkingaliyev",
      Profile: "@aberkingaliev",
      Date: "Nov 26",
      Content: "Chank's for attention, it'is my first tweet!"
    }
  ])

  let [searchedText, setsearchedText] = useState()
  const foundedTweets = searchedText ? Tweets.filter((Tweet)=>{return Tweet.Content.includes(searchedText)}) : Tweets
  return(
        <>
        <div className="Feed-container">
            <TweetHead />
            <MakeTweet />
            <input className="Search-input" placeholder="Search Tweets .." onChange={(event)=>setsearchedText(event.target.value)} />
            <>
              {foundedTweets.map((elem) => {
                  return <Tweet Key={elem.id} Avatar={elem.Avatar} Author={elem.Author} Profile={elem.Author} Date={elem.Date} Content={elem.Content}/>
              })}
            </>
        </div>
        </>
    )
}

export default Feed

