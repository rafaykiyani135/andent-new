import React from 'react'
import Iconone from '../../assets/img/icon/costmetic-dentistry-veneers.png'
import Icontwo from '../../assets/img/icon/dental-implants.png'
import Iconthree from '../../assets/img/icon/dentalcrowns-bridges.png'
import Iconfour from '../../assets/img/icon/dentures.png'
import Iconfive from '../../assets/img/icon/general-dentistry.png'
import Iconsix from '../../assets/img/icon/orthodontic-treatment.png'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react'

function Main (){


    const {t,i18n}=useTranslation();
    const [height,setHeight]=useState("60px")

    useEffect(() => {
        //"translate(-5px,-5px)"
          const lng= i18n.language;

          if (lng==='sq') {
            setHeight("36%")
          }
    
           else {
            setHeight("60px")
          }
      },[i18n,setHeight]);

    const linkClick = (e) =>{
        window.analytics.track("Link clicked", {
            buttonText: e.currentTarget.title,
            link: e.currentTarget.href,
            clickedOnPage: window.location.pathname
          });
    }


    return(
        <div>
            <section id="service-details2" className="andent-padding" >
                <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-12">
                    <div className="section-title center-align mb-50 text-center">
                        <h5 style={{fontSize:"20px",color:"#6DA7A2",paddingBottom:"20px"}} >{t("servicesh3")}</h5>
                        <h2 className='theme-dark size-60 mob-heading'>{t("servicesh2")}</h2>
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
                            <div style={{width:"263px",height:height}}>
                                <p style={{color:"#4E4E50",lineHeight:"20px",fontSize:"16px"}}>
                                {t("service1p")}
                                </p>
                            </div>
                            <div style={{paddingTop:"15px"}}>
                                <Link to="/dental-implants" style={{position:"relative",bottom:"15px"}} title='Learn More' onClick={linkClick}>
                                <p style={{fontStyle:"italic",fontSize:"10px",color:"#6DA7A2"}}>
                                {t("learnmore")}
                                </p>
                                </Link>
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
                            <div style={{paddingTop:"15px"}}>
                                <Link to="/dental-crowns-bridges" style={{position:"relative",bottom:"15px"}} title='Learn More' onClick={linkClick}>
                                <p style={{fontStyle:"italic",fontSize:"10px",color:"#6DA7A2"}}>
                                {t("learnmore")}
                                </p>
                                </Link>
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
                            <div style={{paddingTop:"15px"}}>
                                <Link to="/dentures" style={{position:"relative",bottom:"15px"}} title='Learn More' onClick={linkClick}>
                                <p style={{fontStyle:"italic",fontSize:"10px",color:"#6DA7A2"}}>
                                {t("learnmore")}
                                </p>
                                </Link>
                            </div>
                            </div>
                        </li>
                        </div>
                        </ul>
                    </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12 move-right">
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
                            <div style={{paddingTop:"15px"}}>
                                <Link to="/dental-veneers" style={{position:"relative",bottom:"15px"}} title='Learn More' onClick={linkClick}>
                                <p style={{fontStyle:"italic",fontSize:"10px",color:"#6DA7A2"}}>
                                {t("learnmore")}
                                </p>
                                </Link>
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
                            <div style={{paddingTop:"15px"}}>
                                <Link to="/orthodontics" style={{position:"relative",bottom:"15px"}} title='Learn More' onClick={linkClick}>
                                <p style={{fontStyle:"italic",fontSize:"10px",color:"#6DA7A2"}}>
                                {t("learnmore")}
                                </p>
                                </Link>
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
                            <div style={{paddingTop:"15px"}}>
                                <Link to="/general-dentistry" style={{position:"relative",bottom:"15px"}} title='Learn More' onClick={linkClick}>
                                <p style={{fontStyle:"italic",fontSize:"10px",color:"#6DA7A2"}}>
                                {t("learnmore")}
                                </p>
                                </Link>
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
        </div>  
    )
}

export default Main;