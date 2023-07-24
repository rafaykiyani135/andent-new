import ReactPlayer from "react-player";
import { useState,useEffect } from "react";

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

    return(
        <div>
            <div className="container move-up2" >
            <div className="row justify-content-center">
             <div className='col-lg-8 col-md-8 col-12 d-flex justify-content-center web-vid move-left-vid'>
                    <div style={{ position: 'relative', paddingTop: '56.25%', width: '100%' }} >
                    <ReactPlayer
                        url="https://streamable.com/1fom0f"
                        controls={true}
                        width={isMobile? '100%': '640px'}
                        height={isMobile? '100%' : '360px'}
                        style={{ position: 'absolute', top: 0, left: 0,borderRadius: "10px", overflow:"hidden" }}
                    />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Main;