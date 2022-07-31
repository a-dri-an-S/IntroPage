import "../styles/HeroMainSection.css";

const HeroMainSection = () => {
    return (
        <div className="hero-main">
            <h1 className="hero-title title-mobile">Make remote work</h1>
            <h1 className="hero-title title-desktop">Make<br/>remote work</h1>
            <p className="hero-info">
                Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
            </p>
            <button className="hero-btn">
                Learn more
            </button>
        </div>
    );
}

export default HeroMainSection;