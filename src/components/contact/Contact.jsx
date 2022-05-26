import React from 'react'
import "./contact.css"
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();

    const [done, setDone] =useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_k8fv77u', 'template_tf1r5nd', form.current, 'FoflPNLDTlPeiWI6W')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span>Get in touch</span>
                <span>Contact me</span>
                <div className="blur blur1" style={{background: "#ABF1FF94"}}></div>
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' className='user' placeholder='Name'/>
                <input type="email" name='email' className='user' placeholder='Email'/>
                <textarea name='message' className='user' placeholder='Message'/>
                <input type="submit" name="submit" id="" value="send" className='button'/>
                <span>{done && "Thanks to contacting me!"}</span>
                <div className="blur c-blur1" style={{background: "var(--purple"}}></div>

            </form>
        </div>
    </div>
  )
}

export default Contact