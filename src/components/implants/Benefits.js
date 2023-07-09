import React from 'react'
import b1 from '../../assets/andent-data/b1.png'
import b2 from '../../assets/andent-data/b2.png'
import b3 from '../../assets/andent-data/b3.png'
import b4 from '../../assets/andent-data/b4.png'
import b5 from '../../assets/andent-data/b5.png'
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
                        <h4 className='theme-dark size-18' style={{textAlign:"center"}}>Permanent and Sturdy Foundation</h4>
                        </div>
                        <div>
                            <p className='theme-dark size-16 text-center'>
                            Dental implants provide a long-lasting solution for replacing 
                            missing teeth, offering a secure and stable base.
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
                        <h4 className='theme-dark size-18' style={{textAlign:"center"}}>Improved Functionality</h4>
                        </div>
                        <div>
                            <p className='theme-dark size-16 text-center'>
                            With dental implants, you can regain full chewing ability and restore
                             proper speech, enhancing your overall quality of life.
                            </p>
                        </div>
                        <div className='d-flex justify-content-center upper-padding'>
                        <img src={b2} alt="dt1" style={{height:"120px",width:"120px"}} className='img-fluid'/>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-6 d-flex justify-content-center">
                    <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        <div style={{paddingTop:"20px"}}>
                        <h4 className='theme-dark size-18' style={{textAlign:"center"}}>Prevents Dental Complications</h4>
                        </div>
                        <div>
                            <p className='theme-dark size-16 text-center'>
                            By replacing missing teeth, dental implants prevent surrounding teeth from shifting,
                             maintaining proper bite alignment and avoiding potential jawbone deterioration.
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
                        <h4 className='theme-dark size-18' style={{textAlign:"center"}}>Preserves Dental Structure</h4>
                        </div>
                        <div>
                            <p className='theme-dark size-16 text-center'>
                            Dental implants help preserve the integrity of your dental structure, 
                            preventing the loss of adjacent teeth and supporting optimal oral health.
                            </p>
                        </div>
                        <div className='d-flex justify-content-center upper-padding' style={{paddingBottom:"50px"}}>
                        <img src={b4} alt="dt1" style={{height:"120px",width:"120px"}} className='img-fluid'/>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-6 d-flex justify-content-center">
                    <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        <div style={{paddingTop:"20px"}}>
                        <h4 className='theme-dark size-18' style={{textAlign:"center"}}>Stimulates Jawbone Health</h4>
                        </div>
                        <div>
                            <p className='theme-dark size-16 text-center'>
                            Implants stimulate the jawbone, promoting healthy bone growth
                             and preventing bone loss commonly associated with missing teeth.
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