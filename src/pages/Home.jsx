import React from "react";
import { Navbar, Typography } from "@material-tailwind/react";
import HorizontalLine from "../components/HorizontalLine";
import Overview from "../components/Overview";
import HeroSection from "../components/Herosection";
import GameOn from "../components/GameOn";
import HorizontalSlider from "../components/HorizontalSlider";
import ContactUs from "../components/Contactus";
import { SimpleFooter } from "../components/Footer";

const Home = () => {
    return (
        <>
        <div className="w-screen">
            <HeroSection />
            <HorizontalLine />
            <Overview />
            <HorizontalSlider />
            <HorizontalLine />
            <GameOn />
            <HorizontalLine />
            <ContactUs />
            <SimpleFooter />
            </div>
        </>
    );
};

export default Home;
