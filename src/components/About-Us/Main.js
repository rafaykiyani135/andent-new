import React from 'react'
import About from '../Menabout/About'
import 'react-floating-whatsapp-button/dist/index.css'
import Review from '../reviews/trustpilot'
import Treatments from './Treatments'
import Testimonial from './Testimonial'
import Team from '../Menhome/Ourdr'
import Vid from './Vid'
import Tourism from '../Menhome/tourism'
import Contact from '../implants/Contactsm'
import Book from './Bookwmap'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

function Main() {
  return (
    <>
      <About/>
      <Review/>
      <Treatments/>
      <Testimonial/>
      <Team/>
      <Vid/>
      <Tourism/>
      <Contact/>
      <Book/>
      <div style={{height:"auto",width:"auto",zIndex:"1000",position:"absolute",padding:"50px"}}>
      <FloatingWhatsApp accountName="Andent"phoneNumber="+355 69 375 5065" darkMode="true" allowClickAway="true" allowEsc="true"/>
      </div>
    </>
  )
}

export default Main