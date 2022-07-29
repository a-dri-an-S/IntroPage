import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import "../styles/HomePage.css";

const HomePage = () => {

    const [mobileNavOn, setMobileNavOn] = useState(false);

    const mobileNavToggle = () => {
        setMobileNavOn(!mobileNavOn);
    }

    return (
        <main className="home-page">

            <Header 
                mobileNavOn={mobileNavOn}
                mobileNavToggle={mobileNavToggle}
            />
            <Hero />
            
        </main>
    );
}

export default HomePage;