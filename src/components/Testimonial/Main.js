import Top from './Top'
import Testimonials from './Testimonials'
import BeforeAfter from './BeforeAfter'
import Book from '../MenContact-Us/Make'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { useEffect } from 'react'


function Main (){



    useEffect(() => {
        window.analytics.page('Testimonials');
      },[]);

      

      const getMessage = (e) => {
        window.analytics.track("WhatsApp", {
          message : e.target[0].value
        });
      }

    return(
        <div>
            <Top/>
            <Testimonials/>
            <BeforeAfter/>
            <Book/>
            <div style={{height:"auto",width:"auto",zIndex:"1000",position:"absolute",padding:"50px"}}>
            <FloatingWhatsApp accountName="Andent"phoneNumber="+355 69 375 5065" darkMode="true"  chatboxHeight={450} allowClickAway="true" allowEsc="true" onSubmit={getMessage} buttonStyle={{height:"70px",width:"70px"}}/>
            </div>
        </div>
    )
}

export default Main;