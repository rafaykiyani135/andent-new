import Slider from '../Slider/Main'
import Review from '../reviews/trustpilot';
import Work from './Work'
import Types from './Types'
import Exp from '../implants/Exp'
import Steps from './Steps'
import Contact from '../implants/Contactsm'
import Book from '../MenContact-Us/Make'

function Main (){
    return (
        <div>
            <Slider heading="Discover Premium Dentures and " description="We are dedicated to providing you with carefully
            crafted dentures to fit your mouth and replicate the appearance of natural teeth. Take the first step towards
            your dream smile with our personalized care"/>
            <Review/>
            <Work/>
            <Types/>
            <Exp/>
            <Steps/>
            <Contact/>
            <Book/>
        </div>
    )
}

export default Main;