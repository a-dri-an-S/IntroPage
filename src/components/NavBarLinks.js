import FeaturesMenu from  "./FeaturesMenu";
import CompanyMenu from "./CompanyMenu";

import "../styles/NavBarLinks.css";

const NavBarLinks = () => {

    const onLinkClick = (e) => {
        e.preventDefault();
    }

    return (
        <div className="navbar-links">
            <div className="navbar-link">
                <FeaturesMenu />
            </div>
            <div className="navbar-link">
            <CompanyMenu />
            </div>
            <a
                className="navbar-link"
                href={{}}
                onClick={(e) => onLinkClick(e)}
            >
                Careers
            </a>
            <a
                className="navbar-link"
                href={{}}
                onClick={(e) => onLinkClick(e)}
            >
                About
            </a>
        </div>
    );
}

export default NavBarLinks;