import GenerateIcon from "../../Icons/GenerateIcon.js";
import './index.css'

const NavItem = () => {
  const Items = [
    {
      ItemName: 'Home',
      IconName: 'Home'
    }, {
      ItemName: 'Explore',
      IconName: 'Hashtag'
    }, {
      ItemName: 'Notifications',
      IconName: 'Notification'
    }, {
      ItemName: 'Messages',
      IconName: 'Message'
    }, {
      ItemName: 'Bookmarks',
      IconName: 'Bookmark'
    }, {
      ItemName: 'Lists',
      IconName: 'Lists'
    }, {
      ItemName: 'Profile',
      IconName: 'Profile'
    }, {
      ItemName: 'More',
      IconName: 'More'
    }
  ]
  
  return ( 
    <>
    {Items.map((value, index) => {
      return (
        <div className="item-container">
          <GenerateIcon Name={value.IconName} Size={"28px"} key={index}/>
          <p class="fn-nv-it-20">{value.ItemName}</p>
        </div>
      )
    })
  } 
  </>
    )
}

export default NavItem