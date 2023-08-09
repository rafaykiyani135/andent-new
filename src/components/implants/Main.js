import Intro from '../Slider/Main';
import Reviews from '../reviews/trustpilot';
import Benefits from './Benefits';
import Work from './Work';
import Exp from './Exp';
import Content from './StepsTypes';
import Contact from './Contactsm';
import Apt from '../MenContact-Us/Make';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';


function Main (){

  const {t,i18n}=useTranslation();

  
  useEffect(() => {
    window.analytics.page('Dental-implants');
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
            <Intro heading={t("implantshero")} description={t("implantsherop")} span={false}/>
             <Reviews/>
             <Benefits/>
             <Work/>
             <Exp/>
             <Content/>
             <br/>
             <br/>
             <Contact/>
             <br/>
             <Apt/>
             <div style={{height:"auto",width:"auto",zIndex:"1000",position:"absolute",padding:"50px"}}>
             <FloatingWhatsApp accountName="Andent"phoneNumber="+355 69 375 5065" darkMode="true" allowClickAway="true" allowEsc="true" onSubmit={getMessage}/>
             </div>
        </div>


    );
}

export default Main;