import React from 'react'
import star from '../../assets/andent-data/star.png'
import ReactPlayer from 'react-player'
import { useTranslation } from 'react-i18next';



function Testimonialslider() {

    const stars = Array.from({ length: 5 }, (_, index) => (
        <img index={index} key={index} src={star} alt="icons" style={{paddingRight:"10px",transform:"translateY(-5px)",height:"20px",width:"30px"}}  />
      ));

      const {t}=useTranslation();
  
  

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
                <div className='col-lg-4 col-md-12'>
                    <div className='row justify-content-center text-center'>
                        <div className='col-lg-6'>
                            <h4 className='size-18 theme-dark text-lg-start move-right' style={{fontWeight:"700"}}>{t("test5name")} &nbsp; &nbsp;</h4>
                        </div>
                        <div className='col-lg-6 text-lg-start'>
                            {stars}
                        </div>
                    </div>
                    <div style={{paddingTop:"15px"}} className='text-center d-flex justify-content-center'>
                        <ReactPlayer
                            url="https://andent-media.s3.us-east-2.amazonaws.com/Giuseppe_testimonial.mp4"
                            controls={true}
                            width='320px'
                            height='400px'
                        />
                    </div>
                    <div className='d-flex justify-content-center tourism-text test-top-pad'>
                    <div style={{paddingTop:"5px"}} className='andent-text text-center testimon-dim  '>
                        <p className='size-16 theme-dark' style={{lineHeight:"20px"}}>
                        {t("test5desc")}
                        </p>
                    </div>
                    </div>
                    
                </div>
                <div className='col-lg-4 col-md-12 mob-top-pad'>
                    <div className='row justify-content-center text-center'>
                        <div className='col-lg-6'>
                            <h4 className='size-18 theme-dark text-lg-start move-right' style={{fontWeight:"700"}}>{t("test6name")} &nbsp; &nbsp;</h4>
                        </div>
                        <div className='col-lg-6 text-lg-start'>
                            {stars}
                        </div>
                    </div>
                    <div style={{paddingTop:"15px"}} className='text-center d-flex justify-content-center'>
                        <ReactPlayer
                                url="https://andent-media.s3.us-east-2.amazonaws.com/Rossella_testimonial.mp4"
                                controls={true}
                                width='320px'
                                height='400px'
                            />
                    </div>
                    <div className='d-flex justify-content-center tourism-text test-top-pad'>
                    <div style={{paddingTop:"5px"}} className='andent-text text-center testimon-dim  '>
                        <p className='size-16 theme-dark' style={{lineHeight:"20px"}}>
                        {t("test6desc")}
                        </p>
                    </div>
                    </div>
                    
                </div>

            <div className='row test-upper-padding justify-content-center fadeInUp animated' data-animation="fadeInDown animated" data-delay=".2s">
                <div className='col-lg-4 col-md-12 mob-top-pad'>
                    <div className='row justify-content-center text-center'>
                        <div className='col-lg-6'>
                            <h4 className='size-18 theme-dark text-lg-start move-right' style={{fontWeight:"700"}}>{t("test7name")} &nbsp; &nbsp;</h4>
                        </div>
                        <div className='col-lg-6 text-lg-start'>
                            {stars}
                        </div>
                    </div>
                    <div style={{paddingTop:"15px"}} className='text-center d-flex justify-content-center'>
                            <ReactPlayer
                                url="https://andent-media.s3.us-east-2.amazonaws.com/Antonio_testimonial.mp4"
                                controls={true}
                                width='320px'
                                height='400px'
                            />
                    </div>
                    <div className='d-flex justify-content-center tourism-text test-top-pad'>
                    <div style={{paddingTop:"5px"}} className='andent-text text-center testimon-dim'>
                        <p className='size-16 theme-dark' style={{lineHeight:"20px"}}>
                        {t("test7desc")}
                        </p>
                    </div>
                    </div>
                    
                </div>
                <div className='col-lg-4 col-md-12 mob-top-pad'>
                    <div className='row justify-content-center text-center'>
                        <div className='col-lg-6'>
                            <h4 className='size-18 theme-dark text-lg-start move-right' style={{fontWeight:"700"}}>{t("test8name")} &nbsp; &nbsp;</h4>
                        </div>
                        <div className='col-lg-6 text-lg-start'>
                            {stars}
                        </div>
                    </div>
                    <div style={{paddingTop:"15px"}} className='text-center d-flex justify-content-center'>
                            <ReactPlayer
                                url="https://andent-media.s3.us-east-2.amazonaws.com/Mikela_testimonial.mp4"
                                controls={true}
                                width='320px'
                                height='400px'
                            />
                    </div>
                    <div className='d-flex justify-content-center tourism-text test-top-pad'>
                    <div style={{paddingTop:"5px"}} className='andent-text text-center testimon-dim  '>
                        <p className='size-16 theme-dark' style={{lineHeight:"20px"}}>
                        {t("test8desc")}
                        </p>
                    </div>
                    </div>
                    
                </div>
            </div>

            <div className='row test-upper-padding justify-content-center fadeInUp animated' data-animation="fadeInDown animated" data-delay=".2s">
                <div className='col-lg-4 col-md-12 mob-top-pad'>
                    <div className='row justify-content-center text-center'>
                        <div className='col-lg-6 text-lg-start'>
                            <h4 className='size-18 theme-dark text-lg-start move-right' style={{fontWeight:"700"}}>{t("test9name")} &nbsp; &nbsp;</h4>
                        </div>
                        <div className='col-lg-6'>
                            {stars}
                        </div>
                    </div>
                    <div style={{paddingTop:"15px"}} className='text-center d-flex justify-content-center'>
                            <ReactPlayer
                                url="https://andent-media.s3.us-east-2.amazonaws.com/Mateo_testimonial.mp4"
                                controls={true}
                                width='320px'
                                height='400px'
                            />
                    </div>
                    <div className='d-flex justify-content-center tourism-text test-top-pad'>
                    <div style={{paddingTop:"5px"}} className='andent-text text-center testimon-dim  '>
                        <p className='size-16 theme-dark' style={{lineHeight:"20px"}}>
                        {t("test9desc")}
                        </p>
                    </div>
                    </div>
                    
                </div>
                <div className='col-lg-4 col-md-12 mob-top-pad'>
                    <div className='row justify-content-center text-center'>
                        <div className='col-lg-6'>
                            <h4 className='size-18 theme-dark text-lg-start move-right' style={{fontWeight:"700"}}>{t("test10name")} &nbsp; &nbsp;</h4>
                        </div>
                        <div className='col-lg-6 text-lg-start'>
                            {stars}
                        </div>
                    </div>
                    <div style={{paddingTop:"15px"}} className='text-center d-flex justify-content-center'>
                            <ReactPlayer
                                url="https://andent-media.s3.us-east-2.amazonaws.com/George_testimonia.mp4"
                                controls={true}
                                width='320px'
                                height='400px'
                            />
                    </div>
                    <div className='d-flex justify-content-center tourism-text test-top-pad'>
                    <div style={{paddingTop:"5px"}} className='andent-text text-center  testimon-dim  '>
                        <p className='size-16 theme-dark' style={{lineHeight:"20px"}}>
                        {t("test10desc")}
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Testimonialslider