import React, { useEffect, useRef } from "react";

const InteractiveBanner = () => {
    const canvasRef = useRef(null);
    const bgCanvasRef = useRef(null);
    const loadingRef = useRef(null);

    let keyword = "Resurgence",
        context,
        bgContext,
        density = 10,
        particles = [],
        mouse = { x: 0, y: 0 },
        isDrawing = false,
        canvasW,
        canvasH,
        defaultFont = "Arial";

    let drawTimeout;

    useEffect(() => {
        const initialize = (font) => {
            if (font) defaultFont = font;

            reload();
            window.addEventListener("resize", handleResize);
        };

        const reload = () => {
            context = canvasRef.current.getContext("2d");
            bgContext = bgCanvasRef.current.getContext("2d");

            canvasW = window.innerWidth;
            canvasH = 300;

            canvasRef.current.width = canvasW;
            canvasRef.current.height = canvasH;

            bgCanvasRef.current.width = canvasW;
            bgCanvasRef.current.height = canvasH;

            canvasRef.current.addEventListener(
                "mousemove",
                handleMouseMove,
                false
            );
            canvasRef.current.addEventListener(
                "mouseout",
                handleMouseOut,
                false
            );

            prepare();
            setupParticles();
            draw();
        };

        const prepare = () => {
            bgContext.font = "430px 'Cookie'";
            bgContext.fillText(
                keyword,
                canvasW / 2 -
                    Math.round(bgContext.measureText(keyword).width / 2),
                275
            );
        };

        const setupParticles = () => {
            particles = [];
            let imageData, image_Data, pixel;
            imageData = bgContext.getImageData(0, 0, canvasW, canvasH);
            image_Data = imageData.data;

            for (let width = 0; width < canvasW; width += density) {
                for (let height = 0; height < canvasH; height += density) {
                    pixel = image_Data[(width + height * canvasW) * 4 - 1];

                    if (pixel === 255) {
                        particles.push({
                            x: width,
                            y: height,
                        });
                    }
                }
            }
        };

        const draw = () => {
            context.clearRect(
                0,
                0,
                canvasRef.current.width,
                canvasRef.current.height
            );

            let dx,
                dy,
                sqrDist,
                scale = 1;

            for (let i = 0, len = particles.length; i < len; ++i) {
                let p = particles[i];

                dx = p.x - mouse.x;
                dy = p.y - mouse.y;

                sqrDist = Math.sqrt(dx * dx + dy * dy);

                isDrawing
                    ? (scale = Math.max(Math.min(15 - sqrDist / 10, 10), 1))
                    : (scale = 1);

                bgContext.fillStyle = "#000";
                context.fillStyle = "#FFFFFF";
                context.strokeStyle = "#000000";
                context.lineWidth = 3;

                context.beginPath();
                context.arc(p.x, p.y, 2 * scale, 0, Math.PI * 2, true);
                context.closePath();
                context.stroke();
                context.fill();
            }
        };

        const handleMouseMove = (e) => {
            mouse.x = e.offsetX || e.layerX - canvasRef.current.offsetLeft;
            mouse.y = e.offsetY || e.layerY - canvasRef.current.offsetTop;

            if (!isDrawing) {
                isDrawing = true;
                drawTimeout = setTimeout(() => {
                    draw();
                    isDrawing = false;
                }, 20);
            }
        };

        const handleMouseOut = (e) => {
            isDrawing = false;
            clearTimeout(drawTimeout);
            draw();
        };

        const handleResize = () => {
            reload();
        };

        initialize();
    }, []);

    return (
        <div className="container">
            <div id="wrapper" className="wrapper">
                <canvas
                    id="canvas-banner"
                    className="inactive"
                    ref={canvasRef}
                ></canvas>
                <div className="loading" ref={loadingRef}>
                    Loading...
                </div>
            </div>
        </div>
    );
};

export default InteractiveBanner;
