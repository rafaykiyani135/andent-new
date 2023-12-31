import React from 'react'
import Logo from '../../assets/andent-data/logo.png'
import { Link } from 'react-router-dom'
import time from '../../assets/andent-data/timing.png'
import location from '../../assets/andent-data/address.png'
import phone from '../../assets/andent-data/phone.png'
import mail from '../../assets/andent-data/mail.png'
import { useTranslation } from 'react-i18next'
import { useState,useEffect } from 'react'

function Main() {

    const linkClick = (e) =>{
        window.analytics.track("Link clicked", {
            buttonText: e.currentTarget.title,
            link: e.currentTarget.href,
            clickedOnPage: window.location.pathname
            });
    }

    const {t,i18n}=useTranslation();
    const [currentLang,setCurrentLanguage]=useState("");

    useEffect(() => {
        const language = i18n.language;
        if(language==="en-US"){
            setCurrentLanguage("english")
        }
        else if(language==="sq"){
            setCurrentLanguage("albanian")
        }
        else {
            setCurrentLanguage("italian")
        }
      },[setCurrentLanguage,i18n]);

    const handleLanguageChange = (e) => {
        const lng= e.target.value;
        if(lng==="english"){
            i18n.changeLanguage('en-US')
            setCurrentLanguage("english")
            window.location.reload(true)
        }
        else if(lng==="italian"){
            i18n.changeLanguage('it')
            setCurrentLanguage("italian")
            window.location.reload(true)
        }
        else {
            i18n.changeLanguage('sq')
            setCurrentLanguage("albanian")
            window.location.reload(true)
        }
          //en-US english
          //it  italian 
          //sq albanian
    }

  return (
    <>
        <footer className="footer-bg footer-p pt-90" style={{ backgroundColor: "#A7CCC84D" }}>
                <div className="footer-top pb-70">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                <h2>
                                    <img src={Logo} alt="logo" />
                                </h2>
                                </div>
                                <div className="footer-link">
                                <p className='size-16' style={{textAlign:"left",color:"#000000",lineHeight:"21px"}}>
                                    {t("belowlogo")}
                                </p>
                                <div className="f-contact">
                                    <ul>
                                    <li className='theme-dark'>
                                        <img src={time} className='icon' alt='grey'/>
                                        <span  style={{color:"#000000"}}>
                                        {t("monday")} - {t("saturday")}:&nbsp;&nbsp;&nbsp;
                                        <br/>
                                        9:00am - 10:00pm
                                        </span>
                                    </li>
                                    </ul>
                                </div>
                                <div className="f-contact below-logo" style={{ paddingTop: "25px"}}>
                                <h4 style={{ fontSize: "14px" }}>Change Language</h4>
                                <select className='language-dropdown' value={currentLang} onChange={handleLanguageChange} >
                                    <option value="english">English</option>
                                    <option value="italian">Italian</option>
                                    <option value="albanian">Albanian</option>
                                </select>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                <h2 style={{fontSize:"25px",color:"black"}}>{t("otherlinks")}</h2>
                                </div>
                                <div className="footer-link">
                                <ul style={{fontWeight:"600"}}>
                                    <li className='size-16' style={{color:"black"}}>
                                    <Link to="/" title='Home' onClick={linkClick}>{t("home")}</Link>
                                    </li>
                                    <li  className='size-16' style={{color:"black"}}>
                                    <Link to="/about" title='About Us' onClick={linkClick}>{t("aboutus")}</Link>
                                    </li>
                                    <li  className='size-16' style={{color:"black"}}>
                                    <Link to="/testimonials" title='Testimonials' onClick={linkClick}>{t("testimonial")}</Link>
                                    </li>
                                    <li  className='size-16' style={{color:"black"}}>
                                    <Link to="/dental-tourism" title='Dental Tourism' onClick={linkClick}>{t("tourism")}</Link>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                <h2 style={{color:"black"}}>{t("ourservices")}</h2>
                                </div>
                                <div className="footer-link">
                                <ul style={{fontWeight:"600"}}>
                                    <li>
                                    <Link to="/dental-implants" title='Dental Implants' onClick={linkClick}>{t("implants")}</Link>
                                    </li>
                                    <li>
                                    <Link to="/dental-crowns-bridges" title='Dental Bridges' onClick={linkClick}>{t("dentalbridges")}</Link>
                                    </li>
                                    <li>
                                    <Link to="/general-dentistry" title='General Dentistry' onClick={linkClick}>{t("general")}</Link>
                                    </li>
                                    <li>
                                    <Link to="/orthodontics" title='Orthodontics' onClick={linkClick}>{t("orthodontics")}</Link>
                                    </li>
                                    <li>
                                    <Link to="/dental-veneers" title='Dental Veneers' onClick={linkClick}>{t("veneers")}</Link>
                                    </li>
                                    <li>
                                    <Link to="/dentures" title='Dentures' onClick={linkClick}>{t("dentures")}</Link>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                <h2 style={{color:"black"}}>{t("contactus")}</h2>
                                </div>
                                <div className="f-contact">
                                <ul>
                                    <li>
                                    <img src={location} className='icon' alt='locicon' style={{width:"60px",height:"60px"}}/>
                                    <span>
                                    <p style={{paddingTop:"5px",lineHeight:"20px",color:"black",fontWeight:"400"}}>
                                    Rruga Bardhok Biba, <br/>
                                    Pall. Golden Trema, <br/>
                                    Shk. B, Kati 4, Tiranë
                                    </p>
                                    </span>
                                    </li>
                                    <li>
                                    <img src={phone} className='icon' alt="phoneicon"  style={{width:"60px",height:"60px"}}/>
                                    <span>
                                        <p style={{paddingTop:"15px",lineHeight:"20px",color:"black",fontWeight:"400"}}>
                                        +355(0) 69 375 5065
                                        <br />
                                        +39 351 949 5868
                                        </p>
                                    </span>
                                    </li>
                                    <li>
                                    <img src={mail} className='icon' alt='mailicon' style={{width:"65px",height:"55px"}}/>
                                    <span>
                                        <Link to="mailto:info@andent.al" style={{color:"black",fontWeight:"400"}}>
                                            <p style={{paddingTop:"25px",lineHeight:"20px",color:"black"}}>
                                            info@andent.al
                                            </p>
                                            </Link>
                                    </span>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
        </footer>

    </>
  )
}

export default Main