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
import { useTranslation } from 'react-i18next'


function Main() {
  const {t,i18n}=useTranslation();

  useEffect(() => {
    var referrer = document.referrer;
    window.analytics.page('Home',{
        referrer: referrer, // Pass the referrer URL here
    });
  },[]);
  
  useEffect(() => {
    const lng= navigator.language;
    i18n.changeLanguage(lng)
  },[i18n]);

  const getMessage = (e) => {
    window.analytics.track("WhatsApp", {
      message : e.target[0].value
    });
  }

  return (
    <>
      <Slider heading={t('homehero')} description={t("homeherop")} span={true} quality={t("homeheroh2")} and={t("homehero2")} comfort={t("homeheroh22")} />
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