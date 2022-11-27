import './index.css'
import GenerateIcon from '../../Icons/GenerateIcon.js'
import Elon from '../../../assets/avatars/elon.jpeg'

const NavProfile = () => {
  return (
    <div class="Profile-container">
      <img
        src={Elon}
        style={{
        width: '45px',
        height: '45px',
        borderRadius: '100px'
      }}/>
      <div class="User-info">
        Abdgali Yerkingali..
        <p class="Profile-nick">@aberkingaliev</p>
      </div>
      <GenerateIcon Name="More"/>
    </div>
  )
}

export default NavProfile