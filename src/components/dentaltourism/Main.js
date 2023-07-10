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
import { FloatingWhatsApp } from 'react-floating-whatsapp';


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
            <div style={{height:"auto",width:"auto",zIndex:"1000",position:"absolute",padding:"50px"}}>
            <FloatingWhatsApp accountName="Andent"phoneNumber="+355 69 375 5065" darkMode="true" allowClickAway="true" allowEsc="true"/>
            </div>
        </div>
    )
}

export default Main;