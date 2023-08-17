import React from 'react'
import Iconone from '../../assets/img/icon/costmetic-dentistry-veneers.png'
import Icontwo from '../../assets/img/icon/dental-implants.png'
import Iconthree from '../../assets/img/icon/dentalcrowns-bridges.png'
import Iconfour from '../../assets/img/icon/dentures.png'
import Iconfive from '../../assets/img/icon/general-dentistry.png'
import Iconsix from '../../assets/img/icon/orthodontic-treatment.png'
import slider1 from '../../assets/andent-data/slider1.jpg'
import slider2 from '../../assets/andent-data/slider2.jpg'
import slider3 from '../../assets/andent-data/slider3.jpg'
import slider4 from '../../assets/andent-data/slider4.jpg'
import slider5 from '../../assets/andent-data/slider5.jpg'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from 'react-i18next'

function Ourservices() {

    const {t}=useTranslation()
  


    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      const linkClick = (e) =>{
        window.analytics.track("Link clicked", {
            buttonText: e.currentTarget.title,
            link: e.currentTarget.href,
            clickedOnPage: window.location.pathname
          });
    }


  return (
    <div className='andent-padding'>
         <section id="service-details2" className="" >
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
                            <div className="text safety-mob-dim" style={{paddingLeft:"20px"}}>
                            <h4 className='theme-dark' style={{fontSize:"18px"}}>{t("service1")}</h4>
                            <div className='services-text'>
                                <p style={{color:"#4E4E50",lineHeight:"20px",fontSize:"16px"}}>
                                {t("service1p")}
                                </p>
                            </div>
                            </div>
                        </li>
                        </div>
                        <div>
                        <li style={{paddingBottom:"40px"}}>
                            <div className="icon order-md-first">
                            <img src={Iconthree} alt="icon01" className='services-icon sm-icon'/>
                            </div>
                            <div className="text order-first safety-mob-dim" style={{paddingLeft:"20px"}}>
                            <h4 className='theme-dark' style={{fontSize:"18px"}}>{t("service2")}</h4>
                            <div className='services-text'>
                                <p style={{color:"#4E4E50",lineHeight:"20px",fontSize:"16px"}}>
                                {t("service2p")}
                                </p>
                            </div>
                            
                            </div>
                        </li>
                        </div>
                        <div>
                        <li className='mob-moveright'>
                            <div className="icon">
                            <img src={Iconfour} alt="icon01" className='services-icon sm-icon'/>
                            </div>
                            <div className="text " style={{paddingLeft:"20px"}}>
                            <h4 className='theme-dark' style={{fontSize:"18px"}}>{t("service3")}</h4>
                            <div className='services-text'>
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
                            <div className="icon order-md-first">
                            <img src={Iconone} alt="icon01" className='services-icon sm-icon'/>
                            </div>
                            <div className="text pt-10 order-first safety-mob-dim" style={{paddingLeft:"20px"}}>
                            <h4 className='theme-dark' style={{fontSize:"18px"}}>{t("service4")}</h4>
                            <div className='services-text'>
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
                            <div className="text pt-10 " style={{paddingLeft:"20px"}}>
                            <h4 className='theme-dark ' style={{fontSize:"18px"}}>{t("service5")}</h4>
                            <div className='services-text '>
                                <p style={{color:"#4E4E50",lineHeight:"20px",fontSize:"16px"}}>
                                {t("service5p")}
                                </p>
                            </div>
                            
                            </div>
                        </li>
                        </div>
                        <div>
                        <li>
                            <div className="icon order-md-first">
                            <img src={Iconfive} alt="icon01" className='services-icon sm-icon'/>
                            </div>
                            <div className="text pt-10 order-first" style={{paddingLeft:"20px"}}>
                            <h4 className='theme-dark' style={{fontSize:"18px"}}>{t("service6")}</h4>
                            <div className='services-text'>
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
        
         <section style={{paddingTop:"75px"}}>
            <div className="container">
                    <div className="row justify-content-center align-items-start">
                    <div className="col-lg-5 col-md-12 col-sm-12 align-items-center justify-content-center">
                    <div className="fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s">
                        <Slider {...settings}>
                        <div className='d-flex justify-content-center'>
                            <img src={slider1} className="img-fluid" alt="Slider Image6" />
                        </div>
                        <div className='d-flex justify-content-center'>
                             <img src={slider2} className="img-fluid" alt="Slider Image1" />
                        </div>
                        <div className='d-flex justify-content-center'>
                        <img src={slider3} className="img-fluid" alt="Slider Image2" />
                        </div>
                        <div className='d-flex justify-content-center'>
                        <img src={slider4} className="img-fluid" alt="Slider Image3" />
                        </div>
                        <div className='d-flex justify-content-center'>
                        <img src={slider5} className="img-fluid" alt="Slider Image4" />
                        </div>
                        </Slider>
                    </div>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12 text-center text-lg-start why-andent">
                        <div className="about-content s-about-content  wow fadeInRight  animated"  data-animation="fadeInRight" data-delay=".4s" >
                        <div className="about-title second-title pb-25">
                            <h5 className='theme-andent' style={{fontSize:"20px",color:"#6DA7A2",paddingBottom:"10px"}}>{t("aboutUs")}</h5>
                            <h2 className='theme-dark' style={{fontSize:"25px"}}>{t("whyandent")}</h2>
                        </div>
                        <p style={{color:"#4E4E50",lineHeight:"20px",fontSize:"16px"}}>
                        {t("whyandentp")}
                        </p>
                        <div style={{ paddingTop: "10px" }} className='d-flex justify-content-center justify-content-lg-start'>
                        <button className='btn d-flex align-items-center justify-content-center' style={{ height: "50px" }}>
                            <Link to="/about" style={{ color: "white" }} title="Learn More" onClick={linkClick}>
                            <p style={{transform:"translateY(8px)"}}>
                            {t("learnmore")}
                            </p>
                            </Link>
                        </button>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
         </section>

    </div>
  )
}

export default Ourservices