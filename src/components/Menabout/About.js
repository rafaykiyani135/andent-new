import React from 'react'
import FeaturesservicesTwo from '../../assets/andent-data/aboutustop.png'
//import { useState } from 'react'
//import { useAlert } from 'react-alert'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


function About() {

 //   const [number,setNumber] = useState("")
  //  const [name,setName] = useState("")
  //  const alert=useAlert();
    const {t}=useTranslation();

/*
    const changeName = (e) => {
        setName(e.target.value)
    }

    const changeNum = (e) => {
        setNumber(e.target.value)
    }
*/
    const contactUs = async (e) => {
        e.preventDefault();

        window.analytics.track("Link clicked", {
            buttonText: e.currentTarget.title,
            link: e.currentTarget.href,
            clickedOnPage: window.location.pathname
          });

    }  

  return (
    <>
        <section className=" pt-120 pb-120">
            <div className="container">
                    <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 text-center text-lg-start hero-left-pos">
                        <div className="s-about-img p-relative wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s" >
                        <img src={FeaturesservicesTwo} alt="img" className='about-us-top' style={{height:"auto",width:"370px"}}/>
                        <div className="about-text second-about  text-left">
                            <span style={{color:"#6DA7A2"}}>10</span>
                            <p style={{color:"#6DA7A2"}}>{t("yearsofexperience")}</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 align-items-start text-center text-lg-start hero-left-pos">
                    <div className="">
                            <h5 data-animation="fadeInUp" data-delay=".4s" className='theme' style={{color:"#6DA7A2"}}>
                            {t("whyusherop")}
                            </h5>
                            <h2 data-animation="fadeInUp" data-delay=".4s" className='wel-andent theme-dark mob-heading'>
                            {t("welcome")}
                            </h2>
                            <p data-animation="fadeInUp" data-delay=".6s" style={{color:"#000000",lineHeight:"20px",fontSize:"16px",fontWeight:"400"}}>
                            {t("whyusherop1")}
                            </p>
                            <br/>
                            <br/>
                            <div className='row justify-content-center'>
                            <div className="col-lg-12 col-md-12">
                                <button className='btn' style={{height:"58px"}} title='ContactUs' onClick={contactUs}>
                                <Link to="contact">
                                <p style={{color:"white"}}>
                                {t("contactus")}
                                </p>
                                </Link>
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
         </section>
    
    </>
  )
}

export default About