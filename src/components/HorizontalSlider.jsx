// import React,{useState} from 'react'
// import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs';
// import { Carousel } from "@material-tailwind/react";



// const HorizontalSlider = () => {


//   const slides = [
//     {
//       url:'https://res.cloudinary.com/dnif0edly/image/upload/v1678531088/cld-sample-4.jpg' ,
//     },
//     {
//       url:'https://res.cloudinary.com/dnif0edly/image/upload/v1678531087/cld-sample-3.jpg',
//     },
//     {
//       url:'https://res.cloudinary.com/dnif0edly/image/upload/v1678531087/cld-sample-2.jpg',
//     },
//   ];

//   const [currentIndex, setcurrentIndex] = useState(0);

//   const prevSlide=()=>{
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1 ;
//     setcurrentIndex(newIndex);
//   };

//   const nextSlide=()=>{
//     const isLastSlide=currentIndex=== slides.length -1;
//     const newIndex=isLastSlide? 0 :currentIndex + 1 ;
//     setcurrentIndex(newIndex);
//   }

  



//   return (
//     <Carousel className="rounded-xl">
//     <div className='max-w-[1400] h-[500px] w-full m-auto py-16 px-4 relative group grid grid-cols-3 md:grid-cols-6'>
//       <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500 '>

//       <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
//         <BsChevronCompactLeft onClick={prevSlide} size={30} />
//       </div>

//       <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
//         <BsChevronCompactRight onClick={nextSlide} size={30} />
//       </div>

//       </div>
//     </div>
//     </Carousel>
//   )
// }

// export default HorizontalSlider;

import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

function HorizontalSlider() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[{minWidth: 700, maxWidth:2050 , itemsToShow: 4}, 
          {maxWidth: 450, itemsToShow: 1}]
      }
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        <div style={{ width: 300, height: 300,  background: '#ff80ed' }} className="m-2xl">
          slide 0
        </div>
        <div style={{ width: 300, height: 300, background: '#065535' }}>
          slide 1
        </div>
        <div style={{ width: 300, height: 300, background: '#000000' }}>
          slide 2
        </div>
        <div style={{ width: 300, height: 300, background: '#133337' }}>
          slide 3
        </div>
      </ReactSimplyCarousel>
    </div>
  );
}

export default HorizontalSlider;