import './index.css'
import Avatar from '../../../assets/avatars/elon.jpeg'
import GenerateIcon from '../../Icons/GenerateIcon'
import TweetBtn from './TweetBtn'

const MakeTweet = () => {
  const toolbarIcons = [
    {
      IconName: 'ImgBlue'
    }, {
      IconName: 'GifBlue'
    }, {
      IconName: 'PollBlue'
    }, {
      IconName: 'EmojiBlue'
    }, {
      IconName: 'ScheduleBlue'
    }
  ]
  return ( 
    <>
        <div className="Tweet-make-container">
            <img
            src={Avatar}
            style={{
            width: '50px',
            height: '50px',
            borderRadius: '100px'
            }}/>
            <div className="Tweet-input-container">
            <input className="Tweet-input" placeholder="What's happening?"/>
            <div className="Tweet-make-toolbar">
                <div className="Toolbar-icon-container">
                {toolbarIcons.map((value, index) => {
                    return (
                    <div className="Toolbar-icon">
                        <GenerateIcon Name={value.IconName} Size="20px" Key={index}/>
                    </div>
                    )
                })}
                </div>
                <TweetBtn/>
            </div>
            </div>
    </div>
  </> 
    )
}

export default MakeTweet