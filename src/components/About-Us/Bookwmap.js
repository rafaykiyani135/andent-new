import React from 'react'
import iconone from '../../assets/andent-data/address.png'
import icontwo from '../../assets/andent-data/contactus.png'
import Iframe from 'react-iframe'
import { useState } from 'react'
import { useAlert } from 'react-alert'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function Make() {

  const [Fname,setFname]=useState("")
  const [Lname,setLname]=useState("")
  const [email,setEmail]=useState("")
  const [num,setNum]=useState("")
  const [comment,setComment]=useState("")
  const [imgfile,setFile]=useState(null)
  const alert=useAlert();
  const {t,i18n}=useTranslation();
  const [transform, setTransform] = useState("translateY(-5px)");

  
  useEffect(() => {
    //"translate(-5px,-5px)"
      const lng= i18n.language;

      if (lng==='it') {
        setTransform("translate(-5px,-5px)");
      }
      
      else if (lng==='sq') {
        setTransform("translate(-13px,-5px)");
      }

       else {
        setTransform("translateY(-5px)");
      }
  },[i18n,setTransform]);

  const chFN = (e) => {
    setFname(e.target.value)
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
  const bookNow = async (e) =>{
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', imgfile);
    formData.append('userEmail',email)
    formData.append('firstName',Fname)
    formData.append('lastName',Lname)
    formData.append('phoneNum',num)
    formData.append('message',comment)


    window.analytics.identify(email, {
      firstName: Fname,
      lastName: Lname,
      phoneNum : num,
      comments: comment,
      email : email,
      panoramex : imgfile
    });

    const res = await fetch("/appointment",{
      method:"POST",
      body: formData,
    });

    const data=await res.json();

    if(data.status===401 || !data){
      console.log("error sending email")
      alert.show("Error Sending Email")
    }
    else{
      console.log("email sent")
      alert.show("Email Sent Successfully")
    }

  }

  return (
    <>
            <section id="contact" className="andent-padding">
            <div className="container">
              <div className="row justify-content-around align-items-center">
              <div className="col-lg-4 col-8 order-2 d-flex justify-content-center wow fadeInUp animated upper-padding" data-animation="fadeInDown animated" data-delay=".2s" style={{paddingLeft:"50px",position:"relative",bottom:"20px"}}>
                  <div className='contact-info'>
                  <div className='row justify-content-center'>
                      <div className='col-lg-4 col-8 d-flex justify-content-md-center'>
                      <div className="f-cta-icon">
                        <div>
                        <img src={iconone} alt='none' className='mob-bottom-icon'/>
                        </div>
                      </div>
                      </div>
                      <div className='col-lg-8 col-12 mob-bottom-text clinic-address'>
                        <div className='apt-text text-start'>
                            <h5 className='theme-dark text-center text-sm-center text-lg-start text-md-center' style={{color:"#4E4E50"}}>{t("address")}</h5>
                            <p className='size-16 theme-dark text-center text-lg-start text-md-center address-text' style={{lineHeight:"20px",fontWeight:"400"}}>
                            Rruga Bardhok Biba, Pall. Golden<br/> Trema,
                            Shk. B, Kati 4, Tiranë
                            </p>
                        </div>
                      </div>
                    </div>
                    <br/>
                    <div className='row justify-content-center'>
                      <div className='col-lg-4 col-8 d-flex justify-content-md-center'>
                      <div className="f-cta-icon">
                        <div>
                        <img src={icontwo} alt='none' className='mob-bottom-icon'/>
                        </div>
                      </div>
                      </div>
                      <div className='col-lg-8 col-12 mob-bottom-text contact-us'>
                        <div style={{position:"relative",bottom:"20px"}} className='apt-text'>
                          <h5 className='theme-dark text-sm-center text-lg-start text-md-center' style={{color:"#4E4E50"}}>{t("contactus")}</h5>
                          <p className='size-16 theme-dark text-sm-center text-lg-start text-md-center address-text' style={{lineHeight:"20px",fontWeight:"400"}}>
                          {t("phnum")}<br/> +355(0) 69 375 5065<br/><br/>
                          {t("email")}:<br/>info@andent.al
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className='row upper-padding' style={{position:"relative"}}>
                    <div className="col-lg-12 text-center">
                    <Iframe id="contactsMap" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.004518759625!2d19.814192096789547!3d41.3305151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135031303fe86d0b%3A0x7d2830bb4995e303!2sDentisti%20in%20Albania%20-%20Andent%20Clinic!5e0!3m2!1sen!2s!4v1688988361448!5m2!1sen!2s"
                           width={322}
                           height={303} 
                           style={{ border : "0" }}
                          loading="lazy"
                          className='contacts-map map-pos'
                          >
                    </Iframe>
                    </div>
                    </div>
                    

                  </div>
                </div>

                <div className='row justify-content-center text-center'>
                <div className='col-lg-12 col-12'>
                <div className="section-title center-align">
                      <h2 className='size-60 theme-dark'>{t("bookaptmnt")}</h2>
                    </div>
                    </div>
                </div>
                
                <div className="col-lg-6 order-1 contact-us-pad">
                  <div className="contact">
                  <form  method="post" className="contact-form mt-30" onSubmit={bookNow}>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="contact-field contact-us-pad">
                            <input type="text" id="firstn" name="firstn" placeholder={t("fname")} style={{borderRadius:"15px"}} className='form-small' required onChange={chFN}/>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="contact-field contact-us-pad">
                            <input type="text" id="lastn" name="lastn" placeholder={t("lname")} style={{borderRadius:"15px"}} className='form-small' required onChange={chLN}/>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="contact-field contact-us-pad">
                            <input type="email" id="Email" name="Email" placeholder={t("email")} style={{borderRadius:"15px"}} className='form-small' required onChange={chEmail}/>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="contact-field contact-us-pad">
                            <input type="number" id="Phone Number" name="Phone Number" placeholder={t("number")} className='form-small' style={{borderRadius:"15px"}} required onChange={chPN}/>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="contact-field contact-us-pad">
                            <textarea name="message" id="message" cols={30} rows={10} placeholder={t("comments")} defaultValue={""} className='input-box form-big' style={{borderRadius:"15px"}} onChange={chCmnt}/>
                          </div>
                          <div className='row justify-content-around'>
                          <div className="col-lg-7 col-12 col-sm-12 col-md-12 d-flex justify-content-start justify-content-md-center  justify-content-lg-start">
                          <div className="form-input-pad">
                           <div className='form-big2' style={{borderStyle:"solid"}}>
                              <h4 className="input-text-pad text-start input-text-sides" style={{fontSize:"12px",lineHeight:"18px",fontWeight:"700"}}>
                              {t("file")}<i style={{fontWeight:"400"}}>Png, Jpg, Pdf {imgfile?<p>Uploaded!</p>:<p></p>}</i>
                              </h4>
                           </div>
                          </div>
                          </div>
                          <div className="col-lg-5 col-12 col-sm-12 col-md-12 d-flex justify-content-lg-end justify-content-center text-center align-items-center form-input-pad-mob upload-top-pad">
                            <input type="file" id="file-input" name="file-input" onChange={chPano}/>
                            <label id="file-input-label" for="file-input" className='text-center'>{t("upload")}</label>
                          </div>
                          </div>
                          <div className='d-flex justify-content-center pad-20'>
                            <button className="btn" data-animation="fadeInRight" data-delay=".8s" style={{width:"182px",height:"50px"}} type='submit'>
                              <p style={{transform:transform}}>
                              {t("booknow")}
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