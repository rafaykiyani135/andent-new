import React from 'react'
import iconone from '../../assets/andent-data/address.png'
import icontwo from '../../assets/andent-data/contactus.png'
import Iframe from 'react-iframe'


function Make() {
  return (
    <>
        <section id="contact" className="contact-area after-none contact-bg pt-120 pb-120 p-relative fix" >
            <div className="container">
              <div className="row justify-content-around align-items-center">
                <div className="col-lg-4 order-2 d-flex justify-content-center upper-padding">
                  <div className="contact-info">
                    <div className="pb-30 mb-30 wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s" >
                      <div className="f-cta-icon">
                        <img src={iconone} alt='none'/>
                      </div>
                      <h5 className='theme-dark' style={{color:"#4E4E50"}}>Clinic Address</h5>
                      <p className='size-16 theme-dark'>
                      Rruga Bardhok Biba, Pall. Golden Trema,<br />
                       Shk. B, Kati 4, Tiranë 
                      </p>
                    </div>
                    <div
                      className=" pb-30 mb-30 wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s" >
                      <div className="f-cta-icon">
                        <img src={icontwo} alt='none'/>
                      </div>
                      <h5 className='theme-dark' style={{color:"#4E4E50"}}>Contact Us</h5>
                      <p className='size-16 theme-dark'>
                        Phone Number: +355(0) 69 375 5065 <br/>
                        Email: info@andent.al<br/>
                      </p>
                    </div>
                    <div className="col-lg-12">
                    <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.004518759625!2d19.814192096789547!3d41.3305151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135031303fe86d0b%3A0x7d2830bb4995e303!2sDentisti%20in%20Albania%20-%20Andent%20Clinic!5e0!3m2!1sen!2s!4v1688988361448!5m2!1sen!2s"
                           width={322}
                           height={303} 
                           style={{ border : "0" }}
                          loading="lazy">
                    </Iframe>
                </div>
                  </div>
                </div>
                <div className='row justify-content-center text-center'>
                  <div className='col-lg-8'>
                <div className="section-title center-align">
                      <h2 className='size-60 theme-dark'>Book an Appointment</h2>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 order-1 upper-padding" >
                  <div className="contact">
                    
                    <form action="mail.php" method="post" className="contact-form mt-30">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="contact-field p-relative c-name mb-20">
                            <input type="text" id="firstn" name="firstn" placeholder="First Name" required="" style={{borderRadius:"15px"}}/>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="contact-field p-relative c-subject mb-20">
                            <input type="text" id="lastn" name="lastn" placeholder="Last Name" required="" style={{borderRadius:"15px"}}/>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="contact-field p-relative c-subject mb-20">
                            <input type="text" id="Email" name="Email" placeholder="Email" required="" style={{borderRadius:"15px"}}/>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="contact-field p-relative c-subject mb-20">
                            <input type="text" id="Phone Number" name="Phone Number" placeholder="Phone Number" className='input-box' style={{borderRadius:"15px"}}/>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="contact-field p-relative c-message mb-30">
                            <textarea name="message" id="message" cols={30} rows={10} placeholder="Write comments" defaultValue={""} className='input-box'/>
                          </div>
                          <div className="col-lg-12" style={{transform:"translateY(-15px)"}}>
                          <div className="contact-field p-relative c-subject mb-20">
                            <input type="text" id="panoramex" name="panoramex" placeholder="Panoramex" required="" style={{borderRadius:"15px"}}/>
                          </div>
                        </div>
                          <div className='d-flex justify-content-center'>
                            <button className="btn" data-animation="fadeInRight" data-delay=".8s" style={{width:"182px",height:"50px"}}>
                              <p style={{transform:"translateY(-5px)"}}>
                                BOOK NOW
                              </p>
                            </button>
                          </div>
                          <br/>
                          <br/>
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