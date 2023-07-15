import Slider from '../Slider/Main'
import Review from '../reviews/trustpilot'
import BenefitsnSteps from './BenefitsnSteps'
import Exp from '../implants/Exp'
import Info from './Info'
import Contactus from './Contactus'
import Book from '../MenContact-Us/Make'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

function Main (){
    return (
        <div>
            <Slider heading="Discover Premium Dental Veneers" description="We are devoted to
            delivering remarkable results for all of our orthodontic treatments. Take the first
            step towards your dream smile with our personalized care"/>
            <Review/>
            <BenefitsnSteps/>
            <Exp/>
            <Info/>
            <Contactus/>
            <Book/>
            <div style={{height:"auto",width:"auto",zIndex:"1000",position:"absolute",padding:"50px"}}>
            <FloatingWhatsApp accountName="Andent"phoneNumber="+355 69 375 5065" darkMode="true" allowClickAway="true" allowEsc="true"/>
            </div>
        </div>
    )
}

export default Main;