import AdmitCard from './Components/AdmitCard.js';
import Certificate from './Components/Certificate.js';
import Courses from './Components/Courses.js';
import Home from './Components/Home.js';
import Help from './Components/Help.js';
import IdCard from './Components/IdCard.js';
import Library from './Components/Library.js';
import OfferLetter from './Components/OfferLetter.js';
import QuickActions from './Components/QuickActions.js';
import Reports from './Components/Reports.js';
import Students from './Components/Students.js';

function App(navLink) {
    console.log(navLink)
    return (
        `  <div class="container">
          <h1> Welcome to  ${navLink} page </h1> 
          <h2>Working On..</h2>
        </div>`
    );
}

export default App;