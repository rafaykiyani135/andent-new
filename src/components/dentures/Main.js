import Slider from '../Slider/Main'
import Review from '../reviews/trustpilot';
import Work from './Work'
import Types from './Types'
import Exp from '../implants/Exp'
import Steps from './Steps'
import Contact from '../implants/Contactsm'
import Book from '../MenContact-Us/Make'
import { FloatingWhatsApp } from 'react-floating-whatsapp';

function Main (){
    return (
        <div>
            <Slider heading="Discover Premium Dentures" description="We are dedicated to providing you with carefully
            crafted dentures to fit your mouth and replicate the appearance of natural teeth. Take the first step towards
            your dream smile with our personalized care"/>
            <Review/>
            <Work/>
            <Types/>
            <br/>
            <br/>
            <Exp/>
            <Steps/>
            <Contact/>
            <Book/>
            <div style={{height:"auto",width:"auto",zIndex:"1000",position:"absolute",padding:"50px"}}>
            <FloatingWhatsApp accountName="Andent"phoneNumber="+355 69 375 5065" darkMode="true" allowClickAway="true" allowEsc="true"/>
            </div>
        </div>
    )
}

export default Main;