import React from 'react'
import Callmenone from '../../assets/andent-data/contactgirl.png'
import { Link } from 'react-router-dom'

function Main() {
  return (
    <>
        <div style={{paddingTop:"200px"}} className='andent-padding'>
            <div className="container contact-dim" style={{backgroundColor:"#A7CCC8",borderRadius:"20px"}}>
                <div className="row align-items-center">
                <div className="col-lg-5 col-md-5 col-sm-12 pad-20-sm">
                    <div className="single-counter-img fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s" >
                    <img src={Callmenone} alt="img" className="img contact-lg" style={{height:"504px",width:"378px"}}/>
                    </div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-12 d-flex align-items-start justify-content-start">
                    <div className='pad-20-sm'>
                    <h5 style={{fontSize:"25px",color:"#4E4E50"}} className='theme-dark'>Contact us to learn more about our services</h5>
                    <h2 style={{fontSize:"16px",color:"black",fontWeight:"400"}}>Guided by our expert team, we focus on your comfort and satisfaction.
                    Achieve a confident smile with Andent.</h2>
                    <div className='decent-pad'>
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