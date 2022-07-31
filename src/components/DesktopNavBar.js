import NavBarLinks from "./NavBarLinks";
import NavBarButtons from "./NavBarButtons";
import SnapLogo from "../assets/logo.svg";

import "../styles/DesktopNavBar.css";

const DesktopNavBar = () => {
    return (
        <nav className="desktop-navbar">
            <div className="desktop-navbar-links">
                <img 
                    className="desktop-snap-logo"
                    src={SnapLogo} 
                    alt="snap-logo"
                />
                <NavBarLinks />
            </div>
            <div>
                <NavBarButtons />
            </div>
        </nav>
    );
}

export default DesktopNavBar;