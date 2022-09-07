import React from "react";
import test from '.../images/headphones.jpg'
import './Itemcomponents.css'

const Itemscomponent = () => {
    return (
        <div className="movie" key={imdbID}>
          <div>
            <p>2018</p>
          </div>
    
          <div>
            <img src={test} alt={Title} />
          </div>
    
          <div>
            <span>45</span>
            <h3>phone</h3>
          </div>
        </div>
      );
}

export default Itemscomponent;