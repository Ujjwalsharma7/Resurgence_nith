import React, { useEffect } from "react";
import Banner from "./banner.js";

const Canvas = () => {
    useEffect(() => {
        const banner = new Banner();
        banner.initialize("canvas-banner"); 
    }, []);

    return (
        <div id="wrapper" class="wrapper">
        <canvas id="canvas-banner" class="inactive">
            <img src="images/fallback2.png" />
        </canvas>
    </div>
    ) 
};

export default Canvas;
