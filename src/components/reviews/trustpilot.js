import { useState,useEffect } from "react"
import { useTranslation } from "react-i18next";




function Review() {
  const {t}=useTranslation();


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
  },)


  return (
    <div className='container andent-padding'>
    <div className="row justify-content-center">
      <div className="col-lg-12 text-center">
        <h1 className="theme-dark size-60 mob-heading">
          {t("reviews")}
        </h1>
      </div>
    </div>
    <div className="row justify-content-center">
    <div className='col-lg-12 text-center'>
    <iframe src="https://cdn.trustindex.io/amp-widget.html#14a092a12fb16057ce863991d95" title="trustpilot reviews" sandbox='allow-scripts allow-same-origin' scrolling="no" height={isMobile ?  "506": "225"}></iframe>
    </div>
    </div>
    
    <div className="row justify-content-center">
    <div className='col-lg-12 text-center'>
    <iframe src='https://cdn.trustindex.io/amp-widget.html#492565312cf460514b764dc37a2' title="trustpilot reviews" sandbox='allow-scripts allow-same-origin'  scrolling="no" height={isMobile ?  "506": "225"}></iframe>
    </div>
    </div>
    </div>
  );
};
export default Review;