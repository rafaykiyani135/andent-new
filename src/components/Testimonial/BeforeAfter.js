import React from "react";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from 'react-i18next';

function Main (){

    const images = require.context('../../assets/andent-data/final pictures', true);
    const imageList = images.keys().map(image => images(image));

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      const {t}=useTranslation();



    return(
        <div>
        <div className="container ">

            <div className="row align-items-center justify-content-center text-center andent-padding">
                <div className="col-lg-12">
                    <div className="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                    <h2 className='theme-dark mob-heading'>{t("beforeandafter")}</h2>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center text-center mob-bottom-pad">
            <div className="col-lg-12 col-md-12 justify-content-center">
                <Slider {...settings}>
                {imageList.map((image, index) => (
                    <div key={index} className="slider-image-wrapper">
                    <img src={image} alt="beforeafterimg" className="slider-image" />
                    </div>
                ))}
                </Slider>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Main;