import React from 'react'
import Slider from '../Slider/Main'
import Ourservish from '../Menhome/Ourservices'
import Book from '../Menhome/Booking'
import Testimo from '../Menhome/Testimonialslider'
import Faq from '../Menhome/Faqsection'
import OurDr from '../Menhome/Ourdr'
import Appointment from '../Menhome/Appointment'
import Blog from '../Menhome/Blog'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
//import 'react-floating-whatsapp-button/dist/index.css'
import Review from '../reviews/trustpilot'

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
      <FloatingWhatsApp accountName="Andent"phoneNumber="+355 69 375 5065" darkMode="true" allowClickAway="true" allowEsc="true"/>
      </div>
      <Review/>
    </>
     
  )
}

export default Main