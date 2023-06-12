import React from 'react'
import Callmenone from '../../assets/img/bg/call-man.png'
import { Link } from 'react-router-dom'
import Bgimg from '../../assets/img/bg/call-bg.png'

function Appointment() {
  return (
    <>
        <div className="call-area" style={{backgroundImage: `url(${ Bgimg })`, backgroundRepeat: "no-repeat",backgroundPosition: "bottom"}} >
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-5 col-md-5 col-sm-12">
                    <div className="single-counter-img fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s" >
                    <img src={Callmenone} alt="img" className="img" />
                    </div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-12">
                    <div className="call-text">
                    <h5>Book Dentail Appointment</h5>
                    <h2>We Are open And Welcoming Patients</h2>
                    <Link href="#" className="btn">
                        Book Appointment
                    </Link>
                    </div>
                </div>
                </div>
            </div>
        </div>

    
    </>
  )
}

export default Appointment