import './App.css';
import Homescreenpic from './Components/Homescreenpic.js';
import itemcomponents from './Components/itemcomponents';
import Buyitems from "./Components/Buyitems.js";

const Homescreen = () => {
    return (
       <div className='app'>
        <div>
            <Homescreenpic />
            </div>
            <Buyitems />
        
       </div>
    );
}

export default Homescreen;