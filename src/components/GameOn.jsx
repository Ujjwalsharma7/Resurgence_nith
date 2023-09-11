import { React, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import FlappyBird from "../assets/flappy_bird/game";

const GameOn = () => {
    useEffect(() => {
        FlappyBird();
    });
    return (
        <>
            <div className="grid lg:grid-cols-2">
                <div className="GameOn_text ">
                    <Typography className="custom-font text-[5rem] py-8">
                        GameOn
                    </Typography>
                    <Typography className="text-[1.1rem] px-3 py-8">
                        With the classic flappy bird! Resurgence is gaming club
                        of NIT Hamirpur. We are a gaming first, but not limited
                        to gaming club. We are a community of gamers,
                        developers, designers, and artists.
                    </Typography>
                </div>
                <div className="">
                    <canvas
                        className="mx-auto mb-10 border-solid border-2 border-white rounded"
                        id="canvas"
                        width="276"
                        height="414"
                    ></canvas>
                </div>
            </div>
        </>
    );
};

export default GameOn;
