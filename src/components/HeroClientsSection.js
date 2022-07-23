import AudioPhileImg from "../assets/client-audiophile.svg";
import DataBizImg from "../assets/client-databiz.svg";
import MakerImg from "../assets/client-maker.svg";
import MeetImg from "../assets/client-meet.svg";
import "../styles/HeroClientsSection.css";

const HeroClientsSection = () => {
    return (
        <div className="hero-clients">
            <img className="hero-client-img" src={DataBizImg} alt=""/>
            <img className="hero-client-img" src={AudioPhileImg} alt=""/>
            <img className="hero-client-img" src={MeetImg} alt=""/>
            <img className="hero-client-img" src={MakerImg} alt=""/>
        </div>
    );
}

export default HeroClientsSection;