import React from "react";
import { Typography } from "@material-tailwind/react";
// import Socials from "./SocialMediaIcons";
import bg from "../assets/images/bg.svg";
import NavbarDefault from "../components/Navbar";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
    return (
        <>
            <div className=" grid grid-cols-1 gap-2 lg:grid-cols-2">
                <div>
                    <img
                        src={bg}
                        alt="background"
                        className="hidden lg:block absolute z-[-1]  w-full h-full object-cover"
                    />
                    <NavbarDefault />

                    <div className="text-[5.3rem] pt-[16rem] text-[#eaecec] custom-font lg:text-[10rem]">
                        Resurgence
                    </div>
                    <div className="custom-font text-[2.3rem] pt-[5rem] ml-0 pb-[18rem]">
                        <Typewriter
                            options={{
                                strings: ["Where Gaming Comes to Life"],
                                autoStart: true,
                                loop: true,
                                pauseFor: 1000,
                                delay: 140, 
                            }}
                        />
                    </div>

                    {/* <Socials /> */}
                </div>
                <div className="w-full h-full"></div>
            </div>
        </>
    );
};

export default HeroSection;
