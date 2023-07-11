import Slider from '../Slider/Main'
import Review from '../reviews/trustpilot'
import BenefitsnSteps from './BenefitsnSteps'
import Exp from '../implants/Exp'
import Info from './Info'
import Contactus from './Contactus'
import Book from '../MenContact-Us/Make'

function Main (){
    return (
        <div>
            <Slider heading="Discover Premium Dental Veneers and" description="We are devoted to
            delivering remarkable results for all of our orthodontic treatments. Take the first
            step towards your dream smile with our personalized care"/>
            <Review/>
            <BenefitsnSteps/>
            <Exp/>
            <Info/>
            <Contactus/>
            <Book/>
        </div>
    )
}

export default Main;