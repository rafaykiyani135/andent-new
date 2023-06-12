import React from 'react'
import Slider from '../Slider/Main'
import Ourservish from '../Menhome/Ourservices'
import Book from '../Menhome/Booking'
import Testimo from '../Menhome/Testimonialslider'
import Faq from '../Menhome/Faqsection'
import OurDr from '../Menhome/Ourdr'
import Appointment from '../Menhome/Appointment'
import Blog from '../Menhome/Blog'
import { FloatingWhatsApp } from 'react-floating-whatsapp-button'
import 'react-floating-whatsapp-button/dist/index.css'

function Main() {
  return (
    <>
    
      <Slider/>
      <Ourservish/>
      <Book/>
      <Testimo/>
      <Faq/>
      <OurDr/>
      <Appointment/>
      <Blog/>
      <div style={{height:"auto",width:"auto",zIndex:"1000",position:"absolute",padding:"50px"}}>
      <FloatingWhatsApp autoOpenTimeout="0" size="50px" phone="+355 69 375 5065" message='' popupMessage="Salve signore, come possiamo aiutarla" position='left'/>
      </div>
      </>
     
  )
}

export default Main