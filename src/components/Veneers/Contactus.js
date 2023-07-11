import React from 'react'
import Callmenone from '../../assets/andent-data/veneergirl.png'
import { Link } from 'react-router-dom'
import Bgimg from '../../assets/andent-data/background.png'

function Main() {
  return (
    <>
        <div className="call-area upper-padding" style={{backgroundImage: `url(${ Bgimg })`, backgroundRepeat: "no-repeat",backgroundPosition: "bottom",paddingTop:"125px"}} >
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-5 col-md-5 col-sm-12">
                    <div className="single-counter-img fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s" >
                    <img src={Callmenone} alt="img" className="img" />
                    </div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-12 d-flex justify-content-start text-left">
                    <div className="call-text">
                    <h5 style={{fontSize:"25px",color:"#4E4E50"}} className='theme-dark'>Achieve the smile you've always wanted with our dental veneers</h5>
                    <h2 style={{fontSize:"16px",color:"black",fontWeight:"400"}}>Contact us today to schedule a consultation and let our team create a
                    customized treatment plan to deliver beautiful, natural-looking results</h2>
                    <div>
                        <Link href="#" className="btn" style={{ height: "40px", width: "169px" }}>
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

    
    </>
  )
}

export default Main;