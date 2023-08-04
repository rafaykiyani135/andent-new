import React from 'react'
import Slider from '../Slider/Main'
import Ourservish from '../Menhome/Ourservices'
import OurDr from '../Menhome/Ourdr'
import Tourism from '../Menhome/tourism'
import Testimonial from '../Menhome/Testimonial'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Appointment from '../MenContact-Us/Make'
import Review from '../reviews/trustpilot'
import { useEffect } from 'react'


function Main() {

  useEffect(() => {
    window.analytics.page('Home');
  });

  const getMessage = (e) => {
    window.analytics.track("WhatsApp", {
      message : e.target[0].value
    });
  }

  return (
    <>
      <Slider heading="Discover Premium Dental Treatments" description="We are devoted to delivering remarkable results for all of our orthodontic treatments.
                            Take the first step towards your dream smile with our personalized care"/>
      <Review/>
      <Ourservish/>
      <OurDr/>
      <div className='move-up2'>
      <Tourism/>
      </div>
      <Testimonial/>
      <Appointment/>
      <div style={{height:"auto",width:"auto",zIndex:"1000",position:"absolute",padding:"50px"}}>
      <FloatingWhatsApp accountName="Andent"phoneNumber="+355 69 375 5065" darkMode="true" allowClickAway="true" allowEsc="true" onSubmit={getMessage}/>
      </div>
    </>
     
  )
}

export default Main