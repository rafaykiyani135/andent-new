import React from 'react'
import feicon01 from '../../assets/img/icon/fe-icon01.png'
import feicon04 from '../../assets/img/icon/fe-icon04.png'
import feicon05 from '../../assets/img/icon/fe-icon05.png'
import feicon06 from '../../assets/img/icon/fe-icon06.png'
import feicon07 from '../../assets/img/icon/fe-icon07.png'
import feicon08 from '../../assets/img/icon/fe-icon08.png'

function Teeth() {
  return (
    <>
        
        <section id="service-details2" className="service-details-two pt-120 pb-85 p-relative" >
            <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4 col-md-6 col-sm-12 mb-15">
                <div className="about-content s-about-content">
                    <ul className="sr-tw-ul">
                    <li>
                        <div className="icon">
                        <img src={feicon01} alt="icon01" />
                        </div>
                        <div className="text">
                        <h4>Root Canal</h4>
                        <p>
                            Aenean eleifend turpis tellus, nec laoreet metus elementum
                            ac.
                        </p>
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-15">
                <div className="about-content s-about-content">
                    <ul className="sr-tw-ul">
                    <li>
                        <div className="icon">
                        <img src={feicon05} alt="icon01" />
                        </div>
                        <div className="text">
                        <h4>Alignment Teeth</h4>
                        <p>
                            Aenean eleifend turpis tellus, nec laoreet metus elementum
                            ac.
                        </p>
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-15">
                <div className="about-content s-about-content">
                    <ul className="sr-tw-ul">
                    <li>
                        <div className="icon">
                        <img src={feicon07} alt="icon01" />
                        </div>
                        <div className="text">
                        <h4>Cosmetic Teeth</h4>
                        <p>
                            Aenean eleifend turpis tellus, nec laoreet metus elementum
                            ac.
                        </p>
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-15">
                <div className="about-content s-about-content">
                    <ul className="sr-tw-ul">
                    <li>
                        <div className="icon">
                        <img src={feicon04} alt="icon01" />
                        </div>
                        <div className="text pt-10">
                        <h4>Oral Hygiene</h4>
                        <p>
                            Aenean eleifend turpis tellus, nec laoreet metus elementum
                            ac.
                        </p>
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-15">
                <div className="about-content s-about-content">
                    <ul className="sr-tw-ul">
                    <li>
                        <div className="icon">
                        <img src={feicon06} alt="icon01" />
                        </div>
                        <div className="text pt-10">
                        <h4>Live Advisory</h4>
                        <p>
                            Aenean eleifend turpis tellus, nec laoreet metus elementum
                            ac.
                        </p>
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-15">
                <div className="about-content s-about-content">
                    <ul className="sr-tw-ul">
                    <li>
                        <div className="icon">
                        <img src={feicon08} alt="icon01" />
                        </div>
                        <div className="text pt-10">
                        <h4>Cavity Inspection</h4>
                        <p>
                            Aenean eleifend turpis tellus, nec laoreet metus elementum
                            ac.
                        </p>
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </section>
  
        <section id="booking" className="booking-area p-relative">
            <div className="container">
            <form action="#" className="contact-form">
                <div className="row">
                <div className="col-lg-12">
                    <ul>
                    <li>
                        <div className="contact-field p-relative c-name">
                        <input type="text" placeholder="Enter Name" />
                        <i className="fal fa-user" />
                        </div>
                    </li>
                    <li>
                        <div className="contact-field p-relative c-email">
                        <input type="text" placeholder="Select Your Location..." />
                        <i className="fal fa-map-marker-alt" />
                        </div>
                    </li>
                    <li>
                        <div className="contact-field p-relative c-subject mb-20">
                        <select className="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon" >
                            <option>Select Department...</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                        </select>
                        <i className="far fa-angle-down" />
                        </div>
                    </li>
                    <li>
                        <div className="slider-btn">
                        <button className="bk-btn" data-animation="fadeInRight" data-delay=".8s" >
                            Submit Now
                        </button>
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
            </form>
            </div>
        </section>

    </>
  )
}

export default Teeth