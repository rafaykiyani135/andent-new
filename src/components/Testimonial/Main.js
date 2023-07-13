import Top from './Top'
import Testimonial from '../Menhome/Testimonial'
import BeforeAfter from './BeforeAfter'
import Book from '../MenContact-Us/Make'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

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
            <div style={{height:"auto",width:"auto",zIndex:"1000",position:"absolute",padding:"50px"}}>
            <FloatingWhatsApp accountName="Andent"phoneNumber="+355 69 375 5065" darkMode="true" allowClickAway="true" allowEsc="true"/>
            </div>
        </div>
    )
}

export default Main;