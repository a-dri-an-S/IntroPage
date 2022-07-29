import { useState } from "react";
import UpArrowImg from "../assets/icon-arrow-up.svg";
import DownArrowImg from "../assets/icon-arrow-down.svg";
import TodoImg from "../assets/icon-todo.svg";
import CalendarImg from "../assets/icon-calendar.svg";
import RemindersImg from "../assets/icon-reminders.svg";
import PlanningImg from "../assets/icon-planning.svg";

import "../styles/FeaturesMenu.css";

const FeaturesMenu = () => {

    const [toggleArrowUp, setToggleArrowUp] = useState(false);

    const toggleArrow = () => {
        setToggleArrowUp(!toggleArrowUp);
    }

    return (
        <div className="features-menu">
            <div className="features-menu-container">
                <h2 className="features-menu-title">
                    Features    
                </h2>
                <button
                    className="features-menu-toggle-btn"
                    onClick={toggleArrow}
                >
                    {
                        toggleArrowUp ? 
                        <img 
                            className="features-menu-arrow"
                            src={UpArrowImg} 
                            alt="down-arrow" 
                        />
                        :
                        <img 
                            className="features-menu-arrow"
                            src={DownArrowImg} 
                            alt="down-arrow" 
                        />
                    }
                </button>
            </div>
            {
                toggleArrowUp ?
                <div className="features-menu-dropdown">
                    <div className="features-menu-links">
                        <img 
                            className="features-menu-link-icon"
                            src={TodoImg} 
                            alt="todo-icon"
                        />
                        <a 
                            className="features-menu-link"    
                            href="/"
                        >
                            Todo List
                        </a>
                    </div>
                    <div className="features-menu-links">
                        <img 
                            className="features-menu-link-icon"
                            src={CalendarImg} 
                            alt="calendar-icon"
                        />
                        <a 
                            className="features-menu-link" 
                            href="/"
                        >
                            Calenders
                        </a>
                    </div>
                    <div className="features-menu-links">
                        <img 
                            className="features-menu-link-icon"
                            src={RemindersImg} 
                            alt="reminder-icon"
                        />
                        <a 
                            className="features-menu-link" 
                            href="/"
                        >
                            Reminders
                        </a>
                    </div>
                    <div className="features-menu-links">
                        <img 
                            className="features-menu-link-icon"
                            src={PlanningImg} 
                            alt="planning-icon"
                        />
                        <a 
                            className="features-menu-link" 
                            href="/"
                        >
                            Planning
                        </a>
                    </div>
                </div> 
                    : 
                null
            }
        </div>
    );
}

export default FeaturesMenu;