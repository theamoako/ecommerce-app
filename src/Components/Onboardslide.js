import React from "react";
import '../App.css';
import background from '../images/headphones1.jpg';
import Homescreen from "../Homescreen";
import {Link} from "react-router-dom";

const Onboardslide = () => {
    return (

        <div className="onboardscreen" >
     <div className="onboard" >
        <img src={background} alt="onboardsceenpic" className="pic"/> 
      <div className="items" align="center">
         <div className="header" align="center">
         <div className="head1"><h1 className="head">E-FOUNTAIN</h1></div>
          <div className="slogan">Place to buy and sell</div>
         </div>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <div className="buttoncontainer" align="center">
            <Link to="../Homescreen" className="button" align="center">Home</Link>
         </div>
      </div>
     </div>
     </div>

    );
}

export default Onboardslide;