import MobileNavBar from "./MobileNavBar";
import "../styles/Header.css";

const Header = ({ mobileNavOn, mobileNavToggle }) => {
    return (
        <header className="Header">
            <MobileNavBar 
                mobileNavOn={mobileNavOn}
                mobileNavToggle={mobileNavToggle}
            />
        </header>
    );
}

export default Header;