import { useState } from "react";
import UpArrowImg from "../assets/icon-arrow-up.svg";
import DownArrowImg from "../assets/icon-arrow-down.svg";

import "../styles/CompanyMenu.css";

const CompanyMenu = () => {

    const [toggleArrowUp, setToggleArrowUp] = useState(false);

    const toggleArrow = () => {
        setToggleArrowUp(!toggleArrowUp);
    }

    return (
        <div className="company-menu">
            <div className="company-menu-container">
                <h2 className="company-menu-title">
                    Company    
                </h2>
                <button
                    className="company-menu-toggle-btn"
                    onClick={toggleArrow}
                >
                    {
                        toggleArrowUp ? 
                        <img 
                            className="company-menu-arrow"
                            src={UpArrowImg} 
                            alt="down-arrow" />
                        :
                        <img 
                            className="company-menu-arrow"
                            src={DownArrowImg}
                            alt="down-arrow" 
                        />

                    }
                </button>

            </div>
            {
                toggleArrowUp ?
                <div className="company-menu-dropdown">
                    <a
                        className="company-menu-link" 
                        href="/"
                    >
                        History
                    </a>
                    <a
                        className="company-menu-link"
                        href="/"
                    >
                        Our Team
                    </a>
                    <a
                        className="company-menu-link"
                        href="/"
                    >
                        Blog
                    </a>
                </div> 
                    : 
                null
            }
        </div>
    );
}

export default CompanyMenu;