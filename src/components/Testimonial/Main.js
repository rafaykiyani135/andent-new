import Top from './Top'
import Testimonial from '../Menhome/Testimonial'
import BeforeAfter from './BeforeAfter'
import Book from '../MenContact-Us/Make'

function Main (){
    return(
        <div>
            <Top/>
            <div className='container'>
            <div className='row justify-content-center text-center'>
                <div className='col-lg-8 col-md-12'>
                    <h3 className='size-60 theme-dark' style={{fontWeight:"700"}}> 
                        Testimonials
                    </h3>
                </div>
            </div>
            </div>
            <Testimonial/>
            <Testimonial/>
            <BeforeAfter/>
            <Book/>
        </div>
    )
}

export default Main;