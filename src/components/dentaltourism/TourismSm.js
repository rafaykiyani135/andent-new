import React from 'react'
import Innerone from '../../assets/andent-data/dt1.png'
import Innertwo from '../../assets/andent-data/dt2.png'
import Innerthree from '../../assets/andent-data/dt3.png'
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Tourism() {

    const {t,i18n}=useTranslation();

    useEffect(() => {
        const lng= navigator.language;
        i18n.changeLanguage(lng)
      });

  return (
    <>
        <section id="blog" className="blog-area p-relative fix pt-90 pb-90">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                <div className="col-lg-11 text-center">
                    <div className="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                    <h5 className='theme-andent' style={{color:"#6DA7A2",fontSize:"20px"}}>{t("gettingtotirana")}</h5>
                    <h2 className='theme-dark mob-heading'>{t("easilyaccessible")}</h2>
                    </div>
                </div>
                </div>
                <div className="row justify-content-around">
                <div className="col-lg-3 col-md-12 d-flex text-center">
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
                <div className="col-lg-3 col-md-12 text-center">
                <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        <div>
                        <img src={Innertwo} alt="dt1" style={{height:"200px",width:"320px"}} className='img-fluid'/>
                        </div>
                        <div style={{paddingTop:"20px"}}>
                        <h4 className='theme-dark' style={{textAlign:"center",fontSize:"17px"}}>{t("assistancewithtravel")}</h4>
                        </div>
                        <div style={{paddingTop:"0px"}}>
                        <p className='theme-dark text-center' style={{lineHeight:"20px"}}>
                        {t("assistancewithtravelp")}
                        </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12 text-center">
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
                </div>
        </section>
    
    </>
  )
}

export default Tourism;