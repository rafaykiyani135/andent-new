import img1 from '../../assets/andent-data/benefit1.png'
import img2 from '../../assets/andent-data/benefit2.png'
import img3 from '../../assets/andent-data/benefit3.png'
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

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

    const linkClick = (e) =>{
        window.analytics.track("Link clicked", {
            buttonText: e.currentTarget.title,
            link: e.currentTarget.href,
            clickedOnPage: window.location.pathname
          });
    }


    return(
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                        <h3 className="theme-dark size-60 mob-heading">
                            Benefits of Dental Tourism with Andent
                        </h3>
                    </div>
                </div>
                <div className="row upper-padding justify-content-center align-items-center">
                    <div className="col-lg-4 col-md-12 col-12">
                        <img src={img1} alt="benefitimg" style={{height:"222px",width:"371px"}}/>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 order-lg-first order-md-first mob-top-pad text-center text-lg-start">
                        <h2 className="theme-dark size-16" style={{fontWeight:"700"}}>
                        Affordability
                        </h2>
                        <p className="decent-pad size-16 tourism-benefits" style={{fontWeight:"400",lineHeight:"20px",color:"black"}}>
                        We provide top-tier dental services at up 70% of the cost you'd expect to pay locally. This affordability
                         is one of the key factors driving our reputation as a leading destination for dental tourism.
                        </p>
                    </div>
                </div>
                <div className="row upper-padding justify-content-center align-items-center">
                    <div className="col-lg-4 col-md-12 col-12">
                        <img src={img2} alt="benefitimg" style={{height:"222px",width:"371px"}}/>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 move-up text-center text-lg-start" style={{paddingTop:"20px"}}>
                        <h2 className="theme-dark size-16" style={{fontWeight:"700"}}>
                        Quality Care
                        </h2>
                        <p className="decent-pad size-16 tourism-benefits" style={{fontWeight:"400",lineHeight:"20px",color:"black"}}>
                        Our staff brings over 15 years of experience in various fields of dentistry. Using advanced technology
                         and staying up-to-date with the latest techniques,
                         we ensure that every patient receives the best treatment possible.
                        </p>
                    </div>
                </div>
                <div className="row upper-padding justify-content-center  align-items-center">
                    <div className="col-lg-4 col-md-12 col-12">
                        <img src={img3} alt="benefitimg" style={{height:"222px",width:"371px"}}/>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 move-up order-lg-first order-md-first mob-top-pad text-center text-lg-start">
                        <h2 className="theme-dark size-16" style={{fontWeight:"700"}}>
                        Safety & Security
                        </h2>
                        <p className="decent-pad size-16 tourism-benefits" style={{fontWeight:"400",lineHeight:"20px",color:"black"}}>
                        We follow stringent security protocols and hygiene standards to ensure a safe environment for all our clients.
                         Our clinic is equipped with state-of-the-art dental technology
                         to facilitate accurate diagnosis and precise treatments, making your visit to worry-free.We provide
                          top-tier dental services at up 70% of the cost you'd expect to pay locally. This affordability
                         is one of the key factors driving our reputation as a leading destination for dental tourism.
                        </p>
                    </div>
                </div>
                <div className='row justify-content-center text-center upper-padding'>
                <div className='col-lg-8 col-md-8 col-12 d-flex justify-content-center web-vid move-left-vid'>
                <div className="web-vid" style={{ position: 'relative', paddingTop: '56.25%', width: '100%',borderRadius:"5px" }}>
                    <ReactPlayer
                        url="https://streamable.com/yp0ty3"
                        controls={true}
                        width={isMobile? '100%': '640px'}
                        height={isMobile? '100%' : '360px'}
                        style={{  position: 'absolute', top: 0, left: 0,borderRadius: "10px", overflow:"hidden" }}
                    />
                </div>
                </div>
                </div>
               <div className='row justify-content-center text-center'>
                <div className='col-lg-8 col-md-12 d-flex justify-content-center'>
                <div className='upper-padding'>
                        <button className='btn d-flex align-items-center justify-content-center' style={{ height: "50px" }}>
                            <Link to="/dental-tourism" style={{ color: "white" }} title="Learn More" onClick={linkClick}>
                            <p style={{transform:"translateY(8px)"}}>
                                Learn More
                            </p>
                            </Link>
                        </button>
                        </div>
                </div>
               </div>
            </div>
        </div>
    );
}

export default Main;