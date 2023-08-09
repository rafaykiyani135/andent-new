import React from 'react'
import Innerone from '../../assets/andent-data/dt1.png'
import Innertwo from '../../assets/andent-data/dt2.png'
import Innerthree from '../../assets/andent-data/dt3.png'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { useState,useEffect } from 'react'
import { useTranslation } from 'react-i18next'


function Tourism() {

    const {t,i18n}=useTranslation();
  
    useEffect(() => {
        const lng= navigator.language;
        i18n.changeLanguage(lng)
    });

    const [isMobile, setIsMobile] = useState(false)
    //choose the screen size 
    const handleResize = () => {
      if (window.innerWidth < 720) {
          setIsMobile(true)
      } else {
          setIsMobile(false)
      }
    }
  
    // create an event listener
    useEffect(() => {
      window.addEventListener("resize", handleResize)

    })

    const linkClick = (e) =>{
        window.analytics.track("Link clicked", {
            buttonText: e.currentTarget.title,
            link: e.currentTarget.href,
            clickedOnPage: window.location.pathname
          });
    }


  return (
    <>
        <section className="andent-padding">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                    <h5 className='theme-andent' style={{color:"#6DA7A2",fontSize:"20px"}}>{t("makethemosttrip")}</h5>
                    <h2 className='theme-dark mob-heading'>{t("tourism")}</h2>
                    </div>
                </div>
                </div>
                <div className="row justify-content-around">
                <div className="col-lg-3 col-md-6 d-flex text-center">
                    <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        <div>
                        <img src={Innerone} alt="dt1" style={{height:"200px",width:"320px"}} className='img-fluid'/>
                        </div>
                        <div style={{paddingTop:"20px"}}>
                        <h4 className='theme-dark' style={{textAlign:"center",fontSize:"17px"}}>{t("freeaccom")}</h4>
                        </div>
                        <div style={{paddingTop:"0px"}}>
                        <p className='theme-dark text-center' style={{lineHeight:"20px"}}>
                        {t("freeaccomp")}
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        <div>
                        <img src={Innertwo} alt="dt1" style={{height:"200px",width:"320px"}} className='img-fluid'/>
                        </div>
                        <div style={{paddingTop:"20px"}} className='justify-content-md-center'>
                        <h4 className='theme-dark' style={{textAlign:"center",fontSize:"17px"}}>{t("assistancewithtravel")}</h4>
                        </div>
                        <div style={{paddingTop:"0px"}}>
                        <p className='theme-dark text-center' style={{lineHeight:"20px"}}>
                        {t("assistancewithtravelp")}
                        </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        <div>
                        <img src={Innerthree} alt="dt1" style={{height:"200px",width:"320px"}} className='img-fluid'/>
                        </div>
                        <div style={{paddingTop:"20px"}}>
                        <h4 className='theme-dark' style={{textAlign:"center",fontSize:"17px"}}>{t("traveltips")}</h4>
                        </div>
                        <div style={{paddingTop:"0px"}}>
                        <p className='theme-dark text-center' style={{lineHeight:"20px"}}>
                        {t("traveltipsp")}
                        </p>
                        </div>
                    </div>
                </div>
                </div>
                <div className='row justify-content-center text-center upper-padding'>
                <div className='col-lg-8 col-md-8 col-12 d-flex justify-content-center web-vid move-left-vid'>
                <div className="web-vid" style={{ position: 'relative', paddingTop: '56.25%', width: '100%',borderRadius:"5px" }}>
                    <ReactPlayer
                        url="https://streamable.com/yp0ty3"
                        controls={true}
                        width={isMobile? '100%': '640px'}
                        height={isMobile? '100%' : '360px'}
                        style={{  position: 'absolute', top: 0, left: 0,borderRadius: "10px", overflow:"hidden" }}
                    />
                </div>
                </div>
                </div>
               <div className='row justify-content-center text-center'>
                <div className='col-lg-8 col-md-8 d-flex justify-content-center'>
                <div className='upper-padding'>
                        <button className='btn d-flex align-items-center justify-content-center' style={{ height: "50px" }}>
                            <Link to="/dental-tourism" style={{ color: "white" }} title="Learn More" onClick={linkClick}>
                            <p style={{transform:"translateY(8px)"}}>
                            {t("learnmore")}
                            </p>
                            </Link>
                        </button>
                        </div>
                </div>
               </div>
                
                </div>
        </section>
    
    </>
  )
}

export default Tourism;