import React from 'react'
import star from '../../assets/andent-data/star.png'
import ReactPlayer from 'react-player'
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';



function Testimonialslider() {

    const stars = Array.from({ length: 5 }, (_, index) => (
        <img index={index} key={index} src={star} alt="icons" style={{paddingRight:"10px",transform:"translateY(-5px)",height:"20px",width:"30px"}}  />
      ));

      const {t}=useTranslation();
      const [testimonials,setTestimonials]=useState([])
      const url = 'https://andent-backend.prodbuilds.com/api/testimonials';

      useEffect(() => {

       const fetchData = async () => {
         try {
           const response = await axios.get(url);
           setTestimonials(response.data.data.slice(0,2));
         } catch (error) {
           console.log("Error fetching data:", error);
         }
       };
     
       fetchData();
     }, [url]);
        
  return (
    

    <>
        <div className='container andent-padding pad-20'>
            <div className='row justify-content-center fadeInUp animated' data-animation="fadeInDown animated" data-delay=".2s">
                <div className='col-lg-8 col-12 text-center'>
                    <h3 className='size-60 theme-dark mob-heading' style={{lineHeight:"72px",fontWeight:"700"}}>
                       {t("testimonial")}
                    </h3>
                </div>
            </div>
            <div className='row test-upper-padding justify-content-center fadeInUp animated' data-animation="fadeInDown animated" data-delay=".2s">
                <div className='col-lg-4 col-md-12'>
                    <div className='row justify-content-center text-center'>
                        <div className='col-lg-6'>
                            <h4 className='size-18 theme-dark text-lg-start move-right' style={{fontWeight:"700"}}>{testimonials.length>0? testimonials[0].attributes.title : ""} &nbsp; &nbsp;</h4>
                        </div>
                        <div className='col-lg-6 text-lg-start'>
                            {stars}
                        </div>
                    </div>
                    <div style={{paddingTop:"15px"}} className='text-center d-flex justify-content-center'>
                        <ReactPlayer
                            url={testimonials.length>0? testimonials[0].attributes.video : ""}
                            controls={true}
                            width='320px'
                            height='400px'
                        />
                    </div>
                </div>
                <div className='col-lg-4 col-md-12 mob-top-pad'>
                    <div className='row justify-content-center text-center'>
                        <div className='col-lg-6'>
                            <h4 className='size-18 theme-dark text-lg-start move-right' style={{fontWeight:"700"}}>{testimonials.length>0? testimonials[1].attributes.title : ""} &nbsp; &nbsp;</h4>
                        </div>
                        <div className='col-lg-6 text-lg-start'>
                            {stars}
                        </div>
                    </div>
                    <div style={{paddingTop:"15px",position:"relative",bottom:"3px"}} className='text-center d-flex justify-content-center'>
                        <ReactPlayer
                            url={testimonials.length>0? testimonials[1].attributes.video : ""}
                            controls={true}
                            width='320px'
                            height='400px'
                        />
                    </div>
                </div>
            </div>

        </div>


    </>
  )
}

export default Testimonialslider