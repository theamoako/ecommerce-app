import React from "react";
import background from './images/shoe.jpg';
import './Itemcomponent.css';

const Itemscomponent = () => {
    return (
        <div className="movie">
          <div>
            <p>2018</p>
          </div>
    
          <div>
            <img src={background} alt='test' />
          </div>
    
          <div>
            <span>nike</span>
            <h3>Airmax</h3>
          </div>
        </div>
      );
}

export default Itemscomponent;