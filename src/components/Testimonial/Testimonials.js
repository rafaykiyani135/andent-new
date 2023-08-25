import React from 'react'
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { useState,useEffect } from 'react';
import Child from './Child'



function Testimonialslider() {

    
      const {t}=useTranslation();
      const [testimonials,setTestimonials]=useState([])

      const url = 'https://andent-backend.prodbuilds.com/api/testimonials';

      useEffect(() => {

       const fetchData = async () => {
         try {
           const response = await axios.get(url);
           setTestimonials(response.data.data);

         } catch (error) {
           console.log("Error fetching data:", error);
         }
       };
     
       fetchData();
     }, [url]);

     const testimonialElements = [];
        for (let i = 0; i < testimonials.length; i += 2) {
        const firstTestimonial = testimonials[i];
        const secondTestimonial = i + 1 < testimonials.length ? testimonials[i + 1] : null;

        testimonialElements.push(
            <Child
            link={firstTestimonial.attributes.video}
            name={firstTestimonial.attributes.title}
            link2={secondTestimonial ? secondTestimonial.attributes.video : ""}
            name2={secondTestimonial ? secondTestimonial.attributes.title : ""}
            key={testimonialElements.length}
            />
        );
        }

  return (

    <>
        <div className='container andent-padding mob-top-pad'>
            <div className='row justify-content-center fadeInUp animated' data-animation="fadeInDown animated" data-delay=".2s">
                <div className='col-lg-8 col-12 text-center'>
                    <h3 className='size-60 theme-dark mob-heading' style={{lineHeight:"72px",fontWeight:"700"}}>
                        {t("testimonial")}
                    </h3>
                </div>
            </div>
            <div className='row test-upper-padding justify-content-center fadeInUp animated' data-animation="fadeInDown animated" data-delay=".2s">
                {testimonialElements}
            </div>
        </div>
    </>
  )
}

export default Testimonialslider