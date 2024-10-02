import React from 'react';
import photos from '../../assets/p4.png';

import {Link} from 'react-scroll';
import './Intro1.css';

const Intro1 = () => {
  return (
    <div>

        <section className='intro' id='intro'>
            <div className='introcontent'>
             
                <span className='hello'>Hello,</span><br/>
                <span className="introtext">I'm <span className='introname'>Avani</span><br/>Website Developer</span>
                <p className="intropara">As a passionate web developer, 
                  I thrive on transforming innovative ideas into engaging digital experiences.
                   With a strong foundation in HTML, CSS,JavaScript and React, I specialize in creating responsive and user-friendly websites that not only meet client needs but also provide seamless functionality across devices. 
                  </p>
                
                <Link><br/><button className="btn" onClick={()=>{
      document.getElementById('contact').scrollIntoView({behavior:'smooth'});
    }}>Hire Me</button></Link>
            </div>
            <br/>

           
        </section>

      
    </div>
  )
}

export default Intro1
