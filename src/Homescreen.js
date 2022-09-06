import './App.css';
import Homescreenpic from './Components/Homescreenpic.js';
import itemcomponents from './Components/itemcomponents';
import Buyitems from "./Components/Buyitems/Buyitems";
import Bottomnav from './Components/Bottomnav/Bottomnav';

const Homescreen = () => {
    return (
       <div className='app'>
        <div>
            <Homescreenpic />
            </div>
            <div>
                <Buyitems />
            </div>
            <div>
                <Bottomnav />
            </div>
        
       </div>
    );
}

export default Homescreen;