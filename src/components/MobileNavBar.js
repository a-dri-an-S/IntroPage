import NavBarLinks from "./NavBarLinks";
import NavBarButtons from "./NavBarButtons";
import SnapLogo from "../assets/logo.svg";
import { Twirl as Hamburger } from "hamburger-react";
import "../styles/MobileNavBar.css";

const MobileNavBar = ({ mobileNavOn, mobileNavToggle }) => {

    return (
        <nav className={`mobile-navbar ${mobileNavOn ? "navbar-active" : null}`}>
            <div className="mobile-navbar-top">
                <img className="snap-logo" src={SnapLogo} alt="snap-logo" />
                <button 
                    className={`mobile-nav-btn ${mobileNavOn ? 'btn-active' : null}`}
                    onClick={mobileNavToggle}
                >
                    <Hamburger size={30}/>
                </button>
            </div>
            {
                mobileNavOn ? 
                    <div className="mobile-sidebar">
                        <NavBarLinks />
                        <NavBarButtons />
                    </div> 
                        : 
                    null
            }
        </nav>
    );
}

export default MobileNavBar;