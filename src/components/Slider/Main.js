import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import vid from '../../assets/andent-data/hero section videos/hero1.mp4'
import imgleft from '../../assets/andent-data/hero section videos/hero Images/22_DENTAL CLINIC.jpg';
import imgleft2 from '../../assets/andent-data/hero section videos/hero Images/8_DENTAL CLINIC.jpg';
import imgright from '../../assets/andent-data/hero section videos/hero Images/horizontal rectangle 2.jpg';
import vid2 from '../../assets/andent-data/hero section videos/hero2.mp4'
import vid3 from '../../assets/andent-data/hero section videos/hero3.mp4'
import vid4 from '../../assets/andent-data/hero section videos/hero4.mp4'

function Main(props) {

    const settings = {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical: true,
        arrows: false,
        autoplay: true,
        speed : 8000,
        autoplaySpeed : 2000,
        cssEase:'linear',
        verticalSwiping: true,
        pauseOnHover: false,
      };



  
      
  return (


    <>
   <section id="home" className="slider-area fix p-relative " style={{paddingBottom:"10px"}}>
                <div className="slider-active">
                <div className="single-slider slider-bg d-flex align-items-center">
                   <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-8 col-md-12 col-12">
                        <div className="slider-content s-slider-content mt-20">
                            <h5 data-animation="fadeInUp" data-delay=".4s" className='theme' style={{color:"#6DA7A2"}}>
                            welcome To Andent
                            </h5>
                            <h2 data-animation="fadeInUp" data-delay=".4s" style={{color:"#4E4E50",fontSize:"75px",lineHeight:"60pt"}}>
                            {props.heading}
                            </h2>
                            <h2 data-animation="fadeInUp" data-delay=".4s" style={{color:"#F9665E",fontSize:"85px",lineHeight:"70pt"}}>
                            Save Up to 70%
                            </h2>
                            <p data-animation="fadeInUp" data-delay=".6s" style={{color:"#000000",lineHeight:"17pt",fontSize:"16px"}}>
                            {props.description}
                            </p>
                            <br/>
                            <br/>
                            <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <input className='input-box form-control mb-3' placeholder='Your Phone Number...' />
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <input className='input-box form-control mb-3' placeholder='Your Name...' />
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <button className='btn'>
                                <Link to="/contact" >
                                <p style={{color:"white"}}>
                                    Get Call Back
                                </p>
                                </Link>
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12 upper-padding move-down">
                        <div className="row justify-content-center">
                        <div className="col-lg-6 col-6 text-center slider-container d-flex justify-content-center">
                        <Slider {...settings}>
                            <div className="slider-video">
                            <video  autoPlay loop muted style={{height:"100%",width:"100%"}}>
                                <source src={vid} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            </div>
                            <div className="slider-picture">
                            <img src={imgleft} alt="leftimg2" style={{height:"100%",width:"100%"}}/>
                            </div>
                            <div className="slider-video">
                            <video  autoPlay loop muted style={{height:"100%",width:"100%"}}>
                                <source src={vid2} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            </div>
                            <div className="slider-picture">
                            <img src={imgleft2} alt="leftimg2" style={{height:"100%",width:"100%"}}/>
                            </div>
                        </Slider>
                        </div>
                        <div className="col-lg-6 col-6 text-center slider-container slider-mob-padding">
                        <Slider {...settings}>
                            <div className="slider-video">
                            <video  autoPlay loop muted style={{height:"100%",width:"100%"}}>
                                <source src={vid3} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            </div>
                            <div className="slider-picture">
                            <img src={imgright} alt="rightimg1"style={{height:"100%",width:"100%"}}/>
                            </div>
                            <div className="slider-video">
                            <video autoPlay loop muted style={{height:"100%",width:"100%"}}>
                                <source src={vid4} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            </div>
                        </Slider>
                        </div>
                        </div>
                        </div>

                       

                    </div>
                   </div>
                </div>
                </div>
            </section>
    
    </>
  )
}

export default Main