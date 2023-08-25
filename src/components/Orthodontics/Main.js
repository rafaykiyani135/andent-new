import Welcome from '../Slider/Main';
import Review from '../reviews/trustpilot';
import Types from './Types'
import Benefitsnworks from './BenefitsnWorks'
import Exp from '../implants/Exp'
import Steps from './Steps'
import Contact from '../implants/Contactsm'
import Book from '../MenContact-Us/Make';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Main (){

  const {t}=useTranslation();

  useEffect(() => {
    window.analytics.page('Orthodontics');
  },[]);

      const getMessage = (e) => {
        window.analytics.track("WhatsApp", {
          message : e.target[0].value
        });
      }

    return(
        <div>
            <Welcome heading={t("orthheroh")} description={t("orthherop")}/>
            <Review/>
            <Types/>
            <Benefitsnworks/>
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