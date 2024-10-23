import React from 'react'
import "./hero.css";
import heroGif from '../../annimation/zone.json'; 
import Lottie from 'lottie-react';
// React
import { motion } from "framer-motion"



const Hero = ()=>{
 
    return (
     <section className='hero flex ' id= "about">
      <div className='left-section'>

        <div className='parent-avatar flex'>
          <motion.img 
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{
             duration: 0.8,
             delay: 0.5,
             ease: [0, 0.71, 0.2, 1.01]
           }}
         
          className='avatar 'src="./img.jpg" alt="" />
          <div className='icon-linkedin-square'></div>
        </div>
        <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{duration: 2}}
        className='title'>
          Software & Product Designer | Educato  
          </motion.h1>
        <p className='sub-title'>
        Full-stack developer specializing in technologies such as React.js, Angular, HTML, CSS, JavaScript, TypeScript, and Node.js. With extensive experience in development, I have contributed to projects that bring significant value to businesses. Additionally, my passion for education has led me to share my knowledge by teaching advanced web development skills to students. I also have advanced expertise in using tools like Figma, Adobe, and CorelDraw.
        </p>
     
      <div className="all-icons flex">
        <div className="icon icon-twitter-square"></div>
        <div className="icon icon-instagram"></div>
        <div className="icon icon-linkedin-square"></div>
        <div className="icon icon-github-square"></div>
      </div>
      </div>
      <div className='right-section animation'>
      <Lottie 
          loop={false} 
          style={{height: 450, width: 650,  marginBottom: "1.5rem", marginRight: "20px"}} 
          animationData={heroGif}/>
     </div>

     </section>
    )
  }
export default Hero;
