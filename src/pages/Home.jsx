import React from "react";
import { Navbar, Typography } from "@material-tailwind/react";
import HorizontalLine from "../components/HorizontalLine";
import InteractiveBanner from "../components/InteractiveBanner";
import Overview from "../components/Overview";
import HeroSection from "../components/Herosection";
import GameOn from "../components/GameOn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HorizontalSlider from "../components/HorizontalSlider";
import ContactUs from "../components/Contactus";
import { SimpleFooter } from "../components/Footer";


const Home = () => {
    return (
        <>  
            
            <FontAwesomeIcon icon="fa-brands fa-github" fade />
            <HeroSection />
            <HorizontalLine />
            <Overview />
            <HorizontalSlider />
            <HorizontalLine />
            <GameOn />
            <HorizontalLine />
            <ContactUs />
            <SimpleFooter />
        </>
    );
};

export default Home;
