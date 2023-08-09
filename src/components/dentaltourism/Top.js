import React from 'react'
import bg from '../../assets/andent-data/darkenedbg.png'
import { useState } from 'react'
import { useAlert } from 'react-alert'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'


function Main(props) {

    const [number,setNumber] = useState("")
    const [name,setName] = useState("")
    const alert=useAlert();
    const {t,i18n}=useTranslation();


    useEffect(() => {
        const lng= navigator.language;
        i18n.changeLanguage(lng)
      });
    

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
        <section id="home" className="slider-area fix p-relative">
        <div className="slider-active">
        <div className="single-slider slider-bg d-flex align-items-center bg-pos" style={{ backgroundImage: `url(${bg})`,height:"100%",width:"100%",backgroundAttachment:"fixed"}}>
        <div className="container">
            <div className="row justify-content-left text-left align-items-start">
            <div className="col-lg-7 col-md-7 text-lg-start text-center">
                <div className="slider-content s-slider-content mt-20">
                <h5 data-animation="fadeInUp" data-delay=".4s" className="theme" style={{ color: "#6DA7A2" }}>
                    {t("welcome")}
                </h5>
                <h2 data-animation="fadeInUp" data-delay=".4s" style={{ color: "#4E4E50"}} className='mob-hero1'>
                {t("expdentaltourism")}
                </h2>
                <div className='slider-para'>
                <p data-animation="fadeInUp" data-delay=".6s" style={{ color: "#000000", lineHeight: "17pt", fontSize: "16px" ,fontWeight:"400"}}>
                {t("expdentaltourismp")}
                </p>
                </div>
                <br />
                <br />
                <form method="post" onSubmit={getCallBack}>
                <div className="row">
                    <div className="col-lg-4 col-md-4">
                    <input type="number" className="input-box form-control mb-3" placeholder={t("yourphone")} onChange={changeNum} required/>
                    </div>
                    <div className="col-lg-4 col-md-4">
                    <input type="text" className="input-box form-control mb-3" placeholder={t("yourname")} onChange={changeName} required/>
                    </div>
                    <div className="col-lg-4 col-md-4 text-center text-lg-start tourism-hero-pad">
                    <button className="btn" style={{height:"66px"}} type='submit'>
                        <p style={{ color: "white" }}>
                        {t("callback")}
                        </p>
                    </button>
                    </div>
                </div>
                </form>
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