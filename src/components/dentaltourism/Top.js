import React from 'react'
import { Link } from 'react-router-dom'
import bg from '../../assets/andent-data/xhulio-selenica-dwJ0imjVifs-unsplash-3.jpg'


function Main(props) {
  return (
    <>
        <section id="home" className="slider-area fix p-relative">
        <div className="slider-active">
        <div className="single-slider slider-bg d-flex align-items-center bg-pos" style={{ backgroundImage: `url(${bg})`,height:"100%",width:"100%",backgroundAttachment:"fixed"}}>
        <div className="container">
            <div className="row justify-content-left text-left align-items-start">
            <div className="col-lg-7 col-md-7">
                <div className="slider-content s-slider-content mt-20">
                <h5 data-animation="fadeInUp" data-delay=".4s" className="theme" style={{ color: "#6DA7A2" }}>
                    welcome To Andent
                </h5>
                <h2 data-animation="fadeInUp" data-delay=".4s" style={{ color: "#4E4E50", fontSize: "65px", lineHeight: "70pt" }}>
                Experience Dental Tourism at Andent
                </h2>
                <div className='slider-para'>
                <p data-animation="fadeInUp" data-delay=".6s" style={{ color: "#000000", lineHeight: "17pt", fontSize: "16px" ,fontWeight:"400"}}>
                If you're seeking top-quality dental care combined with an unforgettable travel experience, look no further than Andent.
                 We are proud to offer exceptional dental tourism services in the beautiful city of Tirana, Albania
                </p>
                </div>
                <br />
                <br />
                <div className="row">
                    <div className="col-lg-4 col-md-4">
                    <input className="input-box form-control mb-3" placeholder="Your Phone Number..." />
                    </div>
                    <div className="col-lg-4 col-md-4">
                    <input className="input-box form-control mb-3" placeholder="Your Name..." />
                    </div>
                    <div className="col-lg-4 col-md-4 text-center text-lg-start" style={{paddingBottom:"150px"}}>
                    <button className="btn" style={{height:"66px"}}>
                        <Link to="/contact">
                        <p style={{ color: "white" }}>
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
        </div>
    </div>
    </section>
    </>
  )
}

export default Main