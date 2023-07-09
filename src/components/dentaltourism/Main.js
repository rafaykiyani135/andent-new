import Top from './Top'
import Review from '../reviews/trustpilot';
import Benefits from './Benefits'
import Gif from './Gif'
import Tourism from './TourismSm'
import Exp from '../implants/Exp';
import Treatment from './Treatments';
import Safety from './Safety'
import Contact from '../implants/Contactsm'
import Appt from '../MenContact-Us/Make'


function Main (){
    return (
        <div>
            <Top/>
            <br/>
            <br/>
            <Review/>
            <Benefits/>
            <Tourism/>
            <Gif/>
            <br/>
            <br/>
            <Exp/>
            <Treatment/>
            <Safety/>
            <Contact/>
            <Appt/>
        </div>
    )
}

export default Main;