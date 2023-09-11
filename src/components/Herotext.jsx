import React from "react";
import video from "../assets/video1.mp4";


const Text = () => {
    return (<>
     {/* <div className="video-section">
                <video controls>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="video-copy text-[5.3rem] pt-[16rem] text-[#eaecec]  custom-font1 lg:text-[14rem]">
                    Resurgence
                </div>
       
            </div> */}


            <div  className="video-section">
            <video  src={video} loop autoPlay muted></video>
            <div className='text-[5.3rem] fontstyle1 video-copy custom-font1 lg:text-[10rem]'>
                <h1 >Resurgence</h1>
            </div>
        </div>
    </>)
};

export default Text;
