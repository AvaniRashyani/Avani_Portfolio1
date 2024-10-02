import React from 'react'
import './Skill.css';
import gr from '../../assets/webex.png';
import web1 from '../../assets/we2.png';
import html from '../../assets/html1.png';
import css from '../../assets/css1.png';
import js from '../../assets/js1.png';
import r from '../../assets/r1.png';

const Skill = () => {
  return (
   <section id="skill">
    <span className="skilltitle">WHAT I DO <br/></span>
    <span className='skilldesc'>I am a skilled and Expert in building dynamic applications with React and enhancing performance through modern development practices.Creating responsive and user-friendly websites using HTML, CSS, and JavaScript.</span>
        <div className='skillbars'>
            <div className='skillbar'>
                <img src={web1} alt="webdeveloper" className="skillbarimg" />
              <div className='skillbartext'>
                <h2 className='h'>Web Development</h2>
                <p> Passionate web developer with expertise in building responsive and user-friendly websites. I specialize in front-end technologies and have a strong focus on performance and accessibility.</p>
              </div>
            </div>
            <div className='skillbar'>
                <img src={gr} alt="grapics" className="skillbarimg" />
              <div className='skillbartext'>
                <h2 className='h'>Graphic Design</h2>
                <p>I Provide grapics Design service using figma and photoshope.</p>
              </div>
            </div>
        </div>
    
   </section>
  )
}

export default Skill;
