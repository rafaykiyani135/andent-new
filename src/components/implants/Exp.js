import React from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player';

function Main (){

    const scrollToBottom = () => {
        window.scrollTo({
          top: document.documentElement.scrollHeight - window.innerHeight - 500,
          behavior: 'smooth',
        });
      };

    return(
        <div className="container andent-padding">
            <div style={{ backgroundColor: "#6DA7A2", borderRadius: "20px" }}>
                <div className="row align-items-center">
                <div className="col-lg-7 col-md-12 order-lg-2">
                    <div className="single-counter-img fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                    <div className="d-flex justify-content-center" style={{}}>
                        <ReactPlayer url="https://streamable.com/cnka92" controls={true}  style={{ maxWidth: "800px",borderRadius:"10px",overflow:"hidden"}} />
                    </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12 order-lg-1" style={{paddingBottom:"40px"}}>
                    <div className="justify-content-center text-center exp-text-size">
                    <h5 className="theme-dark size-25" style={{ color: "#4E4E50" }}>
                        Experience the <span style={{ color: "#F9665E" }}>life-changing</span> benefits of dental implants at our clinic.
                    </h5>
                    <div className="pad-10">
                        <p style={{ color: "black", lineHeight: "20px", fontWeight: "400", fontSize: "17px" }}>
                        Our experienced team ensures precise implant placement, exceptional aesthetics, and superior functionality.
                        </p>
                    </div>
                    <div className="">
                        <Link href="#" className="btn" style={{ height: "40px", width: "169px" }} onClick={scrollToBottom}>
                        <p style={{ transform: "translate(-2px,-10px)", fontSize: "18px" }}>
                            Contact Us
                        </p>
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
    )
}

export default Main;