import NavBtn from "./NavBtn";
import NavItem from "./NavItem";
import NavProfile from "./NavProfile";
import SideLogo from "./SideLogo";
import './index.css'

const SideNav = ( ) => {
    return(
    <div className="SideNav-container">
        <div className="Top-side">
            <SideLogo/>
            <NavItem/>
        </div>
        <div className="Bottom-side">
            <NavBtn/>
            <NavProfile/>
        </div>
    </div>
    )
}

export default SideNav