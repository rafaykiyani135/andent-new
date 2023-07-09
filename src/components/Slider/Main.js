import React from 'react'
import collage from '../../assets/andent-data/collage.png'
import { Link } from 'react-router-dom'


function Main(props) {
  return (
    <>
        
 
            <section id="home" className="slider-area fix p-relative">
                <div className="slider-active">
                <div className="single-slider slider-bg d-flex align-items-center" style={{backgroundImage: "url(img/slider/slider_bg.png)", backgroundSize: "cover"}}>
                   <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-8 col-md-8">
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
                            <div className="col-lg-4 col-md-4">
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
                        <div className="col-lg-4 col-md-4 p-relative">
                        <div className="banner-img upper-padding" style={{paddingTop:"150px"}}>
                            <img src={collage} alt="banner-img" style={{height:"450px"}}/>
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