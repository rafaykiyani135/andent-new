import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgleft1 from '../../assets/andent-data/herosectionimg/Images/slider image 1.png'
import imgleft2 from '../../assets/andent-data/herosectionimg/Images/slider image 5.png'
import imgleft3 from '../../assets/andent-data/herosectionimg/Images/slider image 2.png'
import imgleft4 from '../../assets/andent-data/herosectionimg/Images/slider image 6.png'
import imgright1 from '../../assets/andent-data/herosectionimg/Images/slider image 3.png'
import imgright2 from '../../assets/andent-data/herosectionimg/Images/slider image 4.png'
import imgright3 from '../../assets/andent-data/herosectionimg/Images/slider image 7.png'
import imgright4 from '../../assets/andent-data/herosectionimg/Images/slider image 8.png'
import filler from '../../assets/andent-data/herosectionimg/Images/last image 200px.png'
import vidleft1 from '../../assets/andent-data/hero section videos/Videos/video1.mov'
import vidleft2 from '../../assets/andent-data/hero section videos/Videos/video2.mov'
import vidright1 from '../../assets/andent-data/hero section videos/Videos/video3.mov'
import vidright2 from '../../assets/andent-data/hero section videos/Videos/video4.mov'
import { useState } from 'react';
import { useAlert } from 'react-alert';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

function Main(props) {

    const {t,i18n}=useTranslation();
  
    useEffect(() => {
        const lng= navigator.language;
        i18n.changeLanguage(lng)
    });

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

        window.analytics.identify(name, {
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
            <section id="home" className="slider-area fix p-relative mob-bottom-pad">
                <div className="slider-active">
                <div className="single-slider slider-bg d-flex align-items-start align-items-lg-center">
                   <div className="container">
                    <div className="row justify-content-around align-items-center">
                        <div className="col-lg-6 col-md-12 col-12 text-center text-lg-start text-md-start hero-left-pos">
                        <div className="slider-content s-slider-content mt-20">
                            <h5 data-animation="fadeInUp" data-delay=".4s" className='theme' style={{color:"#6DA7A2"}}>
                            {t("welcome")}
                            </h5>
                            <div className='slider-head'>
                                <h1 data-animation="fadeInUp" data-delay=".4s" style={{color:"#4E4E50"}} className='mob-hero1'>
                                {props.heading}{props.span?  <span> <span className='mob-hero2span' style={{color:"#F9665E"}}>{props.quality}</span> <span style={{color:"#4E4E50"}}> {props.and} </span> <span style={{color:"#F9665E"}} className='mob-hero2span'> {props.comfort} </span></span>  : ""}
                                </h1>
                            </div>
                            <h4 data-animation="fadeInUp" data-delay=".4s" style={{color:"#F9665E"}} className='mob-hero2'>
                            {t("saveupto70")}
                            </h4>
                            <div className='slider-para'>
                                 <p data-animation="fadeInUp" data-delay=".6s" style={{color:"#000000",lineHeight:"17pt",fontSize:"16px"}}>
                                {props.description}
                                </p>
                            </div>
                            <br/>
                            <br/>
                            <form method="post" onSubmit={getCallBack}>
                            <div className="row">
                            <div className="col-lg-4 col-md-3">
                                <input type="number" className='input-box form-control mb-3' placeholder={t("yourphone")} onChange={changeNum} required/>
                            </div>
                            <div className="col-lg-4 col-md-3">
                                <input className='input-box form-control mb-3' placeholder={t("yourname")} onChange={changeName} required/>
                            </div>
                            <div className="col-lg-4 col-md-4 text-center text-lg-start">
                                <button className='btn' style={{height:"66px"}} type='submit'>
                                <p style={{color:"white"}}>
                                    {t("callback")}
                                </p>
                                </button>
                            </div>
                            </div>
                            </form>

                        </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 slider-container d-flex justify-content-lg-start upper-padding hero-right-pos" >
                        <div className="row justify-content-lg-center justify-content-start">
                        <div className="slider-content-new col-lg-6 col-6 text-lg-center slider-left justify-content-lg-center">
                            <img className='slider-content-dim' alt='imgleft1' src={imgleft1}></img>
                            <video className='slider-content-vid-dim' autoPlay loop muted>
                                <source src={vidleft1}  type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <img className='slider-content-dim' alt='imgleft2' src={imgleft2}></img>
                            <img className='slider-content-dim' alt='imgleft3' src={imgleft3}></img>
                            <video className='slider-content-vid-dim' autoPlay loop muted>
                                <source src={vidleft2}  type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <img className='slider-content-dim' alt='imgleft4' src={imgleft4}></img>
                            <img className='slider-content-left-filler-dim' alt='imgrightfiller' src={filler}></img>
                        </div>
                        <div className="slider-content-new col-lg-6 col-6 text-lg-center slider-right justify-content-lg-center" >
                            <img className='slider-content-filler-dim' alt='imgrightfiller' src={filler}></img>
                            <img className='slider-content-dim' alt='imgright1' src={imgright1}></img>
                            <img className='slider-content-dim' alt='imgright2' src={imgright2}></img>
                            <video className='slider-content-vid-dim' autoPlay loop muted>
                                <source src={vidright1}  type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <img className='slider-content-dim' alt='imgright3' src={imgright3}></img>
                            <img className='slider-content-dim' alt='imgright4' src={imgright4}></img>
                            <video className='slider-content-vid-dim' autoPlay loop muted>
                                <source src={vidright2}  type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
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