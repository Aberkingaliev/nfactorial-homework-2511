import GenerateIcon from "../../Icons/GenerateIcon"
import './index.css'

const Tweet = ({Avatar, Author, Profile, Date, Content}) => {
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
  const searchTweets = () => {

  }
  return ( 
    <>
        <div className="Tweet-container">
          <div class="Tweet-left">
            <img
              src={Avatar}
              style={{
              width: '50px',
              height: '50px',
              borderRadius: '100px'
            }}/>
            <div className="Tweet-content">
              <div className="Tweet-author">
                <a href="./">
                  <b>{Author}</b>
                </a>
                <p style={{
                  color: '#566370'
                }}>{Profile} ·
                </p>
                <p style={{
                  color: '#566370'
                }}>{Date}</p>
              </div>
              <p>{Content}</p>
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
    </>
    )
}


export default Tweet