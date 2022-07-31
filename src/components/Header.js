import MobileNavBar from "./MobileNavBar";
import DesktopNavBar from "./DesktopNavBar";
import "../styles/Header.css";

const Header = ({ mobileNavOn, mobileNavToggle }) => {
    return (
        <header className="header">
            <MobileNavBar 
                mobileNavOn={mobileNavOn}
                mobileNavToggle={mobileNavToggle}
            />
            <DesktopNavBar />
        </header>
    );
}

export default Header;