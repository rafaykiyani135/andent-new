import React from 'react'
import FeaturesservicesTwo from '../../assets/andent-data/aboutustop.png'
import { useState } from 'react'



function About() {

    const [number,setNumber] = useState("")
    const [name,setName] = useState("")

    const changeName = (e) => {
        setName(e.target.value)
    }

    const changeNum = (e) => {
        setNumber(e.target.value)
    }

    const getCallBack = () => {
    window.analytics.identify("Call Back Form Data", {
        Name : name,
        Number : number
    });
    }

  return (
    <>
        <section className=" pt-120 pb-120">
            <div className="container">
                    <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 text-center text-lg-start">
                        <div className="s-about-img p-relative wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s" >
                        <img src={FeaturesservicesTwo} alt="img" className='about-us-top' style={{height:"498px",width:"370px"}}/>
                        <div className="about-text second-about text-left">
                            <span style={{color:"#6DA7A2"}}>10</span>
                            <p style={{color:"#6DA7A2"}}>Years of Experience</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 align-items-start text-center text-lg-start">
                    <div className="">
                            <h5 data-animation="fadeInUp" data-delay=".4s" className='theme' style={{color:"#6DA7A2"}}>
                            Experience Exceptional Dental Care
                            </h5>
                            <h2 data-animation="fadeInUp" data-delay=".4s" className='wel-andent theme-dark mob-heading'>
                            Welcome to Andent
                            </h2>
                            <p data-animation="fadeInUp" data-delay=".6s" style={{color:"#000000",lineHeight:"20px",fontSize:"16px",fontWeight:"400"}}>
                            Since our establishment in 2007, we've dedicated ourselves to transforming smiles and enhancing oral health for over 15,000 patients,
                            both domestically and across Europe. Our unwavering commitment to safety, advanced dental technologies, and European quality standards
                             set us apart as a pioneer in the Albanian dental
                             sector With 15 years of experience, we proudly offer a comprehensive range of dental services to cater to all oral health needs.
                            </p>
                            <br/>
                            <br/>
                            <form action="mail.php" method="post">
                            <div className="row justify-content-lg-start justify-content-center">
                            <div className="col-lg-3 col-md-3">
                                <input type="number" className='input-box form-control mb-3' placeholder='Phone No...' onChange={changeNum} required/>
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <input type="text" className='input-box form-control mb-3' placeholder='Your Name...' onChange={changeName} required/>
                            </div>
                            <div className="col-lg-3 col-md-4 text-center text-lg-start">
                                <button className='btn' style={{height:"66px"}} onClick={getCallBack}>
                                <p style={{color:"white",position:"relative",top:"4px"}}>
                                    Get Call Back
                                </p>
                                </button>
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

export default About