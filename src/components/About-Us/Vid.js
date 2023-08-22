import ReactPlayer from "react-player";
import { useState,useEffect } from "react";

function Main (){
    
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    // choose the screen size
    const handleResize = () => {
    const width = window.innerWidth;

    setIsMobile(width < 720);
    setIsTablet(width >= 720 && width < 1024);
    };

    // create an event listener
    useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to set initial states

    return () => {
        window.removeEventListener("resize", handleResize);
    };
    }, []);

    return(
        <div>
            <div className="container move-up2" >
            <div className='row justify-content-center'>
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
                        url="https://andent-media.s3.us-east-2.amazonaws.com/andent+award+video+.mov"
                        controls={true}
                        width="100%" // Keep the width consistent, it will adjust according to its parent container
                        height="100%" // Keep the height consistent, it will adjust according to its parent container
                        style={{ position: 'absolute', top: 0, left: 0, borderRadius: '10px', overflow: 'hidden' }}
                    />
                    </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Main;