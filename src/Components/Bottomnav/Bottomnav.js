import React from 'react';
import './Bottomnav.css'
import {Link} from "react-router-dom";

const Bottomnav = () => {
   return (
     <div className='botnav'>
        <div className='botnavitems'>
            <div className='items'><Link to="../Homescreen" className="button" align="center"></Link></div>
        </div>
     </div>
   );
}

export default Bottomnav;