import React from 'react'
import FeaturesservicesTwo from '../../assets/img/features/about_img.png'
import { Link } from 'react-router-dom'



function About() {
  return (
    <>
        <section className="about-area about-p pt-120 pb-120 p-relative fix">
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
                            <Link to="/about" className="btn ss-btn smoth-scroll">
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

export default About