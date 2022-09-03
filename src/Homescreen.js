import './App.css';
import Homescreenpic from './Components/Homescreenpic.js';
import itemcomponents from './Components/itemcomponents';

const Homescreen = () => {
    return (
       <div className='app'>
        <div>
            <Homescreenpic />
            </div>
            <itemcomponents />
        
       </div>
    );
}

export default Homescreen;