import React from 'react'
import Callmenone from '../../assets/andent-data/veneergirl.png'
import { Link } from 'react-router-dom'

function Main() {
    
    const scrollToBottom = () => {
    window.scrollTo({
        top: document.documentElement.scrollHeight - window.innerHeight - 500,
        behavior: 'smooth',
    });
    };

  return (
    <>
        <div className='contactsm-upperpad'>
            <div className="container contact-dim" style={{backgroundColor:"#A7CCC8",borderRadius:"20px"}}>
                <div className="row align-items-center">
                <div className="col-lg-5 col-md-5 col-sm-12 pad-20-sm text-center">
                    <div className="single-counter-img fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s" >
                    <img src={Callmenone} alt="img" className="img contact-lg" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-7 col-sm-12 d-flex align-items-start justify-content-start">
                    <div className='pad-20-sm'>
                    <h5 style={{fontSize:"25px",color:"#4E4E50"}} className='theme-dark'>Achieve the smile you've always wanted with our dental veneers</h5>
                    <h2 style={{fontSize:"16px",color:"black",fontWeight:"400"}}>Contact us today to schedule a consultation
                    and let our team create a customized treatment plan to deliver beautiful, natural-looking results.</h2>
                    <div className='decent-pad'>
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
    
    </>
  )
}

export default Main;