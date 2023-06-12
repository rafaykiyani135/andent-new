import React from 'react'
import Bredcm from '../Menhome/breadcrumb'
import About from '../Menabout/About'
import Appointment from '../Menhome/Appointment'
import Ourdr from '../Menhome/Ourdr'
import Faq from '../Menhome/Faqsection'
import Blog from '../Menhome/Blog'
import { FloatingWhatsApp } from 'react-floating-whatsapp-button'
import 'react-floating-whatsapp-button/dist/index.css'


function Main() {
  return (
    <>

      <Bredcm
         subtitle="About Us"
         title="Home"
         subtitledown="About Us"
       />
      <About/>
      <Appointment/>
      <Ourdr/>
      <Faq/>
      <Blog/>
      <div style={{height:"auto",width:"auto",zIndex:"1000",position:"absolute",padding:"50px"}}>
      <FloatingWhatsApp autoOpenTimeout="0" size="50px" phone="+355 69 375 5065" message='' popupMessage="Salve signore, come possiamo aiutarla" position='left'/>
      </div>
    </>
  )
}

export default Main