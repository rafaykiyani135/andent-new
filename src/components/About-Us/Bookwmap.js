import React from 'react'
import iconone from '../../assets/andent-data/address.png'
import icontwo from '../../assets/andent-data/contactus.png'
import Iframe from 'react-iframe'


function Make() {
  return (
    <>
            <div className="container pad-20">
              <div className="row justify-content-around align-items-center">
              <div className="col-lg-4 col-8 order-2 d-flex justify-content-center wow fadeInUp animated upper-padding" data-animation="fadeInDown animated" data-delay=".2s" style={{paddingLeft:"50px",position:"relative",bottom:"20px"}}>
                  <div >
                    <div className='row justify-content-center'>
                      <div className='col-lg-4 col-8'>
                      <div className="f-cta-icon">
                        <img src={iconone} alt='none' className='mob-bottom-icon'/>
                      </div>
                      </div>
                      <div className='col-lg-8 col-12 mob-bottom-text'>
                        <div className='apt-text'>
                            <h5 className='theme-dark' style={{color:"#4E4E50"}}>Clinic Address</h5>
                            <p className='size-16 theme-dark' style={{width:"263px",height:"64px",lineHeight:"20px",fontWeight:"400"}}>
                            Rruga Bardhok Biba, Pall. Golden<br/> Trema,
                            Shk. B, Kati 4, Tiranë 
                            </p>
                        </div>
                      </div>
                    </div>
                    <br/>
                    <div className='row justify-content-center'>
                      <div className='col-lg-4 col-8'>
                      <div className="f-cta-icon">
                        <img src={icontwo} alt='none' className='mob-bottom-icon'/>
                      </div>
                      </div>
                      <div className='col-lg-8 col-12 mob-bottom-text'>
                        <div style={{position:"relative",bottom:"20px"}} className='apt-text'>
                          <h5 className='theme-dark' style={{color:"#4E4E50"}}>Contact Us</h5>
                          <p className='size-16 theme-dark' style={{width:"263px",height:"100px",lineHeight:"20px",fontWeight:"400"}}>
                          Phone Number:<br/> +355(0) 69 375 5065<br/><br/>
                          Email:<br/>info@andent.al
                          </p>
                        </div>
                        
                      </div>
                    </div>

                    <div className='row upper-padding' style={{position:"relative"}}>
                    <div className="col-lg-12 text-center">
                    <Iframe id="contactsMap"frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.004518759625!2d19.814192096789547!3d41.3305151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135031303fe86d0b%3A0x7d2830bb4995e303!2sDentisti%20in%20Albania%20-%20Andent%20Clinic!5e0!3m2!1sen!2s!4v1688988361448!5m2!1sen!2s"
                           width={322}
                           height={303} 
                           style={{ border : "0" }}
                          loading="lazy"
                          className='contacts-map map-pos'>
                    </Iframe>
                    </div>
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
                
                <div className="col-lg-6 order-1 pad-10">
                  <div className="contact">
                    <form action="mail.php" method="post" className="contact-form mt-30">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="contact-field pad-10">
                            <input type="text" id="firstn" name="firstn" placeholder="First Name" required="" style={{borderRadius:"15px"}} className='form-small'/>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="contact-field pad-10">
                            <input type="text" id="lastn" name="lastn" placeholder="Last Name" required="" style={{borderRadius:"15px"}} className='form-small'/>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="contact-field pad-10">
                            <input type="text" id="Email" name="Email" placeholder="Email" required="" style={{borderRadius:"15px"}} className='form-small'/>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="contact-field pad-10">
                            <input type="text" id="Phone Number" name="Phone Number" placeholder="Phone Number" className='input-box form-small' style={{borderRadius:"15px"}}/>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="contact-field pad-10">
                            <textarea name="message" id="message" cols={30} rows={10} placeholder="Write comments" defaultValue={""} className='input-box form-big' style={{borderRadius:"15px"}}/>
                          </div>
                          <div className="col-lg-12">
                          <div className="contact-field" style={{paddingLeft:"10px"}}>
                            <input type="text" id="panoramex" name="panoramex" placeholder="Panoramex" required="" style={{borderRadius:"15px"}} className='form-big2'/>
                          </div>
                        </div>
                          <div className='d-flex justify-content-center pad-20'>
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

    </>
  )
}

export default Make