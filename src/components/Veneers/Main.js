import Slider from '../Slider/Main'
import Review from '../reviews/trustpilot'
import BenefitsnSteps from './BenefitsnSteps'
import Exp from '../implants/Exp'
import Info from './Info'
import Contactus from './Contactus'
import Book from '../MenContact-Us/Make'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function Main (){

    useEffect(() => {
        window.analytics.page('Veneers');
      },[]);

      const {t}=useTranslation();

      const getMessage = (e) => {
        window.analytics.track("WhatsApp", {
          message : e.target[0].value
        });
      }

    return (
        <div>
            <Slider heading={t("veneersheroh")} description={t("veneersherop")}/>
            <Review/>
            <BenefitsnSteps/>
            <Exp/>
            <Info/>
            <Contactus/>
            <Book/>
            <div style={{height:"auto",width:"auto",zIndex:"1000",position:"absolute",padding:"50px"}}>
            <FloatingWhatsApp accountName="Andent"phoneNumber="+355 69 375 5065" darkMode="true" allowClickAway="true" allowEsc="true" onSubmit={getMessage}/>
            </div>
        </div>
    )
}

export default Main;