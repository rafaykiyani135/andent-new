import React from 'react'
import Iconone from '../../assets/img/icon/fe-icon01.png'
import IconFour from '../../assets/img/icon/fe-icon04.png'
import IconFive from '../../assets/img/icon/fe-icon05.png'
import IconSix from '../../assets/img/icon/fe-icon06.png'
import IconSeven from '../../assets/img/icon/fe-icon07.png'
import IconEight from '../../assets/img/icon/fe-icon08.png'
import Featuresservices from '../../assets/img/features/services-img-details2.png'
import FeaturesservicesTwo from '../../assets/img/features/about_img.png'
import { Link } from 'react-router-dom'


function Ourservices() {
  return (
    <>
         <section id="service-details2" className="service-details-two pt-120 pb-105 p-relative" >
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                    <div className="section-title center-align mb-50 text-center">
                        <h5>Our Services</h5>
                        <h2>What We Provide</h2>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="about-content s-about-content">
                        <ul className="sr-tw-ul text-right">
                        <li>
                            <div className="text">
                            <h4>Root Canal</h4>
                            <p>
                                Aenean eleifend turpis tellus, nec laoreet metus elementum
                                ac.
                            </p>
                            </div>
                            <div className="icon-right">
                            <img src={Iconone} alt="icon01" />
                            </div>
                        </li>
                        <li>
                            <div className="text">
                            <h4>Alignment Teeth</h4>
                            <p>
                                Aenean eleifend turpis tellus, nec laoreet metus elementum
                                ac.
                            </p>
                            </div>
                            <div className="icon-right">
                            <img src={IconFive} alt="icon01" />
                            </div>
                        </li>
                        <li>
                            <div className="text">
                            <h4>Cosmetic Teeth</h4>
                            <p>
                                Aenean eleifend turpis tellus, nec laoreet metus elementum
                                ac.
                            </p>
                            </div>
                            <div className="icon-right">
                            <img src={IconSeven} alt="icon01" />
                            </div>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 text-center d-none d-lg-block">
                    <div className="sd-img">
                        <img src={Featuresservices} alt="img" />
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="about-content s-about-content">
                        <ul className="sr-tw-ul">
                        <li>
                            <div className="icon">
                            <img src={IconFour} alt="icon01" />
                            </div>
                            <div className="text pt-10">
                            <h4>Oral Hygiene</h4>
                            <p>
                                Aenean eleifend turpis tellus, nec laoreet metus elementum
                                ac.
                            </p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                            <img src={IconSix} alt="icon01" />
                            </div>
                            <div className="text pt-10">
                            <h4>Live Advisory</h4>
                            <p>
                                Aenean eleifend turpis tellus, nec laoreet metus elementum
                                ac.
                            </p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                            <img src={IconEight} alt="icon01" />
                            </div>
                            <div className="text pt-10">
                            <h4>Cavity Inspection</h4>
                            <p>
                                Aenean eleifend turpis tellus, nec laoreet metus elementum
                                ac.
                            </p>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
         </section>

         <section className="about-area about-p pb-120 p-relative fix">
            <div className="container">
                    <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="s-about-img p-relative  wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s" >
                        <img src={FeaturesservicesTwo} alt="img" />
                        <div className="about-text second-about">
                            <span>50</span>
                            <p>Years of Experience</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="about-content s-about-content  wow fadeInRight  animated"  data-animation="fadeInRight" data-delay=".4s" >
                        <div className="about-title second-title pb-25">
                            <h5>About Us</h5>
                            <h2>We Care For Your Dental Health</h2>
                        </div>
                        <p>
                            Aliquam ac sem et diam iaculis efficitur. Morbi in enim odio. Nullam
                            quis volutpat est, sed dapibus sapien. Cras condimentum eu velit id
                            tempor. Curabitur purus sapien, cursus sed nisl tristique, commodo
                            vehicula arcu.
                        </p>
                        <p>
                            Aliquam erat volutpat. Aliquam enim massa, sagittis blandit ex
                            mattis, ultricies posuere sapien. Morbi a dignissim enim. Fusce
                            elementum, augue in elementum porta, sapien nunc volutpat ex, a
                            accumsan nunc lectus eu lectus.
                        </p>
                        <div className="slider-btn mt-20">
                            <Link to="about.html" className="btn ss-btn smoth-scroll">
                            Read More
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

export default Ourservices