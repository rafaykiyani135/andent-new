import Slider from '../Slider/Main';
import Reviews from '../reviews/trustpilot';
import Importance from './importance';
import Work from './work'
import Experience from '../implants/Exp';
import StepsProc from './StepsTypes';
import Contact from '../implants/Contactsm';
import Appt from '../MenContact-Us/Make';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Main (){

    const {t,i18n}=useTranslation();


    useEffect(() => {
        window.analytics.page('Dental-bridges');
      },[]);

      useEffect(() => {
        const lng= navigator.language;
        i18n.changeLanguage(lng)
      });
    

      const getMessage = (e) => {
        window.analytics.track("WhatsApp", {
          message : e.target[0].value
        });
      }

    return(
        <div>
            <Slider heading={t("bridgeshero")} description={t("bridgesherop")}/>
             <Reviews/>
            <Importance/>
            <Work/>
            <Experience/>
            <StepsProc/>
            <br/>
            <br/>
            <Contact/>
            <Appt/>
            <div style={{height:"auto",width:"auto",zIndex:"1000",position:"absolute",padding:"50px"}}>
            <FloatingWhatsApp accountName="Andent"phoneNumber="+355 69 375 5065" darkMode="true" allowClickAway="true" allowEsc="true" onSubmit={getMessage}/>
            </div>
        </div>
    )
}

export default Main;