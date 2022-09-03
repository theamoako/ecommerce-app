import React from "react";
import '../App.css';
import background from '../images/IMG_4946.JPG';

const Homescreenpic = () => {
    return (
        <div className="onboardscreen" >
        <div className="onboard1" >
           <img src={background} alt="onboardsceenpic" className="pic2"/> 
         <div className="items" align="center">
            <div className="header" align="center">
            <div className="head2"><h1 className="head">E-FOUNTAIN</h1></div>
             <div className="sloga2">Place to buy and sell</div>
            </div>   
         </div>
        </div>
        <div className="items2">
            <h1>div</h1>
        </div>
        </div>
    );
}

export default Homescreenpic;