import TwitterLogo from '../../Icons/twitter-logo.svg'
import './index.css'

const SideLogo = () => {
    return(
        <div className="Logo-container">
            <img src={TwitterLogo} style={{width: '32px', height: '32px'}}/>
        </div>
    )
}

export default SideLogo