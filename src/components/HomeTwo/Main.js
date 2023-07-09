import React from 'react'
import Ourservish from '../Menhome/Ourservices'
import Book from '../Menhome/Booking'
import Testimo from '../Menhome/Testimonial'
import Faq from '../Menhome/Faqsection'
import OurDr from '../Menhome/Ourdr'
import Appointment from '../Menhome/Appointment'
import Blog from '../Menhome/tourism'
import Slider from "react-slick";
import { Link } from 'react-router-dom'


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button type="button" className={`slick-next slick-arrow ${className}`} style={{...style}} onClick={onClick}><i className="far fa-angle-right"></i></button>
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;

    return (
        <button type="button" className={`slick-prev slick-arrow ${className}`} style={{...style}} onClick={onClick}><i className="far fa-angle-left"></i></button>
    );
}

function Main() {

    const settings = {
        autoplay: true,
        autoplaySpeed: 10000,
        dots: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            { breakpoint: 1200, settings: { dots: false, arrows: false } }
        ]
    };

    return (
        <>
            <div className="modal fade bs-example-modal-lg search-bg popup1" tabIndex={-1} role="dialog" >
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content search-popup">
                        <div className="text-center">
                            <Link to="#" className="close2" data-dismiss="modal" aria-label="Close">
                                × close
                            </Link>
                        </div>
                        <div className="row search-outer">
                            <div className="col-md-11">
                                <input type="text" placeholder="Search for products..." />
                            </div>
                            <div className="col-md-1 text-right">
                                <Link to="#">
                                    <i className="fa fa-search" aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="home" className="slider-area slider-four fix p-relative">
                <Slider className="slider-active" {...settings} style={{ background: "#00173c" }}>
                    <div>
                        <div className="single-slider slider-bg d-flex align-items-center" style={{ backgroundImage: `url(assets/img/slider/slider_img03.jpg)`, backgroundSize: "cover" }}>
                            <div className="container">
                                <div className="row justify-content-center align-items-center">

                                    <div className="col-lg-10 col-md-10 text-center">
                                        <div className="slider-content s-slider-content slider-text-2 mt-20">
                                            <h2 data-animation="fadeInUp" data-delay=".4s">We Are Best Solution Dental Service</h2>
                                            <p data-animation="fadeInUp" data-delay=".4s">Nunc eu laoreet ipsum, id pulvinar quam. Mauris non nisi semper, lacinia neque in, dapibus leo. Quisque vitae metus porttitor, hendrerit lectus scelerisque, vehicula lectus.</p>
                                            <div className="slider-btn mt-20">
                                                <a href="contact.html" className="btn ss-btn" data-animation="fadeInLeft" data-delay=".4s">Contact Us</a>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="single-slider slider-bg d-flex align-items-center" style={{ backgroundImage: `url(assets/img/slider/slider_img04.jpg)`, backgroundSize: "cover" }}>
                            <div className="container">
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-lg-10 col-md-10 text-center">
                                        <div className="slider-content s-slider-content slider-text-2 mt-20">
                                            <h2 data-animation="fadeInUp" data-delay=".4s">We Are Best Solution Dental Service</h2>
                                            <p data-animation="fadeInUp" data-delay=".4s">Nunc eu laoreet ipsum, id pulvinar quam. Mauris non nisi semper, lacinia neque in, dapibus leo. Quisque vitae metus porttitor, hendrerit lectus scelerisque, vehicula lectus.</p>
                                            <div className="slider-btn mt-20">
                                                <a href="contact.html" className="btn ss-btn" data-animation="fadeInLeft" data-delay=".4s">Contact Us</a>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>

            <Ourservish />
            <Book />
            <Testimo />
            <Faq />
            <OurDr />
            <Appointment />
            <Blog />
        </>
    )
}

export default Main