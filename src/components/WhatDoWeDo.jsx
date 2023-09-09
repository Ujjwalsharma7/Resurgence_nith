import React,{useEffect} from "react";
import "./WhatDoWeDo.css";
import { Tilt } from "react-tilt";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import config from "../App.config";
import images from "../assets/images/images";
import FadeInFromTop from "./AnimationComponents/FadeInFromTop";

function Service({ index, title }) {
    const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {``
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);
  return (
    <Tilt className="card_outer">
      <motion.div
        className="card"
        initial={{ x: "-150px", opacity: 0 }}
        transition={{
          type: "spring",
          delay: 0.7+index * 0.5,
          duration: 0.75,
          ease: "easeOut",
        }}
        ref={ref}
        animate={controls}
        variants={{show:{ x: 0, y: 0, opacity: 1 }}}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="card-inner"
        >
          <img
            src={images[index]}
            alt="web-development"
            className="card_image"
          />

          <h3 className="card_title">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

export default function WhatDoWeDo() {
    const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);
  return (
    <div className="whatdowedo">
      <motion.div
        variants={{
          hidden: {
            y: -50,
            opacity: 0,
          },
          show: {
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              duration: 0.5,
              delay: 0,
            },
          },
        }}
        initial="hidden"
        className=""
        whileInView="visible"
        viewport={{ once: true }}
        ref={ref}
        animate={controls}
      >
        <div className="text-overview">Overview.</div>
      </motion.div>

      <FadeInFromTop delay={0.4}>
        <div className="w-50">
        {config.whatDoWeDoText}
        </div>
        </FadeInFromTop>
      
      <div className="tiles">
        {config.whatDoWeDo.map((service, index) => {
          return <Service key={service.title} index={index} {...service} />;
        })}
      </div>
    </div>
  );
}
