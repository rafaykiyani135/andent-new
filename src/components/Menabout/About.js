import React from 'react'
import FeaturesservicesTwo from '../../assets/andent-data/aboutustop.png'
import { Link } from 'react-router-dom'



function About() {
  return (
    <>
        <section className="about-area about-p pt-120 pb-120 p-relative fix">
            <div className="container">
                    <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="s-about-img p-relative wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s" >
                        <img src={FeaturesservicesTwo} alt="img" className='about-us-top' style={{height:"498px",width:"370px"}}/>
                        <div className="about-text second-about text-left">
                            <span style={{color:"#6DA7A2"}}>10</span>
                            <p style={{color:"#6DA7A2"}}>Years of Experience</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 align-items-start text-center text-lg-start">
                    <div className="">
                            <h5 data-animation="fadeInUp" data-delay=".4s" className='theme' style={{color:"#6DA7A2"}}>
                            Experience Exceptional Dental Care
                            </h5>
                            <h2 data-animation="fadeInUp" data-delay=".4s" className='wel-andent theme-dark mob-heading'>
                            Welcome to Andent
                            </h2>
                            <p data-animation="fadeInUp" data-delay=".6s" style={{color:"#000000",lineHeight:"20px",fontSize:"16px",fontWeight:"400"}}>
                            Since our establishment in 2007, we've dedicated ourselves to transforming smiles and enhancing oral health for over 15,000 patients,
                            both domestically and across Europe. Our unwavering commitment to safety, advanced dental technologies, and European quality standards
                             set us apart as a pioneer in the Albanian dental
                             sector With 15 years of experience, we proudly offer a comprehensive range of dental services to cater to all oral health needs.
                            </p>
                            <br/>
                            <br/>
                            <div className="row justify-content-lg-start justify-content-center">
                            <div className="col-lg-3 col-md-3">
                                <input className='input-box form-control mb-3' placeholder='Phone No...' />
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <input className='input-box form-control mb-3' placeholder='Your Name...' />
                            </div>
                            <div className="col-lg-3 col-md-4 text-center text-lg-start">
                                <button className='btn' style={{height:"66px"}}>
                                <Link to="/contact" >
                                <p style={{color:"white",position:"relative",top:"4px"}}>
                                    Get Call Back
                                </p>
                                </Link>
                                </button>
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

export default About