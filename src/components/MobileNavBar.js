import SnapLogo from "../assets/logo.svg";
import { Twirl as Hamburger } from "hamburger-react";
import "../styles/MobileNavBar.css";

const MobileNavBar = () => {
    return (
        <nav className="mobile-navbar">
            <div className="mobile-navbar-static">
                <img className="snap-logo" src={SnapLogo} alt="snap-logo" />
                <div className="mobile-nav-btn">
                    <Hamburger size={30}/>
                </div>
            </div>
            {/* <div>

            </div> */}
        </nav>
    );
}

export default MobileNavBar;