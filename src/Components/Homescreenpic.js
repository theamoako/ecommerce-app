import React from 'react';
import background from '../images/shoe.jpg';
import '../App.css'
import Navbar from './Navbar/Navbar';

const Homescreenpic = () => {
  return (
    <div className='app'>
     <Navbar />
      <div className='picdiv'>
      <img src={background} alt='picture' className='pic2'/>
      <div className="items" align="center">
         <div className="header" align="center">
         <div className="head3"><h1 className="head">E-FOUNTAIN</h1></div>
         </div>   
      </div>
      </div>
      <div>
      
      </div>
    </div>
  );
}

export default Homescreenpic