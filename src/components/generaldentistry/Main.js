import Slider from '../Slider/Main';
import Review from '../reviews/trustpilot';
import Content from './Content'
import ContactUs from '../implants/Contactsm';
import Appt from '../MenContact-Us/Make';

function Main (){
    return(
        <div>
            <Slider heading="Discover Premium Dentistry Services &" description="Say goodbye to the challenges of missing or damaged teeth. We
             restore your smile with our affordable and long lasting implants for improved oral health."/>
            <Review/>
            <Content/>
            <ContactUs/>
            <Appt/>
        </div>
    );
}

export default Main;