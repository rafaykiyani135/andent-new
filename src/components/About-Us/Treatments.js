import React from 'react'
import Iconone from '../../assets/img/icon/costmetic-dentistry-veneers.png'
import Icontwo from '../../assets/img/icon/dental-implants.png'
import Iconthree from '../../assets/img/icon/dentalcrowns-bridges.png'
import Iconfour from '../../assets/img/icon/dentures.png'
import Iconfive from '../../assets/img/icon/general-dentistry.png'
import Iconsix from '../../assets/img/icon/orthodontic-treatment.png'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'


function Ourservices() {

    const {t,i18n}=useTranslation();

    useEffect(() => {
        const lng= navigator.language;
        i18n.changeLanguage(lng)
      });

  return (
    <>
         <section id="service-details2" className="andent-padding" style={{paddingBottom:"50px"}}>
                <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-12">
                    <div className="section-title center-align mb-50 text-center">
                        <h5 style={{fontSize:"20px",color:"#6DA7A2",paddingBottom:"20px"}} >{t("servicesh3")}</h5>
                        <h2 className='theme-dark size-60 mob-heading' >{t("coredentaltreatments")}</h2>
                    </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12 move-right">
                    <div className="about-content s-about-content">
                        <ul className="text-left">
                        <div>
                        <li style={{paddingBottom:"40px"}}>
                            <div className="icon">
                            <img src={Icontwo} alt="icon01" className='services-icon sm-icon'/>
                            </div>
                            <div className="text" style={{paddingLeft:"20px"}}>
                            <h4 className='theme-dark' style={{fontSize:"18px"}}>{t("service1")}</h4>
                            <div style={{width:"263px",height:"60px"}}>
                                <p style={{color:"#4E4E50",lineHeight:"20px",fontSize:"16px"}}>
                                {t("service1p")}
                                </p>
                            </div>
                            
                            </div>
                        </li>
                        </div>
                        <div>
                        <li style={{paddingBottom:"40px"}}>
                            <div className="icon">
                            <img src={Iconthree} alt="icon01" className='services-icon sm-icon'/>
                            </div>
                            <div className="text" style={{paddingLeft:"20px"}}>
                            <h4 className='theme-dark' style={{fontSize:"18px"}}>{t("service2")}</h4>
                            <div style={{width:"263px",height:"60px"}}>
                                <p style={{color:"#4E4E50",lineHeight:"20px",fontSize:"16px"}}>
                                {t("service2p")}
                                </p>
                            </div>
                            
                            </div>
                        </li>
                        </div>
                        <div>
                        <li>
                            <div className="icon">
                            <img src={Iconfour} alt="icon01" className='services-icon sm-icon'/>
                            </div>
                            <div className="text" style={{paddingLeft:"20px"}}>
                            <h4 className='theme-dark' style={{fontSize:"18px"}}>{t("service3")}</h4>
                            <div style={{width:"263px",height:"60px"}}>
                                  <p style={{color:"#4E4E50",lineHeight:"20px",fontSize:"16px"}}>
                                  {t("service3p")}
                                    </p>
                            </div>
                          
                            </div>
                        </li>
                        </div>
                        </ul>
                    </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12 move-right sm-col-gap">
                    <div className="about-content s-about-content">
                        <ul>
                        <div>
                        <li style={{paddingBottom:"40px"}}>
                            <div className="icon">
                            <img src={Iconone} alt="icon01" className='services-icon sm-icon'/>
                            </div>
                            <div className="text pt-10" style={{paddingLeft:"20px"}}>
                            <h4 className='theme-dark' style={{fontSize:"18px"}}>{t("service4")}</h4>
                            <div style={{width:"263px",height:"60px"}}>
                                <p style={{color:"#4E4E50",lineHeight:"20px",fontSize:"16px"}}>
                                {t("service4p")}
                                </p>
                            </div>
                            
                            </div>
                        </li>
                        </div>
                        <div>
                        <li style={{paddingBottom:"40px"}}>
                            <div className="icon">
                            <img src={Iconsix} alt="icon01" className='services-icon sm-icon'/>
                            </div>
                            <div className="text pt-10" style={{paddingLeft:"20px"}}>
                            <h4 className='theme-dark' style={{fontSize:"18px"}}>{t("service5")}</h4>
                            <div style={{width:"263px",height:"60px"}}>
                                <p style={{color:"#4E4E50",lineHeight:"20px",fontSize:"16px"}}>
                                {t("service5p")}
                                </p>
                            </div>
                            
                            </div>
                        </li>
                        </div>
                        <div>
                        <li>
                            <div className="icon">
                            <img src={Iconfive} alt="icon01" className='services-icon sm-icon'/>
                            </div>
                            <div className="text pt-10" style={{paddingLeft:"20px"}}>
                            <h4 className='theme-dark' style={{fontSize:"18px"}}>{t("service6")}</h4>
                            <div style={{width:"263px",height:"60px"}}>
                                <p style={{color:"#4E4E50",lineHeight:"20px",fontSize:"16px"}}>
                                {t("service6p")}
                                </p>
                            </div>
                            
                            </div>
                        </li>
                        </div>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
         </section>
    </>
  )
}

export default Ourservices