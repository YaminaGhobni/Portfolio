import React from 'react'
import './contact.css';
import { useForm, ValidationError } from '@formspree/react';
import Lottie from 'lottie-react';
import doneAnimation from '../../annimation/done.json';
import contactAnimation from '../../annimation/contact.json'; 
const Contact = () =>{
  const [state, handleSubmit] = useForm("mldedngk");

    return (
      <section id="contact" className='contact-us'>
        <h1 className='title'>
          <span className='icon-email'></span>
          Contact us
        </h1>
        <p className='sub-title'>
        Let's work together to turn your ideas into reality! Whether you're looking for a full-stack developer to build a robust web application, or need design expertise to create engaging, user-centered digital experiences, I'm here to help. I’m always excited to collaborate on innovative projects that make an impact. Feel free to reach out, and let’s discuss how we can bring your vision to life.
        </p>
        <div className="flex" style={{justifyContent: "space-between"}}>
          <form className='' action="" onSubmit={handleSubmit} >

            <div className='flex'>
            <label htmlFor="email">Email Adress :</label>
            <input au type="email" name="email" id="email" required />
            <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
            </div>
            <div className='flex' style={{marginTop: "24px"}}>
            <label htmlFor="message">Your message</label>
            <textarea name="message" id="message" required></textarea>
            <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
            </div>
            <button className='submit' disabled={state.submitting}>Submit</button>

         {state.succeeded && (


            <p className='flex' style={{fontSize: "18px", marginTop: "1.7rem"}}>
              <Lottie loop={false} style={{height: 37, marginBottom: "1.5rem"}} animationData={doneAnimation}/>
              Your message has been sent successfuly !
              </p>
 
         )}
          </form>
          <div className="animation">
          <Lottie 
          loop={false} 
          style={{height: 380, width: 450,  marginBottom: "1.5rem", marginRight: "50px"}} 
          animationData={contactAnimation}/>
         
              
          </div>
        </div>
      </section>
    )
  }
export default Contact;

