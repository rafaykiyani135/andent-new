import React from 'react'
import star from '../../assets/andent-data/star.png'
import ReactPlayer from 'react-player'



function Testimonialslider() {

    const stars = Array.from({ length: 5 }, (_, index) => (
        <img index={index} src={star} alt="icons" style={{paddingRight:"10px",transform:"translateY(-5px)",height:"25px",width:"35px"}}  />
      ));

  return (
    

    <>
        <div className='container andent-padding pad-20'>
            <div className='row justify-content-center fadeInUp animated' data-animation="fadeInDown animated" data-delay=".2s">
                <div className='col-lg-8 col-12 text-center'>
                    <h3 className='size-60 theme-dark mob-heading' style={{lineHeight:"72px",fontWeight:"700"}}>
                        Testimonials
                    </h3>
                </div>
            </div>
            <div className='row upper-padding justify-content-center fadeInUp animated' data-animation="fadeInDown animated" data-delay=".2s">
                <div className='col-lg-4 col-md-12'>
                    <div className='row justify-content-center text-center'>
                        <div className='col-lg-6'>
                            <h4 className='size-18 theme-dark text-lg-start' style={{fontWeight:"700"}}>Gaetano Lolimitica &nbsp; &nbsp;</h4>
                        </div>
                        <div className='col-lg-6'>
                            {stars}
                        </div>
                    </div>
                    <div style={{paddingTop:"15px"}} className='text-center d-flex justify-content-center'>
                        <ReactPlayer
                            url="https://streamable.com/vfuq3g"
                            controls={true}
                            width='400px'
                            height='500px'
                        />
                    </div>
                    <div style={{paddingTop:"10px"}} className='andent-text text-center testimon-dim   '>
                        <p className='size-16 theme-dark' style={{lineHeight:"20px"}}>
                        Dentures are removable dental appliances that are crafted to resemble your
                        natural teeth and gums. They are custom-made to fit your unique mouth shape
                        and are designed to restore your smile and ability to chew and speak properly.
                        Dentures are made from durable materials that are both comfortable and functional.
                        </p>
                    </div>
                </div>
                <div className='col-lg-4 col-md-12'>
                    <div className='row justify-content-center text-center'>
                        <div className='col-lg-6'>
                            <h4 className='size-18 theme-dark text-lg-start' style={{fontWeight:"700"}}>Roberta &nbsp; &nbsp;</h4>
                        </div>
                        <div className='col-lg-6'>
                            {stars}
                        </div>
                    </div>
                    <div style={{paddingTop:"15px"}} className='text-center d-flex justify-content-center'>
                        <ReactPlayer
                            url="https://streamable.com/3lvdou"
                            controls={true}
                            width='400px'
                            height='500px'
                        />
                    </div>
                    <div style={{paddingTop:"10px"}} className='andent-text text-center testimon-dim   '>
                        <p className='size-16 theme-dark' style={{lineHeight:"20px"}}>
                        Dentures are removable dental appliances that are crafted to resemble your
                        natural teeth and gums. They are custom-made to fit your unique mouth shape
                        and are designed to restore your smile and ability to chew and speak properly.
                        Dentures are made from durable materials that are both comfortable and functional.
                        </p>
                    </div>
                </div>
            </div>

        </div>


    </>
  )
}

export default Testimonialslider