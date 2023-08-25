import React from 'react'
import Make from '../MenContact-Us/Make'
import Map from '../MenContact-Us/Map'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import 'react-floating-whatsapp-button/dist/index.css'
import { useEffect } from 'react'

function Main() {

  useEffect(() => {
    window.analytics.page('ContactUs');
  });

  const getMessage = (e) => {
    window.analytics.track("WhatsApp", {
      message : e.target[0].value
    });
  }

  return (
    <>
        <Make/>
        <Map/>
        <div style={{height:"auto",width:"auto",zIndex:"1000",position:"absolute",padding:"50px"}}>
      <FloatingWhatsApp accountName="Andent"phoneNumber="+355 69 375 5065" darkMode="true"  chatboxHeight={450} allowClickAway="true" allowEsc="true" onSubmit={getMessage} buttonStyle={{height:"70px",width:"70px"}}/>
      </div>
    </>
  )
}

export default Main