import React from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player';

function Main (){



    return(
        <div className="container andent-padding">
        <div className="row">
            <div className="col-lg-12 col-md-12">
            <div
                className="call-area"
                style={{ backgroundColor: "#6DA7A2", borderRadius: "20px" }}
            >
                <div className="row align-items-center">
                <div className="col-lg-7 col-md-5 col-sm-12 order-2">
                    <div
                    className="single-counter-img fadeInUp animated"
                    data-animation="fadeInDown animated"
                    data-delay=".2s"
                    style={{ position: "relative", paddingTop: "56.25%" }}
                    >
                    <div
                        className='exp-vid'
                    >
                        <ReactPlayer
                        url="https://streamable.com/cnka92"
                        controls={true}
                        width="100%"
                        height="100%"
                        />
                    </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-7 col-sm-12 order-1 text-center d-flex justify-content-center" style={{paddingRight:"20px"}}>
                        <div className="call-text exp-text-pos">
                            <h5 className="theme-dark size-25" style={{ color: "#4E4E50" }}>
                                Experience the <span style={{ color: "#F9665E" }}>life-changing</span> benefits of dental implants at our clinic.
                            </h5>
                            <div className='pad-10 exp-text-size'>
                               <p style={{ color: "black",lineHeight:"20px",fontWeight:"400",fontSize:"17px"}}>
                                    Our experienced team ensures precise implant placement, exceptional aesthetics, and superior functionality.
                                </p> 
                            </div>
                            <div className="upper-padding">
                                <Link href="#" className="btn" style={{ height: "40px", width: "169px" }}>
                                <p style={{ transform: "translate(-2px,-10px)", fontSize: "18px" }}>
                                    Contact Us
                                </p>
                                </Link>
                            </div>
                            <br/>
                            <br/>
                        </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Main;