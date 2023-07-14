import Top from './Top'
import Testimonials from './Testimonials'
import BeforeAfter from './BeforeAfter'
import Book from '../MenContact-Us/Make'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

function Main (){
    return(
        <div>
            <Top/>
            <Testimonials/>
            <BeforeAfter/>
            <Book/>
            <div style={{height:"auto",width:"auto",zIndex:"1000",position:"absolute",padding:"50px"}}>
            <FloatingWhatsApp accountName="Andent"phoneNumber="+355 69 375 5065" darkMode="true" allowClickAway="true" allowEsc="true"/>
            </div>
        </div>
    )
}

export default Main;