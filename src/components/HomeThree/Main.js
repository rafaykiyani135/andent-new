import React from 'react'
import { Link } from 'react-router-dom'
import Ourservish from '../Menhome/Ourservices'
import Book from '../Menhome/Booking'
import Testimo from '../Menhome/Testimonialslider'
import Faq from '../Menhome/Faqsection'
import OurDr from '../Menhome/Ourdr'
import Appointment from '../Menhome/Appointment'
import Blog from '../Menhome/Blog'
import Video from '../../assets/img/slider/slider-vedio.mp4'



function Main() {
  return (
    <>
        <section id="home" className="slider-area fix p-relative">
                <div className="slider-active" style={{ background: "#00173c" }}>
                <div className="single-slider slider-bg d-flex slider-four slider-bg-three align-items-center" style={{ backgroundImage: "url(img/slider/slider_img01.png)", backgroundSize: "cover"}} >
                    <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-10 col-md-10 text-center">
                        <div className="slider-content s-slider-content slider-text-2 mt-20">
                            <h2 data-animation="fadeInUp" data-delay=".4s">
                            We Are Best Solution Dental Service
                            </h2>
                            <p data-animation="fadeInUp" data-delay=".4s">
                            Nunc eu laoreet ipsum, id pulvinar quam. Mauris non nisi
                            semper, lacinia neque in, dapibus leo. Quisque vitae metus
                            porttitor, hendrerit lectus scelerisque, vehicula lectus.
                            </p>
                            <div className="slider-btn mt-20">
                            <Link to="/contact" className="btn ss-btn" data-animation="fadeInLeft" data-delay=".4s" >
                                Contact Us
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                    <video id="my-video" className="video2" muted loop autoPlay>
                        <source src={Video} type="video/mp4" />
                        <source src="img/slider/slider-vedio.ogv" type="video/ogg" />
                        <source src="img/slider/slider-vedio.webm" type="video/webm" />
                    </video>
                    
                </div>
                </div>
        </section>

        {/* <Slider/> */}
        <Ourservish/>
        <Book/>
        <Testimo/>
        <Faq/>
        <OurDr/>
        <Appointment/>
        <Blog/>
    </>
  )
}

export default Main