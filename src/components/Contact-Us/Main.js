import React from 'react'
import Make from '../MenContact-Us/Make'
import Map from '../MenContact-Us/Map'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import 'react-floating-whatsapp-button/dist/index.css'

function Main() {
  return (
    <>

        <Make/>
        <Map/>
        <div style={{height:"auto",width:"auto",zIndex:"1000",position:"absolute",padding:"50px"}}>
        <FloatingWhatsApp accountName="Andent"phoneNumber="+355 69 375 5065" darkMode="true" allowClickAway="true" allowEsc="true"/>
        </div>
    </>
  )
}

export default Main