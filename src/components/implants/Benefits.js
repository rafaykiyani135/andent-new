import React from 'react'
import b1 from '../../assets/andent-data/b1.png'
import b2 from '../../assets/andent-data/b2.png'
import b3 from '../../assets/andent-data/b3.png'
import b4 from '../../assets/andent-data/b4.png'
import b5 from '../../assets/andent-data/b5.png'
import Slider from 'react-slick'
import { useState,useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function Main (){

    const [isMobile, setIsMobile] = useState(false);
    const { t } = useTranslation();

    // Choose the screen size 
    const handleResize = () => {
    if (window.innerWidth < 720) {
        setIsMobile(true);
    } else {
        setIsMobile(false);
    }
    }

    // Create an event listener
    useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
        window.removeEventListener("resize", handleResize);
    };
    }, []);

    const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    slidesToShow: isMobile ? 1 : window.innerWidth < 1024 ? 2 : 3,
    slidesToScroll: isMobile ? 1 : window.innerWidth < 1024 ? 2 : 3
    };

    return(
        <div>
            <section className="andent-padding">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                    <h2 className='theme-dark mob-heading'>{t("implantsbenefits")}</h2>
                    </div>
                </div>
                </div>
                <div className="row justify-content0-around">
                <div style={{touchAction:"none"}}>
                <Slider {...settings}>
                <div className="col-lg-2 col-md-5 d-flex justify-content-center">
                    <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        <div style={{paddingTop:"20px"}}>
                        <h4 className='theme-dark size-18' style={{textAlign:"center"}}>{t("impben1")}</h4>
                        </div>
                        <div className='andent-sq-icon-text'>
                            <p className='theme-dark size-16 text-center offset-fix-1' style={{lineHeight:"20px"}}>
                            {t("impben1p")}
                            </p>
                        </div>
                        <div className='d-flex justify-content-center upper-padding'>
                        <img src={b1} alt="dt1" className='andent-icon-sq'/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 d-flex justify-content-center">
                    <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        <div style={{paddingTop:"20px"}}>
                        <h4 className='theme-dark size-18' style={{textAlign:"center"}}>{t("impben2")}</h4>
                        </div>
                        <div className='andent-sq-icon-text'>
                            <p className='theme-dark size-16 text-center' style={{lineHeight:"20px"}}>
                            {t("impben2p")}
                            </p>
                        </div>
                        <div className='d-flex justify-content-center upper-padding'>
                        <img src={b2} alt="dt1" className='andent-icon-sq'/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 d-flex justify-content-center">
                    <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        <div style={{paddingTop:"20px"}}>
                        <h4 className='theme-dark size-18' style={{textAlign:"center"}}>{t("impben3")}</h4>
                        </div>
                        <div className='andent-sq-icon-text offset-fix-2'>
                            <p className='theme-dark size-16 text-center' style={{lineHeight:"20px"}}>
                            {t("impben3p")}
                            </p>
                        </div>
                        <div className='d-flex justify-content-center upper-padding'>
                        <img src={b3} alt="dt1" className='andent-icon-sq'/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 d-flex justify-content-center">
                    <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        <div style={{paddingTop:"20px"}}>
                        <h4 className='theme-dark size-18' style={{textAlign:"center"}}>{t("impben4")}</h4>
                        </div>
                        <div className='andent-sq-icon-text'>
                            <p className='theme-dark size-16 text-center' style={{lineHeight:"20px"}}>
                            {t("impben4p")}
                            </p>
                        </div>
                        <div className='d-flex justify-content-center upper-padding'>
                        <img src={b4} alt="dt1" className='andent-icon-sq'/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 d-flex justify-content-center">
                    <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        <div style={{paddingTop:"20px"}}>
                        <h4 className='theme-dark size-18' style={{textAlign:"center"}}>{t("impben5")}</h4>
                        </div>
                        <div className='andent-sq-icon-text'>
                            <p className='theme-dark size-16 text-center' style={{lineHeight:"20px"}}>
                            {t("impben5p")}
                            </p>
                        </div>
                        <div className='d-flex justify-content-center upper-padding'>
                        <img src={b5} alt="dt1" className='andent-icon-sq'/>
                        </div>
                    </div>
                </div>
                </Slider>
                </div>
                </div>
                </div>
        </section>
        </div>
    )
}

export default Main;