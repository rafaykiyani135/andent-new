import Slider from '../Slider/Main'
import Review from '../reviews/trustpilot';
import Work from './Work'
import Types from './Types'
import Exp from '../implants/Exp'
import Steps from './Steps'
import Contact from '../implants/Contactsm'
import Book from '../MenContact-Us/Make'
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Main (){


    useEffect(() => {
        window.analytics.page('Dentures');
      },[]);

      const {t}=useTranslation();

      const getMessage = (e) => {
        window.analytics.track("WhatsApp", {
          message : e.target[0].value
        });
      }

    return (
        <div>
            <Slider heading={t("denturesheroh")} description={t("denturesherop")}/>
            <Review/>
            <Work/>
            <Types/>
            <br/>
            <br/>
            <Exp/>
            <Steps/>
            <Contact/>
            <Book/>
            <div style={{height:"auto",width:"auto",zIndex:"1000",position:"absolute",padding:"50px"}}>
            <FloatingWhatsApp accountName="Andent"phoneNumber="+355 69 375 5065" darkMode="true"  chatboxHeight={450} allowClickAway="true" allowEsc="true" onSubmit={getMessage} buttonStyle={{height:"70px",width:"70px"}}/>
            </div>
        </div>
    )
}

export default Main;