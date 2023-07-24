import React from 'react'
import Iconone from '../../assets/img/icon/costmetic-dentistry-veneers.png'
import Icontwo from '../../assets/img/icon/dental-implants.png'
import Iconthree from '../../assets/img/icon/dentalcrowns-bridges.png'
import Iconfour from '../../assets/img/icon/dentures.png'
import Iconfive from '../../assets/img/icon/general-dentistry.png'
import Iconsix from '../../assets/img/icon/orthodontic-treatment.png'
import slider1 from '../../assets/andent-data/slider1.png'
import slider2 from '../../assets/andent-data/slider2.jpg'
import slider3 from '../../assets/andent-data/slider3.jpg'
import slider4 from '../../assets/andent-data/slider4.jpg'
import slider5 from '../../assets/andent-data/slider5.jpg'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Ourservices() {


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


  return (
    <div className='andent-padding'>
         <section id="service-details2" className="" >
                <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-12">
                    <div className="section-title center-align mb-50 text-center">
                        <h5 style={{fontSize:"20px",color:"#6DA7A2",paddingBottom:"20px"}} >EXPERIENCE THESE AND MORE</h5>
                        <h2 className='theme-dark size-60 mob-heading'>Dental Treatments</h2>
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
                            <h4 className='theme-dark' style={{fontSize:"18px"}}>Dental Implants</h4>
                            <div style={{width:"263px",height:"60px"}}>
                                <p style={{color:"#4E4E50",lineHeight:"20px",fontSize:"16px"}}>
                                Durable, artificial tooth roots to support natural-looking replacement teeth.
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
                            <h4 className='theme-dark' style={{fontSize:"18px"}}>Dental Crowns and Bridges</h4>
                            <div style={{width:"263px",height:"60px"}}>
                                <p style={{color:"#4E4E50",lineHeight:"20px",fontSize:"16px"}}>
                                High-quality prosthetics for damaged or missing teeth, ensuring durability.
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
                            <h4 className='theme-dark' style={{fontSize:"18px"}}>Dentures</h4>
                            <div style={{width:"263px",height:"60px"}}>
                                  <p style={{color:"#4E4E50",lineHeight:"20px",fontSize:"16px"}}>
                                    Custom-made replacements for comfortable chewing, speaking, and smiling.
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
                            <h4 className='theme-dark' style={{fontSize:"18px"}}>Cosmetic Dentistry and Veneers</h4>
                            <div style={{width:"263px",height:"60px"}}>
                                <p style={{color:"#4E4E50",lineHeight:"20px",fontSize:"16px"}}>
                                Transform your smile with whitening, veneers, and personalized makeovers.
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
                            <h4 className='theme-dark' style={{fontSize:"18px"}}>Orthodontic Treatment</h4>
                            <div style={{width:"263px",height:"60px"}}>
                                <p style={{color:"#4E4E50",lineHeight:"20px",fontSize:"16px"}}>
                                Achieve straighter teeth and correct bites with orthodontic treatments, including Invisalign
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
                            <h4 className='theme-dark' style={{fontSize:"18px"}}>General Dentistry</h4>
                            <div style={{width:"263px",height:"60px"}}>
                                <p style={{color:"#4E4E50",lineHeight:"20px",fontSize:"16px"}}>
                                Preventive care, treatments, and maintenance for optimal oral health and a beautiful smile.
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
                        <div>
                             <img src={slider2} className="img-fluid" alt="Slider Image1" />
                        </div>
                        <div>
                        <img src={slider3} className="img-fluid" alt="Slider Image2" />
                        </div>
                        <div>
                        <img src={slider4} className="img-fluid" alt="Slider Image3" />
                        </div>
                        <div>
                        <img src={slider5} className="img-fluid" alt="Slider Image4" />
                        </div>
                        </Slider>
                    </div>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12 text-center text-lg-start" style={{paddingTop:"35px",paddingLeft:"30px"}}>
                        <div className="about-content s-about-content  wow fadeInRight  animated"  data-animation="fadeInRight" data-delay=".4s" >
                        <div className="about-title second-title pb-25">
                            <h5 className='theme-andent' style={{fontSize:"20px",color:"#6DA7A2",paddingBottom:"10px"}}>About Us</h5>
                            <h2 className='theme-dark' style={{fontSize:"25px"}}>Why Andent?</h2>
                        </div>
                        <p style={{color:"#4E4E50",lineHeight:"20px",fontSize:"16px"}}>
                        Your Trusted Dental Clinic in Albania. With 10+ years of expertise,
                         our renowned dentist Dr. Anduela Çurmaku leads our exceptional team.
                          From painless implants to advanced treatments, our precision, safety,
                           and top-quality equipment ensure optimal oral health. Trust our skilled
                            team for a confident smile. 
                        </p>
                        <div style={{ paddingTop: "10px" }} className='d-flex justify-content-center justify-content-lg-start'>
                        <button className='btn d-flex align-items-center justify-content-center' style={{ height: "50px" }}>
                            <Link to="/about" style={{ color: "white" }}>
                            <p style={{transform:"translateY(8px)"}}>
                                Learn More
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