import React from 'react'
import Callmenone from '../../assets/andent-data/contactgirl.png'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function Main() {

    const {t,i18n}=useTranslation();
    const [transform, setTransform] = useState("translate(-2px,-10px)");

    useEffect(() => {
        //"translate(-5px,-5px)"
          const lng= i18n.language
    
          if (lng==='it') {
            setTransform("translate(-2px,-8px)");
          }
          
          else if (lng==='sq') {
            setTransform("translate(-15px,-8px)");
          }
    
           else {
            setTransform("translate(-2px,-10px)");
          }
      },[i18n,setTransform]);
    

    const scrollToBottom = () => {
        window.scrollTo({
          top: document.documentElement.scrollHeight - window.innerHeight - 500,
          behavior: 'smooth',
        });
        window.analytics.track("Link clicked", {
            buttonText: "Learn More",
            link: "Scrolled To Bottom",
            clickedOnPage: window.location.pathname
          });
      };

  return (
    <>
        <div className='contactsm-upperpad'>
            <div className="container contact-dim" style={{backgroundColor:"#A7CCC8",borderRadius:"20px"}}>
                <div className="row align-items-center">
                <div className="col-lg-5 col-md-12 col-sm-12 pad-20-sm">
                    <div className="single-counter-img fadeInUp animated text-center" data-animation="fadeInDown animated" data-delay=".2s" >
                    <img src={Callmenone} alt="img" className="img contact-lg" style={{height:"504px",width:"378px",borderRadius:"10px"}}/>
                    </div>
                </div>
                <div className="col-lg-7 col-md-12 col-sm-12 d-flex align-items-start justify-content-start text-center text-lg-start">
                    <div className='pad-20-sm'>
                    <h5 style={{fontSize:"25px",color:"#4E4E50"}} className='theme-dark'>{t("heartgirlh")}</h5>
                    <h2 style={{fontSize:"16px",color:"black",fontWeight:"400"}}>{t("heartgirlp")}</h2>
                    <div className='decent-pad mob-bottom-pad'>
                        <Link href="#" className="btn" style={{ height: "40px", width: "169px" }} onClick={scrollToBottom}>
                        <p style={{ transform: transform, fontSize: "18px" }}>
                            {t("contactus")}
                        </p>
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Main;