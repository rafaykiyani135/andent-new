import React from 'react'
import star from '../../assets/andent-data/star.png'
import test1 from '../../assets/andent-data/test1.png'
import test2 from '../../assets/andent-data/test2.png'



function Testimonialslider() {

    const stars = Array.from({ length: 5 }, (_, index) => (
        <img index={index} src={star} alt="icons" style={{paddingRight:"10px",transform:"translateY(-5px)"}}/>
      ));

  return (
    

    <>
        <div className='container andent-padding pad-20'>
            <div className='row justify-content-center fadeInUp animated' data-animation="fadeInDown animated" data-delay=".2s">
                <div className='col-lg-4 col-md-12'>
                    <h4 className='size-20 theme-dark'>Gaetano Lolimitica &nbsp; &nbsp; {stars}</h4>
                    <div style={{paddingTop:"15px"}} className='text-center'>
                        <img src={test1} alt='testimg'/>
                    </div>
                    <div style={{paddingTop:"5px"}} className='andent-text text-center testimon-dim'>
                        <p className='size-16 theme-dark' style={{lineHeight:"20px"}}>
                        Dentures are removable dental appliances that are crafted to resemble your
                        natural teeth and gums. They are custom-made to fit your unique mouth shape
                        and are designed to restore your smile and ability to chew and speak properly.
                        Dentures are made from durable materials that are both comfortable and functional.
                        </p>
                    </div>
                </div>
                <div className='col-lg-4 col-md-12'>
                    <h4 className='size-20 theme-dark'>Gaetano Lolimitica &nbsp; &nbsp; {stars}</h4>
                    <div style={{paddingTop:"15px"}} className='text-center'>
                        <img src={test2} alt='testimg'/>
                    </div>
                    <div style={{paddingTop:"5px"}} className='andent-text text-center testimon-dim'>
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