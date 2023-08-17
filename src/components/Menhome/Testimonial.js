import React from 'react'
import star from '../../assets/andent-data/star.png'
import ReactPlayer from 'react-player'
import { useTranslation } from 'react-i18next';



function Testimonialslider() {

    const stars = Array.from({ length: 5 }, (_, index) => (
        <img index={index} src={star} alt="icons" style={{paddingRight:"10px",transform:"translateY(-5px)",height:"20px",width:"30px"}}  />
      ));

      const {t}=useTranslation();
  

        
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
                            <h4 className='size-18 theme-dark text-lg-start move-right' style={{fontWeight:"700"}}>{t("test1name")} &nbsp; &nbsp;</h4>
                        </div>
                        <div className='col-lg-6 text-lg-start'>
                            {stars}
                        </div>
                    </div>
                    <div style={{paddingTop:"15px"}} className='text-center d-flex justify-content-center'>
                        <ReactPlayer
                            url="https://streamable.com/vfuq3g"
                            controls={true}
                            width='400px'
                            height='400px'
                        />
                    </div>
                    <div className='d-flex justify-content-center test-top-pad'>
                    <div style={{paddingTop:"10px"}} className='andent-text text-center testimon-dim tourism-text'>
                        <p className='size-16 theme-dark' style={{lineHeight:"20px"}}>
                        {t("test1desc")}
                        </p>
                    </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-12 mob-top-pad'>
                    <div className='row justify-content-center text-center'>
                        <div className='col-lg-6'>
                            <h4 className='size-18 theme-dark text-lg-start move-right' style={{fontWeight:"700"}}>{t("test2name")} &nbsp; &nbsp;</h4>
                        </div>
                        <div className='col-lg-6 text-lg-start'>
                            {stars}
                        </div>
                    </div>
                    <div style={{paddingTop:"15px",position:"relative",bottom:"3px"}} className='text-center d-flex justify-content-center'>
                        <ReactPlayer
                            url="https://streamable.com/3lvdou"
                            controls={true}
                            width='400px'
                            height='400px'
                        />
                    </div>
                    <div className='d-flex justify-content-center test-top-pad'>
                        <div style={{paddingTop:"10px"}} className='andent-text text-center testimon-dim tourism-text'>
                        <p className='size-16 theme-dark' style={{lineHeight:"20px"}}>
                        {t("test2desc")}
                        </p>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>


    </>
  )
}

export default Testimonialslider