import React from "react";
import Home from'./twitter-home.svg'
import Hashtag from'./twitter-hashtag.svg'
import Notification from './twitter-alert.svg'
import Lists from './twitter-lists.svg'
import Profile from './twitter-profile.svg'
import Bookmark from './twitter-bookmark.svg'
import Message from './twitter-messages.svg'
import More from './twitter-more.svg'
import ImgBlue from './twitter-blue-img.svg'
import GifBlue from './twitter-blue-gif.svg'
import PollBlue from './twitter-blue-poll.svg'
import EmojiBlue from './twitter-blue-emoji.svg'
import ScheduleBlue from './twitter-blue-schedule.svg'
import CommentGray from './twitter-gray-comment.svg'
import RetweetGray from './twitter-gray-retweet.svg'
import LikeGray from './twitter-gray-like.svg'
import ShareGray from './twitter-gray-share.svg'
import TwitterStars from './twitter-stars.svg'


const GenerateIcon = ({ Name, Size }) => {
    const dataIcon = {
    Home: Home,
    Hashtag: Hashtag,
    Notification: Notification,
    Lists: Lists,
    Profile: Profile,
    Bookmark: Bookmark,
    Message: Message,
    More: More,
    ImgBlue: ImgBlue,
    GifBlue: GifBlue,
    PollBlue: PollBlue,
    EmojiBlue: EmojiBlue,
    ScheduleBlue: ScheduleBlue,
    CommentGray: CommentGray,
    RetweetGray: RetweetGray,
    LikeGray: LikeGray,
    ShareGray: ShareGray,
    TwitterStars: TwitterStars

}
    return(
            <img src={dataIcon[Name]} style={{width: Size, height: Size}} />
    )
}

export default GenerateIcon
