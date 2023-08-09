import React, { useState } from 'react'
import Logo from '../../assets/andent-data/logo.png'
import { Link } from 'react-router-dom'
import phone from '../../assets/andent-data/callcalling.png'
import mail from '../../assets/andent-data/mail1.png'
import ig from '../../assets/andent-data/instagram.png'
import fb from '../../assets/andent-data/facebook.png'
import tiktok from '../../assets/andent-data/tiktok.png'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'


function Main() {

    const [mobile, setmobile] = useState(false);
    const [Services, setServices] = useState(false)
    const {t,i18n}=useTranslation();
    const [transform, setTransform] = useState("");
  
    useEffect(() => {
        //"translate(-5px,-5px)"
          const lng= navigator.language;
          i18n.changeLanguage(lng)
    
          if (navigator.language.startsWith('sq')) {
            setTransform("translateX(-8px)");
          } else {
            setTransform("");
          }
      },[i18n,setTransform]);
    const linkClick = (e) =>{
        window.analytics.track("Link clicked", {
            buttonText: e.currentTarget.title,
            link: e.currentTarget.href,
            clickedOnPage: window.location.pathname
          });
    }

    const linkTwoClick = (e) =>{
        window.analytics.track("Link clicked", {
            buttonText: "ContactUs",
            link: e.currentTarget.href,
            clickedOnPage: window.location.pathname
          });
    }

    return (
        <>
            <header className="header-area header-three">
                <div className="header-top second-header d-none d-md-block" style={{backgroundColor:"#6DA7A2"}}>
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col-lg-8 col-md-8 d-none d-lg-block">
                                <div className="header-cta" style={{position:"relative",right:"45px"}}>
                                    <ul>
                                        <li>
                                            <img src={phone} alt='phone' className='icon' style={{paddingRight:"10px"}}/>
                                            <span>+355(0) 69 375 5065</span>
                                        </li>
                                        <li>
                                           <img src={mail} alt='mail' className='icon1' style={{paddingRight:"10px"}}/>
                                            <span>info@andent.com</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 d-none d-lg-block text-end" style={{position:"relative",left:"22px"}}>
                                <div className="header-social header-btn-pos" style={{position:"relative",bottom:"24px"}}>
                                    <span>
                                        <Link to='https://instagram.com/andent_clinic?igshid=MzRlODBiNWFlZA' target="_blank" 
                                        rel="noreferrer"title="Instagram" onClick={linkClick}>
                                        <img src={ig} alt='phone' className='icon2' style={{width:"40px",height:"40px"}}/>
                                        </Link>
                                        <Link to='https://www.facebook.com/andentclinic?mibextid=LQQJ4d' target="_blank"
                                        rel="noreferrer"title="Facebook" onClick={linkClick}>
                                        <img src={fb} alt='phone' className='icon3' style={{width:"40px",height:"40px"}}/>
                                        </Link>
                                        <Link to='https://www.tiktok.com/@andentclinic' target="_blank"
                                        rel="noreferrer"title="Tiktok" onClick={linkClick}>
                                        <img src={tiktok} alt='phone' className='icon2' style={{width:"40px",height:"40px"}} />
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="header-sticky" className="menu-area sticky-menu" style={{ backgroundColor: "white" }}>
                    <div className="container">
                        <div className="second-menu">
                            <div className="row align-items-center">
                                <div className="col-xl-1 col-lg-1 justify-content-start">
                                    <div className="logo header-logo">
                                        <Link to="/" title='AndentLogo' onClick={linkClick}>
                                            <img src={Logo} alt="logo" style={{height:"35px",width:"145px"}}/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-10 col-lg-10 move-header-left">
                                    <div className="main-menu text-right text-xl-right adjust-header">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li className='has-sub'>
                                                    <Link to="/" title='Home' onClick={linkClick} >{t("home")}</Link>
                                                </li>
                                                <li className='has-sub'>
                                                    <Link to="/dental-implants" title='Dental Implants' onClick={linkClick}>{t("implants")}</Link>
                                                </li>
                                                <li className='has-sub'>
                                                    <Link to="/dental-crowns-bridges" title='Dental Bridges' onClick={linkClick}>{t("dentalbridges")}</Link>
                                                </li>
                                                <li className='has-sub'>
                                                    <Link to="/about" title='Why Us' onClick={linkClick}>{t("aboutus")}</Link>
                                                </li>
                                                <li className='has-sub'>
                                                    <Link to="/dental-tourism" title='Dental Tourism' onClick={linkClick}>{t("tourism")}</Link>
                                                </li>
                                                <li className='has-sub'>
                                                    <Link to="/testimonials" title='Testimonials' onClick={linkClick}>{t("testimonial")}</Link>
                                                </li>
                                                <li className='has-sub'>
                                                    <Link to="/blog/1" title='Blogs' onClick={linkClick}>{t("blog")}</Link>
                                                </li>
                                                <li className='has-sub'>
                                                    <Link to="/contact" title='Other Services' onClick={linkClick}>{t("otherserv")} &nbsp; <span style={{position:"relative",bottom:"3px"}}><i class="arrow down"></i></span></Link>
                                                    <ul>
                                                        <li>
                                                            <Link to="/orthodontics" title='Orthodontics' onClick={linkClick}>{t("orthodontics")}</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/dentures" title='Dentures' onClick={linkClick}>{t("dentures")}</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/dental-veneers" title='Dental Veneers' onClick={linkClick}>{t("veneers")}</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/general-dentistry" title='General Dentistry' onClick={linkClick}>{t("general")}</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xl-1 col-lg-1 text-right d-none d-lg-block mt-25 mb-25 text-right text-xl-right move-left">
                                    <div className='header-btn-pos'>
                                        <ul>
                                            <li>
                                                <div>
                                                    <Link to="/contact" className="header-btn" onClick={linkTwoClick}>
                                                        <p style={{transform:transform}}>
                                                        {t("contactus")}
                                                        </p>
                                                    </Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mobile-menu mean-container">
                                        <div className="mean-bar">
                                            <Link to="#" onClick={() => setmobile(!mobile)} className={`meanmenu-reveal ${mobile && "meanclose"}`} style={{ right: "0px", left: "auto", textAlign: "center", textIndent: "0px", fontSize: "18px" }}>
                                                {mobile ? "X" : <span><span><span></span></span></span>}
                                            </Link>
                                            {mobile &&
                                                <nav className="mean-nav">
                                                    <ul style={{ display: "block" }}>
                                                        <li className="has-sub">
                                                            <Link to="/" title='Home' onClick={linkClick} >{t("home")}</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/dental-implants" title='Dental Implants' onClick={linkClick}>{t("implants")}</Link>
                                                        </li>
                                                        <li className="has-sub">
                                                            <Link to="/dental-crowns-bridges" title='Dental Bridges' onClick={linkClick}>{t("dentalbridges")}</Link>
                                                        </li>
                                                        <li className="has-sub">
                                                            <Link to="/about" title='Why Us' onClick={linkClick}>{t("aboutus")}</Link>
                                                        </li>
                                                        <li className="has-sub">
                                                            <Link to="/dental-tourism" title='Dental Tourism' onClick={linkClick}>{t("tourism")}</Link>
                                                        </li>
                                                        <li className="has-sub">
                                                            <Link to="/testimonials" title='Testimonials' onClick={linkClick}>{t("testimonial")}</Link>
                                                        </li>
                                                        <li className='has-sub'>
                                                        <Link to="/blog/1" title='Blogs' onClick={linkClick}>{t("blog")}</Link>
                                                        </li>
                                                        <li className="mean-last has-sub">
                                                            <Link to="/contact" title='Other Services' onClick={linkClick}>{t("otherserv")}</Link>
                                                            {Services &&
                                                            <ul style={{ display: "block" }}>
                                                            <li>
                                                                <Link to="/orthodontics" title='Orthodontics' onClick={linkClick}>{t("orthodontics")}</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/dentures" title='Dentures' onClick={linkClick}>{t("dentures")}</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/dental-veneers" title='Dental Veneers' onClick={linkClick}>{t("veneers")}</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/general-dentistry" title='General Dentistry' onClick={linkClick}>{t("general")}</Link>
                                                            </li>
                                                            </ul>  
                                                            }
                                                            <Link className={`mean-expand ${mobile && "mean-clicked"}`} to="#" onClick={() => { setServices(!Services) }} style={{ fontSize: 18 }}>
                                                            {Services ? "-" : "+"}
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Main