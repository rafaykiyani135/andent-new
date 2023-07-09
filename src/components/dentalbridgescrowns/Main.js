import Slider from '../Slider/Main';
import Reviews from '../reviews/trustpilot';
import Importance from './importance';
import Work from './work'
import Experience from '../implants/Exp';
import StepsProc from './StepsTypes';
import Contact from '../implants/Contactsm';
import Appt from '../MenContact-Us/Make';

function Main (){
    return(
        <div>
            <Slider heading="Discover Dental Bridges & Crowns &" description="Say goodbye to the challenges of missing or damaged teeth.
             We restore your smile with our affordable and long lasting implants for improved oral health."/>
             <Reviews/>
            <Importance/>
            <Work/>
            <Experience/>
            <StepsProc/>
            <br/>
            <br/>
            <Contact/>
            <Appt/>
        </div>
    )
}

export default Main;