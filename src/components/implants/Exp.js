import React from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player';

function Main (){
    return(
        <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-10">
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
                        style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        }}
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
                    <div className="call-text">
                    <h5 className="theme-dark" style={{ color: "#4E4E50" }}>
                        Experience the <span style={{ color: "#F9665E" }}>life-changing</span> benefits of dental implants at our clinic
                    </h5>
                    <p style={{ color: "#4E4E50" }}>
                        Our experienced team ensures precise implant placement, exceptional aesthetics, and superior functionality.
                    </p>
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