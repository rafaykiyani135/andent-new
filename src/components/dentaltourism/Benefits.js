import img1 from '../../assets/andent-data/benefit1.png'
import img2 from '../../assets/andent-data/benefit2.png'
import img3 from '../../assets/andent-data/benefit3.png'
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Main (){

    const {t}=useTranslation();

    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    // choose the screen size 
    const handleResize = () => {
        const screenWidth = window.innerWidth;
        setIsMobile(screenWidth < 720);
        setIsTablet(screenWidth >= 720 && screenWidth < 1024);
    }

    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize(); // Initial check
        return () => {
        window.removeEventListener("resize", handleResize);
        };
    }, []);

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
                            {t("tourismbenefits")}
                        </h3>
                    </div>
                </div>
                <div className="row upper-padding justify-content-center align-items-center">
                    <div className="col-lg-4 col-md-12 col-12 text-lg-start text-md-center">
                        <img src={img1} alt="benefitimg" style={{height:"auto",width:"371px"}}/>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 order-lg-first order-md-first mob-top-pad text-center text-lg-start">
                        <h2 className="theme-dark size-16" style={{fontWeight:"700"}}>
                        {t("tourismben1")}
                        </h2>
                        <p className="decent-pad size-16 tourism-benefits" style={{fontWeight:"400",lineHeight:"20px",color:"black"}}>
                        {t("tourismben1p")}
                        </p>
                    </div>
                </div>
                <div className="row upper-padding justify-content-center align-items-center">
                    <div className="col-lg-4 col-md-12 col-12 text-lg-start text-md-center order-lg-first">
                        <img src={img2} alt="benefitimg" style={{height:"auto",width:"371px"}}/>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 move-up text-center text-lg-start order-md-first" style={{paddingTop:"20px"}}>
                        <h2 className="theme-dark size-16" style={{fontWeight:"700"}}>
                        {t("tourismben2")}
                        </h2>
                        <p className="decent-pad size-16 tourism-benefits" style={{fontWeight:"400",lineHeight:"20px",color:"black"}}>
                        {t("tourismben2p")}
                        </p>
                    </div>
                </div>
                <div className="row upper-padding justify-content-center  align-items-center">
                    <div className="col-lg-4 col-md-12 col-12 text-lg-start text-md-center">
                        <img src={img3} alt="benefitimg" style={{height:"auto",width:"371px"}}/>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 move-up order-lg-first order-md-first mob-top-pad text-center text-lg-start">
                        <h2 className="theme-dark size-16" style={{fontWeight:"700"}}>
                        {t("tourismben3")}
                        </h2>
                        <p className="decent-pad size-16 tourism-benefits" style={{fontWeight:"400",lineHeight:"20px",color:"black"}}>
                        {t("tourismben3p")}
                        </p>
                    </div>
                </div>
                <div className='row justify-content-center text-center upper-padding'>
                <div className='col-lg-8 col-md-8 col-12 d-flex justify-content-center'>
                    <div
                    className="web-vid"
                    style={{
                        position: 'relative',
                        paddingTop: isMobile ? '56.25%' : isTablet? '56.25%' : '',
                        width: isMobile ? '100%' : '584px', // Width for mobile remains 100%, for others it's 640px
                    }}
                    >
                    <ReactPlayer
                        url="https://andent-media.s3.us-east-2.amazonaws.com/Antdent.mp4"
                        controls={true}
                        width="100%" // Keep the width consistent, it will adjust according to its parent container
                        height="100%" // Keep the height consistent, it will adjust according to its parent container
                        style={{ position: 'absolute', top: 0, left: 0, borderRadius: '10px', overflow: 'hidden' }}
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
                            {t("learnmore")}
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