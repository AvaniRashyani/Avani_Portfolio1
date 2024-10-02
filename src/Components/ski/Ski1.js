import React from 'react';
import css from '../../assets/css1.png';
import html from '../../assets/html1.png';
import js from '../../assets/js1.png';
import r from '../../assets/r1.png';
import java from '../../assets/java.png';
import sql from '../../assets/sql1.png';
import mongodb from '../../assets/Mongo.png';
import bootstrap from '../../assets/Bootstrap.png';
import './Ski1.css';



const Ski1 = () => {
  return (
    <div>
       <section id="skills1">
        <h2 className='skititle'>SKILLS</h2>
        <span className='skidesc'> I am a front-end developer with a passion for crafting seamless and engaging user experiences. Skilled in HTML, CSS, and JavaScript, I utilize frameworks like React and Vue.js to build dynamic and responsive web applications. I focus on performance optimization, accessibility, and cross-browser compatibility, ensuring that my projects not only look great but also function flawlessly. With a strong foundation in design principles and a commitment to clean, maintainable code, I strive to create user-centric solutions that meet both client and user needs.</span>
        <div className='skiimg'>
          <img src={html} alt="" className="skiimgs" />
          <img src={css} alt="" className="skiimgs" />
          <img src={bootstrap} alt="" className="skiimgs" />
          <img src={js} alt="" className="skiimgs" />
          <img src={r} alt="" className="skiimgs" />
          <img src={mongodb} alt="" className="skiimgs" />

          <img src={java} alt="" className="skiimgs" />
          <img src={sql} alt="" className="skiimgs" />

        </div>
       </section>
      
    </div>
  )
}

export default Ski1
