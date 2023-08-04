import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import vid from '../../assets/andent-data/hero section videos/hero1.mp4'
import imgleft from '../../assets/andent-data/hero section videos/hero Images/22_DENTAL CLINIC.jpg';
import imgleft2 from '../../assets/andent-data/hero section videos/hero Images/8_DENTAL CLINIC.jpg';
import imgright from '../../assets/andent-data/hero section videos/hero Images/horizontal rectangle 2.jpg';
import imgright2 from '../../assets/andent-data/hero section videos/hero Images/horizontal rectangle1.jpg';
import vid2 from '../../assets/andent-data/hero section videos/hero2.mp4'
import vid3 from '../../assets/andent-data/hero section videos/hero3.mp4'
import vid4 from '../../assets/andent-data/hero section videos/hero4.mp4'
import { useState } from 'react';
import { useAlert } from 'react-alert';

function Main() {

    
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        arrows: false,
        autoplay: true,
        speed : 8000,
        autoplaySpeed : 2000,
        cssEase:'linear',
        verticalSwiping: true,
        pauseOnHover: false,
      };

      const [number,setNumber] = useState("")
      const [name,setName] = useState("")
      const alert=useAlert();

      const changeName = (e) => {
          setName(e.target.value)
      }
  
      const changeNum = (e) => {
          setNumber(e.target.value)
      }
  
      const getCallBack = async (e) => {
        e.preventDefault();

        window.analytics.identify("Call Back Form Data", {
            Name : name,
            Number : number
        });

        const res = await fetch("/getcallback",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                phoneNum: number,
                Name: name
            })
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
        <section id="home" className="slider-area fix p-relative">
            <div className="slider-active">
            <div className="single-slider slider-bg d-flex align-items-center" style={{backgroundImage: "url(img/slider/slider_bg.png)", backgroundSize: "cover"}}>
                <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-7 col-md-8">
                    <div className="slider-content s-slider-content mt-20 text-center text-lg-start">
                        <h5 data-animation="fadeInUp" data-delay=".4s" className='theme' style={{color:"#6DA7A2"}}>
                        welcome To Andent
                        </h5>
                        <h4 data-animation="fadeInUp" data-delay=".4s" style={{color:"#4E4E50"}} className='mob-hero1'>
                        Our Client
                        </h4>
                        <h2 data-animation="fadeInUp" data-delay=".4s" style={{color:"#F9665E"}} className='mob-hero2'>
                        Testimonials
                        </h2>
                        <div>
                        <p data-animation="fadeInUp" data-delay=".6s" style={{color:"#000000",lineHeight:"17pt",fontSize:"16px"}}>
                        We are dedicated to providing you with the highest standard <br/><br/>

                        carefully crafted dentures to fit your mouth and replicate the appearance
                        of natural teeth. <br/>Take the first step towards your dream smile with our personalized care.
                        </p>
                        </div>
                        <br/>
                        <br/>
                        <form method="post" onSubmit={getCallBack}>
                        <div className="row">
                        <div className="col-lg-4 col-md-3">
                            <input type="number" className='input-box form-control mb-3' placeholder='Your Phone Number...' onChange={changeNum} required/>
                        </div>
                        <div className="col-lg-4 col-md-3">
                            <input className='input-box form-control mb-3' placeholder='Your Name...' onChange={changeName} required/>
                        </div>
                        <div className="col-lg-4 col-md-4 text-center text-lg-start">
                            <button className='btn' style={{height:"66px"}} type='submit'>
                            <p style={{color:"white"}}>
                                Get Call Back
                            </p>
                            </button>
                        </div>
                        </div>
                        </form>
                    </div>
                    </div>
                    <div className="col-lg-5 col-md-4 col-12 upper-padding move-down mob-slider">
                        <div className='slider-container2'>
                        <Slider {...settings}>
                                <div style={{height:"394px",width:"484px"}} className='upper-container'>
                                    <div className=' d-flex'>
                                    <div className='slider-picture' style={{paddingRight:"5px"}}>
                                        <img src={imgleft} style={{}} alt='leftimg1'/>
                                    </div>
                                    <div className="slider-video">
                                    <video  autoPlay loop muted style={{}}>
                                        <source src={vid} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    </div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className="slider-video" >
                                        <video  autoPlay loop muted style={{width:"234px",height:"251px",position:"relative",bottom:"128px",paddingTop:"12px"}}>
                                            <source src={vid2} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                        </div>
                                        <div className='slider-picture2' style={{position:"relative",bottom:"18px",right:"34px"}}>
                                            <img src={imgright} style={{height:"139px",width:"277px",paddingTop:"6px"}} alt='rightimg1'/>
                                        </div>
                                    </div>
                                </div>
                                
                                <div style={{height:"394px",width:"484px"}} className=''>
                                <div className='d-flex'>
                                    <div className='slider-picture' style={{paddingRight:"5px"}}>
                                        <img src={imgleft2} alt='leftimg2' style={{}}/>
                                    </div>
                                    <div className="slider-video">
                                    <video  autoPlay loop muted style={{}}>
                                        <source src={vid3} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div className="slider-video" >
                                    <video  autoPlay loop muted style={{width:"234px",height:"251px",position:"relative",bottom:"128px",paddingTop:"12px"}}>
                                        <source src={vid4} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    </div>
                                    <div className='slider-picture2' style={{position:"relative",bottom:"18px",right:"34px"}}>
                                        <img src={imgright2} style={{height:"139px",width:"277px",paddingTop:"6px"}} alt='rightimg2'/>
                                    </div>
                                </div>
                                </div>
                                
                                
                            </Slider>
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

export default Main