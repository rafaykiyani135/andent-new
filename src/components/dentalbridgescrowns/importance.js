
import React from 'react'
import b1 from '../../assets/andent-data/b5.png'
import b2 from '../../assets/andent-data/b1.png'
import b3 from '../../assets/andent-data/s3.png'
import b5 from '../../assets/andent-data/s4.png'
import b6 from '../../assets/andent-data/b6.png'
import Slider from 'react-slick'
import { useState,useEffect } from 'react'

function Main (){

    const [isMobile, setIsMobile] = useState(false)
    //choose the screen size 
    const handleResize = () => {
      if (window.innerWidth < 720) {
          setIsMobile(true)
      } else {
          setIsMobile(false)
      }
    }
  
    // create an event listener
    useEffect(() => {
      window.addEventListener("resize", handleResize)

    })

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        slidesToShow: isMobile ? 1 : 3,
        slidesToScroll: isMobile ? 1 : 3
      };

    return(
        <div>
                <section id="blog" className="blog-area p-relative fix pt-90 pb-90">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                    <h2 className='theme-dark'>Benefits of Dental Implants</h2>
                    </div>
                </div>
                </div>
                <div className="row justify-content-center">
                <Slider {...settings}>
                <div className="col-lg-2 col-md-6 d-flex justify-content-center">
                    <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        <div style={{paddingTop:"20px"}}>
                        <h4 className='theme-dark size-18' style={{textAlign:"center"}}>Restored Chewing Function </h4>
                        </div>
                        <div>
                            <p className='theme-dark size-16 text-center'>
                            Experience better biting and chewing capabilities with durable dental crowns
                             and bridges and enjoy your favorite foods without discomfort
                            </p>
                        </div>
                        <div className='d-flex justify-content-center upper-padding'>
                        <img src={b1} alt="dt1" style={{height:"120px",width:"120px"}} className='img-fluid'/>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-6 d-flex justify-content-center">
                    <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        <div style={{paddingTop:"20px"}}>
                        <h4 className='theme-dark size-18' style={{textAlign:"center"}}>Improved Speech</h4>
                        </div>
                        <div>
                            <p className='theme-dark size-16 text-center'>
                            Dental crowns and bridges fill gaps which ensure confident and articulate communication
                            </p>
                        </div>
                        <div className='d-flex justify-content-center upper-padding'>
                        <img src={b6} alt="dt1" style={{height:"120px",width:"120px"}} className='img-fluid'/>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-6 d-flex justify-content-center">
                    <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        <div style={{paddingTop:"20px"}}>
                        <h4 className='theme-dark size-18' style={{textAlign:"center"}}>Enhanced Aesthetics and Confidence</h4>
                        </div>
                        <div>
                            <p className='theme-dark size-16 text-center'>
                            Achieve a natural-looking smile that boosts self-confidence and engage confidently in social interactions
                            </p>
                        </div>
                        <div className='d-flex justify-content-center upper-padding'>
                        <img src={b3} alt="dt1" style={{height:"120px",width:"120px"}} className='img-fluid'/>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-6 d-flex justify-content-center">
                    <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        <div style={{paddingTop:"20px"}}>
                        <h4 className='theme-dark size-18' style={{textAlign:"center"}}>Longevity and Reliability</h4>
                        </div>
                        <div>
                            <p className='theme-dark size-16 text-center'>
                            Our expertly crafted dental crowns and bridges provide durability and reliable performance for years
                            </p>
                        </div>
                        <div className='d-flex justify-content-center upper-padding' style={{paddingBottom:"50px"}}>
                        <img src={b2} alt="dt1" style={{height:"120px",width:"120px"}} className='img-fluid'/>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-6 d-flex justify-content-center">
                    <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        <div style={{paddingTop:"20px"}}>
                        <h4 className='theme-dark size-18' style={{textAlign:"center"}}>Preservation of Oral Health</h4>
                        </div>
                        <div>
                            <p className='theme-dark size-16 text-center'>
                            Preserve jawbone and facial structure, preventing bone
                             loss and maintaining natural tooth alignment
                            </p>
                        </div>
                        <div className='d-flex justify-content-center upper-padding'>
                        <img src={b5} alt="dt1" style={{height:"120px",width:"120px"}} className='img-fluid'/>
                        </div>
                    </div>
                    </div>
                    </Slider>
                </div>
                </div>
        </section>
        </div>
    )
}

export default Main;