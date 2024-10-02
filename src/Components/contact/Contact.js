import React,{useRef} from 'react';
import './Contact.css';


import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ph0l30g', 'template_oj4f6t9', form.current, { publicKey: '1MVJ7QGL04x253Cc-',})
      .then(() => {
          console.log('SUCCESS!');
          },(error) => {
          console.log('FAILED...', error.text);
        },
      );
    };
  return (
   <section className='contactpage'>
    <div className='contact' id="contact">
    <h1 className='contactpage1'>Contact Me</h1>
    <span classname="contactdec">Please fill out the form below to contact me.</span>
    <form className="contactform" ref={form} onSubmit={sendEmail} action="">
    <input type="text" className='name'name='your_name' placeholder='Your Name' />
    <input type="email" className='email' name='your_email'placeholder='Your Email'></input>
    <textarea name='message'  cols='15' rows='10' placeholder='Your Message'></textarea>
    <button type="submit" className="submitbtn" value="send" >Submit</button>
    <div className="link">
    <img src="" alt="" className="link" />
    </div>

</form>
    </div>
   </section>
  )
}

export default Contact
