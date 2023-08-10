import Aligner from '../../assets/andent-data/aligners.jpg'
import b1 from '../../assets/andent-data/a1.png'
import b2 from '../../assets/andent-data/a2.png'
import b3 from '../../assets/andent-data/a3.png'
import b4 from '../../assets/andent-data/a4.png'
import arrow from '../../assets/andent-data/arrow.png'
import { useEffect,useState } from 'react'
import { useTranslation } from 'react-i18next';


function Main (){

    const [isMobile, setIsMobile] = useState(false)

    const {t,i18n}=useTranslation();
    const [topPadding,setTopPadding]=useState(0);
    

    useEffect(() => {
        const lng= i18n.language;
        

        if (lng==='sq' && !isMobile) {
            setTopPadding(240);
          }
           else if(isMobile){
            setTopPadding(35);
          }
          else {
            setTopPadding(160);
          }
    },[topPadding,i18n,isMobile]);

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
            <div className="container andent-padding" style={{paddingTop:topPadding}}>
                <div className="row justify-content-center align-items-center text-center">
                    <h3 className='theme-dark size-60 mob-heading'>
                    {t("orthben")}
                    </h3>
                </div>
                <div className="row justify-content-center align-items-center text-center upper-padding">
                    <div className="col-lg-5 col-md-10 move-left" style={{paddingBottom:"50px"}}>
                        <div>
                            <img src={Aligner} alt='aligner' style={{width:"482px",height:"322px"}}/>
                        </div>
                    </div> 
                    <br/>
                    <div className="col-lg-3 col-md-10 d-flex justify-content-center text-center move-up orth-benefits-textbox">
                        <div>
                            <h3 className='size-25 theme-dark' style={{fontWeight:"700"}}>
                            {t("orthinfo1")}
                            </h3>
                            <div className='orth-benefits-p text-center'>
                                 <p style={{color:"black",fontWeight:"400",lineHeight:"20px"}}>
                                 {t("orthinfo1p")} <span className='theme-andent'>{t("orthinfo1pspan")}</span> {t("orthinfo1p2")}
                                </p>
                            </div>
                           
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-10 d-flex justify-content-center text-center move-up orth-benefits-textbox move-right">
                        <div>
                            <h3 className='size-25 theme-dark' style={{fontWeight:"700"}}>
                            {t("orthinfo2")}
                            </h3>
                            <div className='orth-benefits-p text-center'>
                            <p style={{color:"black",fontWeight:"400",lineHeight:"20px"}}>
                            {t("orthinfo2p")} <span className='theme-andent'>{t("orthinfo2pspan")}</span>,
                            {t("orthinfo2p2")}
                            </p>
                            </div>
                           
                        </div>
                    </div>     
                </div>
                <div className="row align-items-center">
                <div className="col-lg-12 mob-top-pad">
                    <div className="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                    <h2 className='theme-dark mob-heading'>{t("howalignerswork")}</h2>
                    </div>
                </div>
                </div>

                <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                    <img src={arrow} alt='arrow' />
                    </div>
                </div>
                </div>

                <div className="row justify-content-around">
                <div className="col-lg-2 col-md-6 d-flex justify-content-center">
                    <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                    {isMobile ? (
                    <div>
                    <div className='d-flex justify-content-center upper-padding'>
                        <img src={b1} alt="dt1" style={{height:"120px",width:"120px"}} className='img-fluid'/>
                    </div>
                    <div style={{paddingTop:"20px"}}>
                        <h4 className='theme-dark size-18' style={{textAlign:"center"}}>{t("aligners1")}</h4>
                    </div>
                    <div>
                        <p className='size-16 text-center' style={{color:"black",lineHeight:"20px",fontWeight:"400"}}>
                        {t("aligners1p")}
                        </p>
                    </div>
                    </div>
                    ) : (
                        <div>
                    <div style={{paddingTop:"20px"}}>
                        <h4 className='theme-dark size-18' style={{textAlign:"center"}}>{t("aligners1")}</h4>
                    </div>
                    <div>
                        <p className='size-16 text-center' style={{color:"black",lineHeight:"20px",fontWeight:"400"}}>
                        {t("aligners1p")}
                        </p>
                    </div>
                    <div className='d-flex justify-content-center upper-padding'>
                        <img src={b1} alt="dt1" style={{height:"120px",width:"120px"}} className='img-fluid'/>
                    </div>
                    </div>
                    )}
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-6 d-flex justify-content-center">
                    <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        {isMobile ? (
                        <div>
                        <div className='d-flex justify-content-center upper-padding'>
                        <img src={b2} alt="dt1" style={{height:"120px",width:"120px"}} className='img-fluid'/>
                        </div>
                        <div style={{paddingTop:"20px"}}>
                        <h4 className='theme-dark size-18' style={{textAlign:"center"}}>{t("aligners2")}</h4>
                        </div>
                        <div>
                            <p className='size-16 text-center' style={{color:"black",lineHeight:"20px",fontWeight:"400"}}>
                            {t("aligners2p")}
                            </p>
                        </div>
                        </div>
                        ) : (
                            <div>
                        <div style={{paddingTop:"20px"}}>
                        <h4 className='theme-dark size-18' style={{textAlign:"center"}}>{t("aligners2")}</h4>
                        </div>
                        <div>
                            <p className='size-16 text-center' style={{color:"black",lineHeight:"20px",fontWeight:"400"}}>
                            {t("aligners2p")}
                            </p>
                        </div>
                        <div className='d-flex justify-content-center upper-padding'>
                        <img src={b2} alt="dt1" style={{height:"120px",width:"120px"}} className='img-fluid'/>
                        </div>
                        </div>
                        )}
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-6 d-flex justify-content-center">
                    <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        {isMobile ? (
                        <div>
                        <div className='d-flex justify-content-center upper-padding'>
                            <img src={b3} alt="dt1" style={{height:"120px",width:"120px"}} className='img-fluid'/>
                        </div>
                        <div style={{paddingTop:"20px"}}>
                        <h4 className='theme-dark size-18' style={{textAlign:"center"}}>{t("aligners3")}</h4>
                        </div>
                        <div>
                            <p className='size-16 text-center' style={{color:"black",lineHeight:"20px",fontWeight:"400"}}>
                            {t("aligners3p")} 
                            </p>
                        </div>
                        </div>
                        ) : (
                            <div>
                        <div style={{paddingTop:"20px"}}>
                        <h4 className='theme-dark size-18' style={{textAlign:"center"}}>{t("aligners3")}</h4>
                        </div>
                        <div>
                            <p className='size-16 text-center' style={{color:"black",lineHeight:"20px",fontWeight:"400"}}>
                            {t("aligners3p")}
                            </p>
                        </div>
                        <div className='d-flex justify-content-center upper-padding'>
                        <img src={b3} alt="dt1" style={{height:"120px",width:"120px"}} className='img-fluid'/>
                        </div>
                        </div>
                        )}
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-6 d-flex justify-content-center">
                    <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        {isMobile ? (
                        <div>
                        <div className='d-flex justify-content-center upper-padding' >
                            <img src={b4} alt="dt1" style={{height:"120px",width:"120px"}} className='img-fluid'/>
                        </div>
                        <div style={{paddingTop:"10px"}}>
                        <h4 className='theme-dark size-18' style={{textAlign:"center"}}>{t("aligners4")}</h4>
                        </div>
                        <div>
                            <p className='size-16 text-center' style={{color:"black",lineHeight:"20px",fontWeight:"400"}}>
                            {t("aligners4p")}
                            </p>
                        </div>
                        </div>
                        ) : (
                            <div>
                            <div style={{paddingTop:"20px"}}>
                            <h4 className='theme-dark size-18' style={{textAlign:"center"}}>{t("aligners4")}</h4>
                            </div>
                            <div>
                                <p className='size-16 text-center' style={{color:"black",lineHeight:"20px",fontWeight:"400"}}>
                                {t("aligners4p")}
                                </p>
                            </div>
                            <div className='d-flex justify-content-center upper-padding' style={{paddingBottom:"50px"}}>
                            <img src={b4} alt="dt1" style={{height:"120px",width:"120px"}} className='img-fluid'/>
                            </div>
                            </div>
                        )}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;