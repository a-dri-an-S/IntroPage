import MobileHeroImg from "../assets/image-hero-mobile.png";
import DesktopHeroImg from "../assets/image-hero-desktop.png";
import HeroMainSection from "../components/HeroMainSection";
import HeroClientsSection from "../components/HeroClientsSection";
import "../styles/Hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <img className="mobile-hero-img" src={MobileHeroImg} alt="mobile-hero-img"/>
            <img className="desktop-hero-img" src={DesktopHeroImg} alt="mobile-hero-img"/>
            <div className="hero-info-container">
                <HeroMainSection />
                <HeroClientsSection />
            </div>
        </section>
    );
}

export default Hero;