import w1 from '../../assets/andent-data/w1.png'
import w2 from '../../assets/andent-data/w2.png'
import w3 from '../../assets/andent-data/w3.png'
import w4 from '../../assets/andent-data/w41.png'
import { useEffect,useState } from 'react'
import { useTranslation } from 'react-i18next';

function Main(){

    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false); // Added isTablet state variable
    const { t } = useTranslation();

    // Choose the screen size 
    const handleResize = () => {
    const screenWidth = window.innerWidth;
    setIsMobile(screenWidth < 720);
    setIsTablet(screenWidth >= 720 && screenWidth < 1024);
    }

    // Create an event listener
    useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => {
        window.removeEventListener("resize", handleResize);
    };
    }, []);

    const customStyle = {
    height: isMobile ? '200px' : isTablet ? '350px' : '200px',
    width: isMobile ? '70%' : isTablet ? '400px' : '400px'
    };

    return(
        <div>
                <section id="blog" className="blog-area p-relative fix pt-90 pb-90">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                    <h2 className='theme-dark mob-heading'>{t("implantswork")}</h2>
                    </div>
                </div>
                </div>
                <div className="row justify-content-around">
                <div className="col-lg-2 col-md-6 d-flex justify-content-center">
                    <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        <div className='d-flex justify-content-center justify-content-md-start upper-padding'>
                        <img src={w1} alt="dt1" style={customStyle} className='img-fluid'/>
                        </div>
                        <div style={{paddingTop:"20px"}}>
                        <h4 className='theme-dark size-18' style={{textAlign:"center"}}>{t("impwork1")}</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 d-flex justify-content-center">
                    <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        <div className='d-flex justify-content-center justify-content-md-start upper-padding'>
                        <img src={w2} alt="dt1" style={customStyle} className='img-fluid'/>
                        </div>
                        <div style={{paddingTop:"20px"}}>
                        <h4 className='theme-dark size-18' style={{textAlign:"center"}}>{t("impwork2")}</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 d-flex justify-content-center">
                    <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        <div className='d-flex justify-content-center justify-content-md-start upper-padding'>
                        <img src={w3} alt="dt1" style={customStyle} className='img-fluid'/>
                        </div>
                        <div style={{paddingTop:"20px"}}>
                        <h4 className='theme-dark size-18' style={{textAlign:"center"}}>{t("impwork3")}</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 d-flex justify-content-center">
                    <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        <div className='d-flex justify-content-center justify-content-md-start upper-padding'>
                        <img src={w4} alt="dt1" style={customStyle} className='img-fluid'/>
                        </div>
                        <div style={{paddingTop:"20px"}} className=''>
                        <h4 className='theme-dark size-18' style={{textAlign:"center"}}>{t("impwork4")}</h4>
                        </div>
                    </div>
                </div>
                </div>
                </div>
        </section>
        </div>
    )
}

export default Main;