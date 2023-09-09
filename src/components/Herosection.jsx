import React from "react";
import { Typography } from "@material-tailwind/react";
import Socials from "./SocialMediaIcons";
import bg from '../assets/images/new.svg'
import NavbarDefault from "../components/Navbar";


const HeroSection = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                <div><NavbarDefault/>
                    <Typography className="text-[5.3rem] pt-[16rem] text-[#eaecec] custom-font lg:text-[10rem]">
                        Resurgence
                    </Typography>
                    <Typography className="custom-font text-[2.3rem] pt-[5rem] pb-[18rem]">
                        For Vibes and Games
                    </Typography>
                    <Socials/>
                </div>
                <div className="w-full h-full">
                    <img src={bg} alt="background" className="w-full h-full object-cover"/>
                </div>
            </div>
            
        </>
    );
};

export default HeroSection;
