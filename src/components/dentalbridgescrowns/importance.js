
import React from 'react'
import b1 from '../../assets/andent-data/b5.png'
import b2 from '../../assets/andent-data/b1.png'
import b3 from '../../assets/andent-data/s3.png'
import b5 from '../../assets/andent-data/s4.png'
import b6 from '../../assets/andent-data/b6.png'
import Slider from 'react-slick'
import { useState,useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function Main (){

    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const { t } = useTranslation();

    // Choose the screen size
    const handleResize = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 720) { // Mobile devices
        setIsMobile(true);
        setIsTablet(false);
        } else if (screenWidth < 1024) { // Tablets
        setIsMobile(false);
        setIsTablet(true);
        } else { // Large screens
        setIsMobile(false);
        setIsTablet(false);
        }
    };

    // Create an event listener
    useEffect(() => {
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 4000,
        slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
        slidesToScroll: isMobile ? 1 : isTablet ? 2 : 3,
    };

    return(
        <div>
            <section id="blog" className="andent-padding">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                    <h2 className='theme-dark mob-heading'>{t("bridgesimportance")}</h2>
                    </div>
                </div>
                </div>
                <div className="row justify-content-center">
                <div style={{touchAction:"none"}}>
                <Slider {...settings}>
                <div className="col-lg-2 col-md-6 d-flex justify-content-center">
                    <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        <div style={{paddingTop:"20px"}}>
                        <h4 className='theme-dark size-18' style={{textAlign:"center"}}>{t("bridgesimp1")}</h4>
                        </div>
                        <div className='andent-sq-icon-text'>
                            <p className='theme-dark size-16 text-center' style={{lineHeight:"20px"}}>
                            {t("bridgesimp1p")}
                            </p>
                        </div>
                        <div className='d-flex justify-content-center upper-padding' >
                        <img src={b1} alt="dt1" className='andent-icon-sq' style={{position:"relative",bottom:"15px"}}/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 d-flex justify-content-center">
                    <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        <div style={{paddingTop:"20px"}}>
                        <h4 className='theme-dark size-18' style={{textAlign:"center"}}>{t("bridgesimp2")}</h4>
                        </div>
                        <div className='andent-sq-icon-text'>
                            <p className='theme-dark size-16 text-center' style={{lineHeight:"20px"}}>
                            {t("bridgesimp2p")}
                            </p>
                        </div>
                        <div className='d-flex justify-content-center upper-padding'>
                        <img src={b6} alt="dt1" className='andent-icon-sq'/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 d-flex justify-content-center text-center">
                    <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        <div style={{paddingTop:"20px"}}>
                        <h4 className='theme-dark size-18' style={{textAlign:"center"}}>{t("bridgesimp3")}</h4>
                        </div>
                        <div className='andent-sq-icon-text text-center offset-fix'>
                            <p className='theme-dark size-16 text-center' style={{lineHeight:"20px"}}>
                            {t("bridgesimp3p")}
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
                        <h4 className='theme-dark size-18' style={{textAlign:"center"}}>{t("bridgesimp4")}</h4>
                        </div>
                        <div className='andent-sq-icon-text'>
                            <p className='theme-dark size-16 text-center' style={{lineHeight:"20px"}}>
                            {t("bridgesimp4p")}
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
                        <h4 className='theme-dark size-18' style={{textAlign:"center"}}>{t("bridgesimp5")}</h4>
                        </div>
                        <div className='andent-sq-icon-text'>
                            <p className='theme-dark size-16 text-center' style={{lineHeight:"20px"}}>
                            {t("bridgesimp5p")}
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