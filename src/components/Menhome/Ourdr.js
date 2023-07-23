import React from 'react'
import { useState,useEffect } from 'react'
import Slider from 'react-slick'
import dr1 from '../../assets/andent-data/dr1.jpg'
import dr2 from '../../assets/andent-data/dr2.jpg'
import dr3 from '../../assets/andent-data/dr3.jpg'
import dr4 from '../../assets/andent-data/dr4.jpg'
import dr5 from '../../assets/andent-data/dr5.jpg'
import dr6 from '../../assets/andent-data/dr6.jpg'
import dr7 from '../../assets/andent-data/dr7.jpg'
import dr8 from '../../assets/andent-data/dr8.jpg'
import dr9 from '../../assets/andent-data/dr9.jpg'

function Ourdr() {
    
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
        speed: 4000,
        autoplaySpeed: 2000,
        slidesToShow: isMobile ? 1 : 3,
        slidesToScroll: isMobile ? 1 : 1
      };

    return (

        

        <>
        <div className='container andent-padding'>
            <div className='row justify-content-center text-center'>
            <div className='col-lg-8 col-12'>
                <h2 className='theme-dark size-60 mob-heading'>
                Meet Our Team
                </h2>
            </div>
            </div>
            <div className='row justify-content-center' style={{paddingTop:"50px",paddingBottom:"50px"}}>
            <div className=''>
            <Slider {...settings}>
            <div className='col-lg-3 col-md-6 col-12 text-center'>
                <div className='d-flex justify-content-center'>
                <img src={dr1} alt='team-img' className='img-fluid' style={{ height: "188px", width: "312px", borderRadius: "10px" }} />
                </div>
                <div style={{ paddingTop: "15px" }}>
                    <h3 className='theme-dark' style={{ fontSize: "18px" }}>
                    Anduela Çurmaku
                    </h3>
                    <p className='theme-andent' style={{ fontSize: "16px" }}>
                    Dentistry
                    </p>
                </div>
            </div>
            <div className='col-lg-3 col-md-6 col-12 text-center'>
                <div className='d-flex justify-content-center'>
                <img src={dr2} alt='team-img' className='img-fluid' style={{ height: "188px", width: "312px", borderRadius: "10px" }} />
                </div>
                <div style={{ paddingTop: "15px" }}>
                    <h3 className='theme-dark' style={{ fontSize: "18px" }}>
                    Blerta Çurmaku
                    </h3>
                    <p className='theme-andent' style={{ fontSize: "16px" }}>
                    Secretary
                    </p>
                </div>
            </div>
            <div className='col-lg-3 col-md-6 col-12 text-center'>
                <div className='d-flex justify-content-center'>
                <img src={dr3} alt='team-img' className='img-fluid' style={{ height: "188px", width: "312px", borderRadius: "10px" }} />
                </div>
                <div style={{ paddingTop: "15px" }}>
                    <h3 className='theme-dark' style={{ fontSize: "18px" }}>
                    Ermal Cuadari
                    </h3>
                    <p className='theme-andent' style={{ fontSize: "16px" }}>
                    Dental technician
                    </p>
                </div>
            </div>
            <div className='col-lg-3 col-md-6 col-12 text-center'>
                <div className='d-flex justify-content-center'>
                <img src={dr4} alt='team-img' className='img-fluid' style={{ height: "188px", width: "312px", borderRadius: "10px" }} />
                </div>
                <div style={{ paddingTop: "15px" }}>
                    <h3 className='theme-dark' style={{ fontSize: "18px" }}>
                    Laurent Bixheku
                    </h3>
                    <p className='theme-andent' style={{ fontSize: "16px" }}>
                    Dentistry
                    </p>
                </div>
            </div>
            <div className='col-lg-3 col-md-6 col-12 text-center'>
                <div className='d-flex justify-content-center'>
                <img src={dr5} alt='team-img' className='img-fluid' style={{ height: "188px", width: "312px", borderRadius: "10px" }} />
                </div>
                <div style={{ paddingTop: "15px" }}>
                    <h3 className='theme-dark' style={{ fontSize: "18px" }}>
                    Leonard Maci
                    </h3>
                    <p className='theme-andent' style={{ fontSize: "16px" }}>
                    Dental tourism clinic coordinator
                    </p>
                </div>
            </div>
            <div className='col-lg-3 col-md-6 col-12 text-center'>
                <div className='d-flex justify-content-center'>
                <img src={dr6} alt='team-img' className='img-fluid' style={{ height: "188px", width: "312px", borderRadius: "10px" }} />
                </div>
                <div style={{ paddingTop: "15px" }}>
                    <h3 className='theme-dark' style={{ fontSize: "18px" }}>
                    Manuela Manjani
                    </h3>
                    <p className='theme-andent' style={{ fontSize: "16px" }}>
                        Dentistry
                    </p>
                </div>
            </div>
            <div className='col-lg-3 col-md-6 col-12 text-center'>
                <div className='d-flex justify-content-center'>
                <img src={dr7} alt='team-img' className='img-fluid' style={{ height: "188px", width: "312px", borderRadius: "10px" }} />
                </div>
                <div style={{ paddingTop: "15px" }}>
                    <h3 className='theme-dark' style={{ fontSize: "18px" }}>
                    Marvin Dedaj
                    </h3>
                    <p className='theme-andent' style={{ fontSize: "16px" }}>
                    Dental Assistant
                    </p>
                </div>
            </div>
            <div className='col-lg-3 col-md-6 col-12 text-center'>
                <div className='d-flex justify-content-center'>
                <img src={dr8} alt='team-img' className='img-fluid' style={{ height: "188px", width: "312px", borderRadius: "10px" }} />
                </div>
                <div style={{ paddingTop: "15px" }}>
                    <h3 className='theme-dark' style={{ fontSize: "18px" }}>
                    Rudina Bitri
                    </h3>
                    <p className='theme-andent' style={{ fontSize: "16px" }}>
                    Front desk clerk
                    </p>
                </div>
            </div>
            <div className='col-lg-3 col-md-6 col-12 text-center'>
                <div className='d-flex justify-content-center'>
                <img src={dr9} alt='team-img' className='img-fluid' style={{ height: "188px", width: "312px", borderRadius: "10px" }} />
                </div>
                <div style={{ paddingTop: "15px" }}>
                    <h3 className='theme-dark' style={{ fontSize: "18px" }}>
                    Safjela Baja
                    </h3>
                    <p className='theme-andent' style={{ fontSize: "16px" }}>
                    Dentistry
                    </p>
                </div>
            </div>
        </Slider>
            </div>
            </div>
        </div>
        </>
    )
}

export default Ourdr