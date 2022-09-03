import React from 'react';
import test from '../images/ecommerce2.jpg'

const itemcomponents = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className='moviecont'>
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={test} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
    </div>
  );
}

export default itemcomponents;