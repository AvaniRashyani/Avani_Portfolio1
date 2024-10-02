import React from 'react';
import './Photosex.css';
import ph from '../../assets/photos1.png';

const Photosex = () => {
  return (
    <div className='ex'>
        <img src={ph} alt='my photo' className='myph'></img>
      </div>
  )
}

export default Photosex
