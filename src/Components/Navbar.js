import React, { useState } from 'react';
import './Navbar.css';
import webdev2 from './../assets/webdev2.png';
import menu from './../assets/m3.png';
import {Link} from 'react-scroll';
const Navbar = () => {
const[showmenu,setshowmenu]=useState(false);

  return (
   <nav className="navbar">
    <img id="logo1" src={webdev2} alt="logo"></img>
    <div className='desktopmenu'>
     <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className="dekstopmenuelistitem">HOME</Link>
     <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-50} duration={500} className="dekstopmenuelistitem">ABOUT</Link>
     <Link activeClass='active' to='skills1' spy={true} smooth={true} offset={-50} duration={500} className="dekstopmenuelistitem">SKILLS</Link>
     <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="dekstopmenuelistitem">CONTACT</Link>
     
    </div>
    <button className="desktopmenuebtn" onClick={()=>{
      document.getElementById('contact').scrollIntoView({behavior:'smooth'});
    }}>
    <img src="" alt="" className="desktopmenueimg" /> CONTACT ME</button>
   

    <img id="menu" src={menu} alt="logo" className='mobmenu' onClick={()=>setshowmenu(!showmenu)}></img>
    <div className='navmenu'style={{display : showmenu? 'flex' : 'none'}}>
     <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className="listitem" onClick={()=>setshowmenu(false)}>HOME</Link>
     <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-50} duration={500} className="listitem" onClick={()=>setshowmenu(false)}>ABOUT</Link>
     <Link activeClass='active' to='skills1' spy={true} smooth={true} offset={-50} duration={500} className="listitem" onClick={()=>setshowmenu(false)}>SKILLS</Link>
     <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listitem" onClick={()=>setshowmenu(false)}>CONTACT</Link>
     
    </div>
   </nav>
  )
}

export default Navbar;
