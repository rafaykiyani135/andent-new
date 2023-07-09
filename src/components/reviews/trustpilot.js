import { useState,useEffect } from "react"




function Review() {

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


  return (
    <div className='container' style={{paddingBottom:"50px"}}>
    <div className="row justify-content-center" style={{paddingBottom:"56px"}}>
      <div className="col-lg-8 text-center">
        <h1 className="theme-dark" style={{fontSize:"57px"}}>
          See What Others Have to Say
        </h1>
      </div>
    </div>
    <div className='row justify-content-center'>
    <div className='col-lg-12 text-center' >
    <iframe src='https://cdn.trustindex.io/amp-widget.html#14a092a12fb16057ce863991d95' title="google reviews" sandbox='allow-scripts allow-same-origin' layout='fixed-height' resizable='resizable' height={isMobile ?  "520": "400"}></iframe>
    </div>
    </div>
    <div className="row justify-content-center">
    <div className='col-lg-12 text-center'>
    <iframe src='https://cdn.trustindex.io/amp-widget.html#492565312cf460514b764dc37a2' title="trustpilot reviews" sandbox='allow-scripts allow-same-origin'  height={isMobile ?  "506": "400"}></iframe>
    </div>
    </div>
    </div>
  );
};
export default Review;