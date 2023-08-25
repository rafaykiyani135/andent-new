import React from 'react'
import bg from '../../assets/andent-data/darkenedbg.png'
import { useState,useEffect } from 'react'
//import { useAlert } from 'react-alert'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'


function Main(props) {

   // const [number,setNumber] = useState("")
   // const [name,setName] = useState("")
   // const alert=useAlert();
    const {t}=useTranslation()
    const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1400) {
        setIsTablet(true);
      } else {
        setIsTablet(false);
      }
    };

    // Initial check
    handleResize();

    // Add event listener to handle resizing
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    

   /* const changeName = (e) => {
        setName(e.target.value)
    }

    const changeNum = (e) => {
        setNumber(e.target.value)
    }
*/
    const contactUs = async (e) => {
        e.preventDefault();

        window.analytics.track("Link clicked", {
            buttonText: e.currentTarget.title,
            link: e.currentTarget.href,
            clickedOnPage: window.location.pathname
          });

    }

  return (
    <>
        <section id="home" className="slider-area fix p-relative">
        <div className="slider-active">
        <div className="single-slider slider-bg d-flex align-items-center bg-pos" style={{ backgroundImage: `url(${bg})`,height:"100%",width:"100%",backgroundAttachment:"fixed",backgroundSize: isTablet ? "auto" : ""}}>
        <div className="container">
            <div className="row justify-content-left text-left align-items-start">
            <div className="col-lg-7 col-md-11 text-lg-start text-center text-md-start">
                <div className="slider-content s-slider-content mt-20">
                <h5 data-animation="fadeInUp" data-delay=".4s" className="theme" style={{ color: "#6DA7A2" }}>
                    {t("welcome")}
                </h5>
                <h2 data-animation="fadeInUp" data-delay=".4s" style={{ color: "#4E4E50"}} className='mob-hero1'>
                {t("expdentaltourism")}
                </h2>
                <div className='slider-para'>
                <p data-animation="fadeInUp" data-delay=".6s" style={{ color: "#000000", lineHeight: "17pt", fontSize: "16px" ,fontWeight:"400"}}>
                {t("expdentaltourismp")}
                </p>
                </div>
                <br />
                <br />
                <div className="col-lg-4 col-md-4 text-center text-md-start text-lg-start tourism-hero-pad">
                    <button className="btn" style={{height:"66px"}} onClick={contactUs} title='ContactUs'>
                      <Link to="/contact">
                        <p style={{ color: "white" }}>
                        {t("contactus")}
                        </p>
                      </Link>
                    </button>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default Main