import React from 'react'
import './speaking.css'
import { motion } from 'framer-motion';

import Lottie from 'lottie-react';
import Pc from '../../annimation/pc.json';
import { div } from 'framer-motion/client';

const Speaking = () => {


      const text = "Got an idea you’re passionate about? Let’s make it happen! Whether it’s building a powerful web app or designing something visually stunning, I’m here to help you bring your vision to life. I love working on projects that make a difference, and I’m always open to new opportunities. Drop me a message, and let’s create something amazing together!".split(" ");
    
      return (
       
        
        <div id= "speaking" className="">

        <div className="title">
            <h2>
            Let’s Bring Your Ideas to Life!
            </h2>
        </div>
        

            
        <div className='flex speaking'>

        <div className="animation">
          <Lottie 
          loop={false} 
          style={{height: 380, width: 450,  marginBottom: "1.5rem", marginRight: "50px"}} 
          animationData={Pc}/>      
          </div>
          

         <div className='span'>

          {text.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 10,
              }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
          </div>

         
        </div>
        </div>
       
      );
    }
    
    

export default Speaking;