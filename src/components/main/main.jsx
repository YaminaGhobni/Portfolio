import React, { useState } from 'react'
import './main.css';

import { motion } from "framer-motion";

const myprojects = [
  {projectTitle: "Pro-Immo Logistics", 
    category: ["react", "css", "js", "node"], 
    description: "This is an application dedicated to managing a fleet of trucks, aimed at tracking daily trips, locating vehicles, monitoring depreciation, and evaluating profitability based on the revenue generated, providing a comprehensive solution to optimize truck logistics. <br>Technologies used: R, JavaScript, HTML, CSS, Figma, Jest, JavaScript, Firebase, Adobe", 
    imgPath: "a"},
   
   {projectTitle: "Digitou Website", 
    category: "css", 
    description: "Frontend development of a specialized application dedicated to operational monitoring for project managers (the architect and the project manager). It allows full management of resources, stock, labor, and construction permits related to the project. <br>Technologies used: React JS, JavaScript, HTML, CSS, Figma, Jest, JavaScript, Firebase, Adobe", 
    imgPath: "b"},
   
   {projectTitle: "Pro-Immo", 
    category: "js", 
    description: "Frontend development of a SaaS application for a large real estate company in Tunisia. A dashboard specifically designed for the CEO offers a graphical visualization of resources allocated to each project, tracking delivery deadlines, managing human resources, and providing a dynamic view of the progress of each project. Technologies used: React JS, JavaScript, HTML, CSS, Figma, Jest, JavaScript, Firebase, Adobe", 
    imgPath: "b"},
   
   {projectTitle: "Pro-Immo Management", 
    category: "react", 
    description: "Website for the French digital agency Digitou in Marseille, developed with HTML, CSS, jQuery, and Bootstrap4, optimized code for SEO, and tracked traffic with Google Analytics. The website is responsive across mobile, tablet, and desktop.", 
    imgPath: "b"},
   
   {projectTitle: "StagePro Connect", 
    category: "node", 
    description: "Development of an internship management application for the Polytechnic School of Sousse, where students, supervisors, and the administration can register, manage, and process internships (PFA/PFE) for over 3000 students annually. Technologies used: Angular, JavaScript, CSS, Node.js, UI/UX design, Figma", 
    imgPath: "b"},
   ];


const Main = ()=> {

  const[currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myprojects);

    return (
     <main className='flex' id="projects">
  
        <section className='flex left-section '>
<button  onClick={()=>
  {
    setcurrentActive("all");
  } }
 className={currentActive === "all" ? "active" : null}>
   All projects</button>

<button onClick={()=>
  {
    setcurrentActive ("css");
const newArr = myprojects.filter((item) => {
  return  item.category === "css";

})
    setArr(newArr);

  }
}
className={currentActive === "css" ? "active" : null}>HTML & CSS</button>
<button onClick={()=>
  {
    setcurrentActive ("js");
const newArr = myprojects.filter((item) => {
  return  item.category === "js";

})
    setArr(newArr);

  }
}

className={currentActive === "js" ? "active" : null}
>Javascript</button>
<button onClick={()=>
  {
    setcurrentActive ("react");
const newArr = myprojects.filter((item) => {
  return  item.category === "react";

})
    setArr(newArr);

  }
}


className={currentActive === "react" ? "active" : null}
>React & MUI</button>
<button onClick={()=>
  {
    setcurrentActive ("node");
const newArr = myprojects.filter((item) => {
  return  item.category === "node";

})
    setArr(newArr);

  }
}

className={currentActive === "node" ? "active" : null}
>Node & Express</button>
        </section>

      
<section className='flex right-section '>

  
 {arr.map((item) => {
  return(
    <motion.article
     
   
     layout
     initial={{ transform: "scale(0)" }}
     animate={{ transform: "scale(1)" }}
     exit={{ transform: "scale(0)" }}
    
    key={item.imgPath} className=' card'>
    <img width={266} src="https://www.intelivita.com/wp-content/uploads/2023/10/Software-Development-Process.webp" alt="page2" />

    <div style={{width: "266px"}} className='box'>
      <h1 className='title'> {item.projectTitle}</h1>
      <p className='sub-title'>{item.category}     </p>
      <p className='sub-title'>{item.description}     </p>

      <div className='flex icons'>

        <div style={{gap: "11px"}} className='flex'>

      <div className="icon-link"></div>
      <div className="icon-github-square"></div>
      </div>

      <a className='link flex' href="">
        more 
        <span style={{alignSelf: "end"}} className='icon-long-arrow-right' ></span>
      </a>    
      </div>

    </div>

  </motion.article>
  );
  })}
   </section>
     </main>
    );
  }
export default Main;
