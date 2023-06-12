import React from 'react'
import Make from '../MenContact-Us/Make'
import Bredcm from '../Menhome/breadcrumb'
import Map from '../MenContact-Us/Map'
import { FloatingWhatsApp } from 'react-floating-whatsapp-button'
import 'react-floating-whatsapp-button/dist/index.css'

function Main() {
  return (
    <>
         <Bredcm
            subtitle="Contact Us"
            title="Home"
            subtitledown="about-Us"
          />
        <Make/>
        <Map/>
        <div style={{height:"auto",width:"auto",zIndex:"1000",position:"absolute",padding:"50px"}}>
        <FloatingWhatsApp autoOpenTimeout="0" size="50px" phone="+355 69 375 5065" message='' popupMessage="Salve signore, come possiamo aiutarla" position='left'/>
        </div>
    </>
  )
}

export default Main