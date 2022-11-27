import Avatar from "../../../assets/avatars/elon.jpeg"
import GenerateIcon from "../../Icons/GenerateIcon"
import './index.css'

const Tweet = () => {
  const Tweets = [
    {
      Avatar: Avatar,
      Author: "Abdgali Yerkingaliyev",
      Profile: "@aberkingaliev",
      Date: "Nov 27",
      Content: "Thanksgiving cuisine is such a delightful symphony of flavor!"
    }, {
      Avatar: Avatar,
      Author: "Abdgali Yerkingaliyev",
      Profile: "@aberkingaliev",
      Date: "Nov 26",
      Content: "Thank's for attention, it'is my first tweet!"
    }, {
      Avatar: Avatar,
      Author: "Abdgali Yerkingaliyev",
      Profile: "@aberkingaliev",
      Date: "Nov 26",
      Content: "Thank's for attention, it'is my first tweet!"
    }, {
      Avatar: Avatar,
      Author: "Abdgali Yerkingaliyev",
      Profile: "@aberkingaliev",
      Date: "Nov 26",
      Content: "Thank's for attention, it'is my first tweet!"
    }, {
      Avatar: Avatar,
      Author: "Abdgali Yerkingaliyev",
      Profile: "@aberkingaliev",
      Date: "Nov 26",
      Content: "Thank's for attention, it'is my first tweet!"
    }, {
      Avatar: Avatar,
      Author: "Abdgali Yerkingaliyev",
      Profile: "@aberkingaliev",
      Date: "Nov 26",
      Content: "Thank's for attention, it'is my first tweet!"
    }
  ]
  const Toolbar_Icons = [
    {
      IconName: "CommentGray",
      Amount: "10K"
    }, {
      IconName: "RetweetGray",
      Amount: "8K"
    }, {
      IconName: "LikeGray",
      Amount: "32K"
    }, {
      IconName: "ShareGray",
      Amount: ""
    }
  ]
  return ( 
    <>
    {Tweets.map((tweet) => {
      return (
        <div className="Tweet-container">
          <div class="Tweet-left">
            <img
              src={tweet.Avatar}
              style={{
              width: '50px',
              height: '50px',
              borderRadius: '100px'
            }}/>
            <div className="Tweet-content">
              <div className="Tweet-author">
                <a href="./">
                  <b>{tweet.Author}</b>
                </a>
                <p style={{
                  color: '#566370'
                }}>{tweet.Profile} ·
                </p>
                <p style={{
                  color: '#566370'
                }}>{tweet.Date}</p>
              </div>
              <p>{tweet.Content}</p>
              <div className="Tweet-toolbar">
                {Toolbar_Icons.map((value) => {
                  return (
                    <div className="Tool">
                      <GenerateIcon Name={value.IconName} Size="20px"/> {value.Amount}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <GenerateIcon Name="More" Size="20px"/>
        </div>
      )
    })}
    </>
    )
}


export default Tweet