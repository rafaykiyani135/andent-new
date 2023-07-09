import React from 'react'
import iconone from '../../assets/andent-data/address.png'
import icontwo from '../../assets/andent-data/contactus.png'


function Make() {
  return (
    <>
        <section id="contact" className="contact-area after-none contact-bg pt-120 pb-120 p-relative fix" >
            <div className="container">
              <div className="row justify-content-around align-items-center">
                <div className="col-lg-4 order-2">
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