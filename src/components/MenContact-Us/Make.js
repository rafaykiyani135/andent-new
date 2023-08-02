import React from 'react'
import iconone from '../../assets/andent-data/address.png'
import icontwo from '../../assets/andent-data/contactus.png'
import { useState } from 'react'
import { useEffect } from 'react'


function Make() {

  const [path,setPath]=useState(false)
  const [Fname,setFname]=useState("")
  const [Lname,setLname]=useState("")
  const [email,setEmail]=useState("")
  const [num,setNum]=useState("")
  const [comment,setComment]=useState("")
  const [file,setFile]=useState(null)

  useEffect(() => {
    if((window.location.pathname) === "/contact"){
      setPath(true)
    }
  },[setPath]);

  const chFN = (e) => {
    setFname(e.target.value)
    console.log(file)
  }

  const chLN = (e) => {
    setLname(e.target.value)
  }
  
  const chEmail = (e) => {
    setEmail(e.target.value)
  }

  const chPN = (e) => {
    setNum(e.target.value)
  }

  const chCmnt = (e) => {
    setComment(e.target.value)
  }

  const chPano = (e) => {
    setFile(e.target.files[0])
  }

  const paddingTopValue = path ? '10%' : '40px';

  const bookNow = () =>{
    window.analytics.identify("Appointment Form Data", {
      firstName: Fname,
      lastName: Lname,
      phoneNum : num,
      comments: comment,
      email : email,
      panoramex : file
    });
  }

  return (
    <>
        <section id="contact" className="andent-padding" style={{paddingTop: paddingTopValue}}>
            <div className="container">
              <div className="row justify-content-around align-items-center">
                <div className="col-lg-4 col-8 order-2 d-flex justify-content-center wow fadeInUp animated pad-10" data-animation="fadeInDown animated" data-delay=".2s" style={{paddingLeft:"50px",position:"relative",bottom:"20px"}}>
                  <div className="contact-info">
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
                        <img src={icontwo} alt='none'/>
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
 
                  </div>
                </div>
                <div className='row justify-content-center text-center'>
                  <div className='col-lg-8'>
                <div className="section-title center-align">
                      <h2 className='size-60 theme-dark mob-heading'>Book an Appointment</h2>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 order-1 pad-10">
                  <div className="contact">
                    <form action="mail.php" method="post" className="contact-form mt-30">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="contact-field pad-10">
                            <input type="text" id="firstn" name="firstn" placeholder="First Name" style={{borderRadius:"15px"}} className='form-small' required onChange={chFN}/>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="contact-field pad-10">
                            <input type="text" id="lastn" name="lastn" placeholder="Last Name" style={{borderRadius:"15px"}} className='form-small' required onChange={chLN}/>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="contact-field pad-10">
                            <input type="email" id="Email" name="Email" placeholder="Email" style={{borderRadius:"15px"}} className='form-small' required onChange={chEmail}/>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="contact-field pad-10">
                            <input type="number" id="Phone Number" name="Phone Number" placeholder="Phone Number" className='form-small' style={{borderRadius:"15px"}} required onChange={chPN}/>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="contact-field pad-10">
                            <textarea name="message" id="message" cols={30} rows={10} placeholder="Write comments" defaultValue={""} className='input-box form-big' style={{borderRadius:"15px"}} onChange={chCmnt}/>
                          </div>
                          <div className='row justify-content-around'>
                          <div className="col-lg-7 col-12 col-sm-12 col-md-12 d-flex justify-content-center justify-content-lg-start">
                          <div className="contact-field form-input-pad">
                           <div className='form-big2' style={{borderStyle:"solid"}}>
                              <h4 className="input-text-pad text-start input-text-sides" style={{fontSize:"12px",lineHeight:"18px",fontWeight:"700"}}>
                              Upload Dental Scan or X-Ray;<i style={{fontWeight:"400"}}>Png, Jpg, Pdf {file?<p>Uploaded!</p>:<p></p>}</i>
                              </h4>
                           </div>
                          </div>
                          </div>
                          <div className="col-lg-5 col-12 col-sm-12 col-md-12 d-flex justify-content-lg-end justify-content-center text-center align-items-center form-input-pad-mob">
                            <input type="file" id="file-input" name="file-input" onChange={chPano}/>
                            <label id="file-input-label" for="file-input" className='text-center'>Upload</label>
                          </div>
                          </div>
                          <div className='d-flex justify-content-center pad-20'>
                            <button className="btn" data-animation="fadeInRight" data-delay=".8s" style={{width:"182px",height:"50px"}} onClick={bookNow}>
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