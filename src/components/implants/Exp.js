import React from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useState } from 'react';

function Main (){

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

      const {t,i18n}=useTranslation();
      const [transform, setTransform] = useState("translate(-2px,-10px)");

      useEffect(() => {
        //"translate(-5px,-5px)"
          const lng= i18n.language;

          if (lng==='sq') {
            setTransform("translate(-15px,-10px)");
          }
    
           else {
            setTransform("translate(-2px,-10px)");
          }
      },[i18n,setTransform]);

    

    return(
        <div className="container andent-padding">
            <div style={{ backgroundColor: "#6DA7A2", borderRadius: "20px" }}>
                <div className="row align-items-center">
                <div className="col-lg-7 col-md-12 order-lg-2 exp-top-pad">
                    <div className="single-counter-img fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                    <div className="d-flex justify-content-center" style={{}}>
                        <ReactPlayer url="https://streamable.com/cnka92" controls={true}  style={{ maxWidth: "800px",borderRadius:"10px",overflow:"hidden"}} />
                    </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12 order-lg-1 exp-top-pad" style={{paddingBottom:"40px"}}>
                    <div className="justify-content-center text-center exp-text-size">
                    <h5 className="theme-dark size-25" style={{ color: "#4E4E50" }}>
                        {t("experiencelifechanging")} <span style={{ color: "#F9665E" }}>{t("experiencelifechanging1")}</span> {t("experiencelifechanging3")}
                    </h5>
                    <div className="pad-10">
                        <p style={{ color: "black", lineHeight: "20px", fontWeight: "400", fontSize: "17px" }}>
                        {t("experiencelifechangingp")}
                        </p>
                    </div>
                    <div className="">
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
    )
}

export default Main;