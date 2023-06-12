import React from 'react'
import TestimonialAvtOne from '../../assets/img/testimonial/testi_avatar.png'
import TestimonialAvtTwo from '../../assets/img/testimonial/testi_avatar_02.png'
import ReviewIconOne from '../../assets/img/testimonial/review-icon.png'
import TestimonialIconTwo from '../../assets/img/testimonial/qt-icon.png'
import Iconslider from '../../assets/img/icon/pr-icon1.png'
import IconSlidertwo from '../../assets/img/icon/pr-icon2.png'
import IconSliderthree from '../../assets/img/icon/pr-icon3.png'
import Slider from "react-slick";
import { Link } from 'react-router-dom'


function Testimonialslider() {
    let satting = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
    }
  return (
    <>
        <section className="testimonial-area pb-115 p-relative fix" style={{ backgroundColor: "#f6f8fc" }} >
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <div className="section-title text-center mb-50 wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                    <h5>Testimonial</h5>
                    <h2>What Our Clients Says</h2>
                    </div>
                </div>
                <div className="col-lg-12">
                    <Slider className="testimonial-active" {...satting}>
                        <div className="single-testimonial">
                            <div className="testi-author">
                            <img src={TestimonialAvtOne} alt="img" />
                            </div>
                            <div className="review mb-30">
                            <img src={ReviewIconOne} alt="img" />
                            </div>
                            <p>
                            “Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor
                            lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum
                            magna.we dedicate financial on services the teams serve all
                            Curabitur ac tortor ante. Sed quis dignissim”
                            </p>
                            <div className="ta-info">
                            <h6>Margie Dose</h6>
                            <span>Web Developer</span>
                            </div>
                            <div className="qt-img">
                            <img src={TestimonialIconTwo} alt="img" />
                            </div>
                        </div>
                        <div className="single-testimonial">
                            <div className="testi-author">
                            <img src={TestimonialAvtTwo} alt="img" />
                            </div>
                            <div className="review mb-30">
                            <img src={ReviewIconOne} alt="img" />
                            </div>
                            <p>
                            “Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor
                            lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum
                            magna.we dedicate financial on services the teams serve all
                            Curabitur ac tortor ante. Sed quis dignissim”
                            </p>
                            <div className="ta-info">
                            <h6>Jone Walker</h6>
                            <span>Web Designer</span>
                            </div>
                            <div className="qt-img">
                            <img src={TestimonialIconTwo} alt="img" />
                            </div>
                        </div>
                        <div className="single-testimonial">
                            <div className="testi-author">
                            <img src={TestimonialAvtTwo} alt="img" />
                            </div>
                            <div className="review mb-30">
                            <img src={ReviewIconOne} alt="img" />
                            </div>
                            <p>
                            “Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor
                            lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum
                            magna.we dedicate financial on services the teams serve all
                            Curabitur ac tortor ante. Sed quis dignissim”
                            </p>
                            <div className="ta-info">
                            <h6>Dose Robot</h6>
                            <span>Web Developer</span>
                            </div>
                            <div className="qt-img">
                            <img src={TestimonialIconTwo} alt="img" />
                            </div>
                        </div>
                        <div className="single-testimonial">
                            <div className="testi-author">
                            <img src={TestimonialAvtOne} alt="img" />
                            </div>
                            <div className="review mb-30">
                            <img src={ReviewIconOne} alt="img" />
                            </div>
                            <p>
                            “Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor
                            lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum
                            magna.we dedicate financial on services the teams serve all
                            Curabitur ac tortor ante. Sed quis dignissim”
                            </p>
                            <div className="ta-info">
                            <h6>Jone Walker</h6>
                            <span>Web Designer</span>
                            </div>
                            <div className="qt-img">
                            <img src={TestimonialIconTwo} alt="img" />
                            </div>
                        </div>
                        <div className="single-testimonial">
                            <div className="testi-author">
                            <img src={TestimonialAvtTwo} alt="img" />
                            </div>
                            <div className="review mb-30">
                            <img src={ReviewIconOne} alt="img" />
                            </div>
                            <p>
                            “Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor
                            lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum
                            magna.we dedicate financial on services the teams serve all
                            Curabitur ac tortor ante. Sed quis dignissim”
                            </p>
                            <div className="ta-info">
                            <h6>Margie Dose</h6>
                            <span>Web Developer</span>
                            </div>
                            <div className="qt-img">
                            <img src={TestimonialIconTwo} alt="img" />
                            </div>
                        </div>
                        <div className="single-testimonial">
                            <div className="testi-author">
                            <img src={TestimonialAvtOne} alt="img" />
                            </div>
                            <div className="review mb-30">
                            <img src={ReviewIconOne} alt="img" />
                            </div>
                            <p>
                            “Morbi neque nisi, tincidunt nec erat vitae, viverra porttitor
                            lorem. Fusce tempor nunc at luctus blandit. Donec eget fermentum
                            magna.we dedicate financial on services the teams serve all
                            Curabitur ac tortor ante. Sed quis dignissim”
                            </p>
                            <div className="ta-info">
                            <h6>Jone Walker</h6>
                            <span>Web Designer</span>
                            </div>
                            <div className="qt-img">
                            <img src={TestimonialIconTwo} alt="img" />
                            </div>
                        </div>
                    </Slider>
                </div>
                </div>
            </div>
        </section>

        <section id="pricing" className="pricing-area pt-120 pb-60 fix p-relative">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <div className="section-title text-center mb-50 wow fadeInDown animated"  data-animation="fadeInDown" data-delay=".4s" >
                    <h5>Testimonial</h5>
                    <h2>What Our Clients Says</h2>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="pricing-box pricing-box2 text-center mb-60">
                    <div className="pricing-head">
                        <div className="icon">
                        <img src={Iconslider} alt="img" />
                        </div>
                        <h3>Basic Plan</h3>
                        <div className="price-count">
                        <h2>
                            $49 <span>/ Monthly</span>
                        </h2>
                        </div>
                        <hr />
                    </div>
                    <div className="pricing-body mt-20 mb-30 text-left">
                        <ul>
                        <li>Aliquam quis justo at lorem</li>
                        <li>Fusce sodales, urna et tempus</li>
                        <li>Vestibulum blandit lorem quis</li>
                        <li>Orci varius natoque penatibus</li>
                        <li>Aliquam a nisl congue, auctor</li>
                        </ul>
                    </div>
                    <div className="pricing-btn">
                        <Link to="contact.html" className="btn ss-btn">
                        Choose Plan
                      </Link>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="pricing-box pricing-box2 active text-center mb-60">
                    <div className="pricing-head">
                        <div className="icon">
                        <img src={IconSlidertwo} alt="img" />
                        </div>
                        <h3>Standard Plan </h3>
                        <div className="price-count">
                        <h2>
                            $99 <span>/ Monthly</span>
                        </h2>
                        </div>
                        <hr />
                    </div>
                    <div className="pricing-body mt-20 mb-30 text-left">
                        <ul>
                        <li>Aliquam quis justo at lorem</li>
                        <li>Fusce sodales, urna et tempus</li>
                        <li>Vestibulum blandit lorem quis</li>
                        <li>Orci varius natoque penatibus</li>
                        <li>Aliquam a nisl congue, auctor</li>
                        </ul>
                    </div>
                    <div className="pricing-btn">
                        <Link to="contact.html" className="btn ss-btn">
                        Choose Plan
                      </Link>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="pricing-box pricing-box2 text-center mb-60">
                    <div className="pricing-head">
                        <div className="icon">
                        <img src={IconSliderthree} alt="img" />
                        </div>
                        <h3>Unlimited Plan</h3>
                        <div className="price-count">
                        <h2>
                            $149 <span>/ Monthly</span>
                        </h2>
                        </div>
                        <hr />
                    </div>
                    <div className="pricing-body mt-20 mb-30 text-left">
                        <ul>
                        <li>Aliquam quis justo at lorem</li>
                        <li>Fusce sodales, urna et tempus</li>
                        <li>Vestibulum blandit lorem quis</li>
                        <li>Orci varius natoque penatibus</li>
                        <li>Aliquam a nisl congue, auctor</li>
                        </ul>
                    </div>
                    <div className="pricing-btn">
                        <Link to="contact.html" className="btn ss-btn">
                        Choose Plan
                      </Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

    </>
  )
}

export default Testimonialslider