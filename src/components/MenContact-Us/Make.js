import React from 'react'
import { Link } from 'react-router-dom'


function Make() {
  return (
    <>
        <section id="contact" className="contact-area after-none contact-bg pt-120 pb-120 p-relative fix" >
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-4 order-2">
                  <div className="contact-info">
                    <div className="single-cta pb-30 mb-30 wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s" >
                      <div className="f-cta-icon">
                        <i className="far fa-map" />
                      </div>
                      <h5>Office Address</h5>
                      <p>
                        380 St Kilda Road, Melbourne <br />
                        VIC 3004, Australia
                      </p>
                    </div>
                    <div
                      className="single-cta pb-30 mb-30 wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s" >
                      <div className="f-cta-icon">
                        <i className="far fa-clock" />
                      </div>
                      <h5>Working Hours</h5>
                      <p>
                        Monday to Friday 09:00 to 18:30 <br />
                        Saturday 15:30
                      </p>
                    </div>
                    <div className="single-cta wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s" >
                      <div className="f-cta-icon">
                        <i className="far fa-envelope-open" />
                      </div>
                      <h5>Message Us</h5>
                      <p>
                        {" "}
                       <Link to="#">support@example.com</Link>
                        <br />
                       <Link to="#">info@example.com</Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 order-1">
                  <div className="contact-bg02">
                    <div className="section-title center-align">
                      <h2>Make Appointment</h2>
                    </div>
                    <form action="mail.php" method="post" className="contact-form mt-30">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="contact-field p-relative c-name mb-20">
                            <input type="text" id="firstn" name="firstn" placeholder="First Name" required="" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="contact-field p-relative c-subject mb-20">
                            <input type="text" id="email" name="email" placeholder="Eamil" required="" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="contact-field p-relative c-subject mb-20">
                            <input type="text" id="phone" name="phone" placeholder="Phone No." required="" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="contact-field p-relative c-subject mb-20">
                            <input type="text" id="subject" name="subject" placeholder="Subject" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="contact-field p-relative c-message mb-30">
                            <textarea name="message" id="message" cols={30} rows={10} placeholder="Write comments" defaultValue={""} />
                          </div>
                          <div className="slider-btn">
                            <button className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s" >
                              <span>Submit Now</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
        </section>

    </>
  )
}

export default Make