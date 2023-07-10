import Welcome from '../Slider/Main';
import Review from '../reviews/trustpilot';
import Types from './Types'
import Benefitsnworks from './BenefitsnWorks'
import Exp from '../implants/Exp'
import Steps from './Steps'
import Contact from '../implants/Contactsm'
import Book from '../MenContact-Us/Make';

function Main (){
    return(
        <div>
            <Welcome heading="Discover Premium Orthodontic Treatments &" description="We are devoted to delivering
             remarkable results for all of our orthodontic treatments. Take the first step towards your dream smile
              with our personalized care"/>
            <Review/>
            <Types/>
            <Benefitsnworks/>
            <Exp/>
            <Steps/>
            <Contact/>
            <Book/>
        </div>

    )
}


export default Main;