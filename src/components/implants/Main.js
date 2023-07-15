import Intro from '../Slider/Main';
import Reviews from '../reviews/trustpilot';
import Benefits from './Benefits';
import Work from './Work';
import Exp from './Exp';
import Content from './StepsTypes';
import Contact from './Contactsm';
import Apt from '../MenContact-Us/Make';
import { FloatingWhatsApp } from 'react-floating-whatsapp';


function Main (){
    return(
        <div>
            <Intro heading="Discover Exceptional Dental Implants" description="Say goodbye to the challenges
             of missing or damaged teeth. We restore your
             smile with our affordable and long lasting implants for improved oral health."/>

             <Reviews/>
             <Benefits/>
             <Work/>
             <Exp/>
             <Content/>
             <br/>
             <br/>
             <Contact/>
             <br/>
             <Apt/>
             <div style={{height:"auto",width:"auto",zIndex:"1000",position:"absolute",padding:"50px"}}>
             <FloatingWhatsApp accountName="Andent"phoneNumber="+355 69 375 5065" darkMode="true" allowClickAway="true" allowEsc="true"/>
             </div>
        </div>


    );
}

export default Main;