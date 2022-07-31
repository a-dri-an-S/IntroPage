import NavBarLinks from "./NavBarLinks";
import NavBarButtons from "./NavBarButtons";
import SnapLogo from "../assets/logo.svg";
import MenuImg from "../assets/icon-menu.svg";
import MenuCloseImg from "../assets/icon-close-menu.svg";
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
                    {
                        mobileNavOn ? 
                        <img src={MenuCloseImg} alt="menu-close" />
                            :
                        <img src={MenuImg} alt="menu-hamburger" />
                    }
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