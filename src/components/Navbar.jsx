import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    Avatar,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import image from "../assets/images/logo.png";

const NavbarDefault = () => {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-12">
            <Typography as="li" color="white" className="custom-font2 p-1 ">
                <Link to="/" className="custom-font2 flex items-center ">
                    Home
                </Link>
            </Typography>
            <Typography as="li" color="white" className="p-1 ">
                <Link to="/team" className="flex items-center custom-font2">
                    Team
                </Link>
            </Typography>
            <Typography as="li" color="white" className="p-1 2">
                <Link to="/events" className="flex items-center custom-font2">
                    Events
                </Link>
            </Typography>
        </ul>
    );

    return (
        <div className="fixed top-0 left-0 w-full bg-transparent z-50">
            <div className=" mx-auto border-none py-2 px-6 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-white">
                    <Avatar src={image} alt="avatar" />
                    <div className="hidden lg:block">{navList}</div>

                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
                <Collapse open={openNav}>
                    <div className="container mx-auto">{navList}</div>
                </Collapse>
            </div>
        </div>
    );
};

export default NavbarDefault;
