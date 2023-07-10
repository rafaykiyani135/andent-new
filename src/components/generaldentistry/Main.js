import Slider from '../Slider/Main';
import Review from '../reviews/trustpilot';
import Content from './Content'
import ContactUs from '../implants/Contactsm';
import Appt from '../MenContact-Us/Make';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

function Main (){
    return(
        <div>
            <Slider heading="Discover Premium Dentistry Services &" description="Say goodbye to the challenges of missing or damaged teeth. We
             restore your smile with our affordable and long lasting implants for improved oral health."/>
            <Review/>
            <Content/>
            <ContactUs/>
            <Appt/>
            <div style={{height:"auto",width:"auto",zIndex:"1000",position:"absolute",padding:"50px"}}>
            <FloatingWhatsApp accountName="Andent"phoneNumber="+355 69 375 5065" darkMode="true" allowClickAway="true" allowEsc="true"/>
            </div>
        </div>
    );
}

export default Main;