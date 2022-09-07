import './App.css';
import Homescreenpic from './Components/Homescreenpic.js';
import Itemscomponent from './Itemcomponents';
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
                <Itemscomponent />
            </div>
            <div>
                <Bottomnav />
            </div>
        
       </div>
    );
}

export default Homescreen;