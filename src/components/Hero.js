import MobileHeroImg from "../assets/image-hero-mobile.png";
import HeroMainSection from "../components/HeroMainSection";
import HeroClientsSection from "../components/HeroClientsSection";
import "../styles/Hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <img className="mobile-hero-img" src={MobileHeroImg} alt="mobile-hero-img"/>
            <HeroMainSection />
            <HeroClientsSection />
        </section>
    );
}

export default Hero;