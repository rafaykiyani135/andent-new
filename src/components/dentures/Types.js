import b1 from '../../assets/andent-data/dentures2.png'
import b2 from '../../assets/andent-data/dentures3.png'
import b3 from '../../assets/andent-data/dentures4.png'
import { useTranslation } from 'react-i18next';


function Main (){

    const {t}=useTranslation();


    return(
        <div>
            <div className="container upper-pad-20 mob-top-pad">
                <div className='mob-top-pad-dentures'>
                    <div className="row align-items-center justify-content-center text-center">
                    <div className="col-lg-8">
                        <div className="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                        <h2 className='theme-dark'>{t("denturestype")}</h2>
                        </div>
                        <p className="theme-andent size-20" style={{lineHeight:"30px",fontWeight:"700"}}>
                        {t("denturestypep")}
                        </p>
                    </div>
                    </div>

                    <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-6 d-flex justify-content-center">
                        <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                            <div className='d-flex justify-content-center upper-padding'>
                            <img src={b1} alt="dt1" style={{height:"144px",width:"240px"}} className='img-fluid'/>
                            </div>
                            <div style={{paddingTop:"20px"}}>
                            <h4 className='theme-dark size-18' style={{textAlign:"center"}}>{t("denturestype1")}</h4>
                            </div>
                            <div>
                                <p className='size-16 text-center' style={{color:"black",lineHeight:"20px",fontWeight:"400"}}>
                                {t("denturestype1p")}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex justify-content-center">
                        <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                            <div className='d-flex justify-content-center upper-padding'>
                            <img src={b2} alt="dt1" style={{height:"144px",width:"240px"}} className='img-fluid'/>
                            </div>
                            <div style={{paddingTop:"20px"}}>
                            <h4 className='theme-dark size-18' style={{textAlign:"center"}}>{t("denturestype2")}</h4>
                            </div>
                            <div>
                                <p className='size-16 text-center' style={{color:"black",lineHeight:"20px",fontWeight:"400"}}>
                                {t("denturestype2p")}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex justify-content-center">
                        <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                            <div className='d-flex justify-content-center upper-padding'>
                            <img src={b3} alt="dt1" style={{height:"144px",width:"240px"}} className='img-fluid'/>
                            </div>
                            <div style={{paddingTop:"20px"}}>
                            <h4 className='theme-dark size-18' style={{textAlign:"center"}}>{t("denturestype3")}</h4>
                            </div>
                            <div>
                                <p className='size-16 text-center' style={{color:"black",lineHeight:"20px",fontWeight:"400"}}>
                                {t("denturestype3p")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Main;