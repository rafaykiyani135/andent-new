import img1 from '../../assets/andent-data/dentures1.png'
import redtick from '../../assets/andent-data/tick.png'
import { useTranslation } from 'react-i18next';

function Main (){

    const {t}=useTranslation();

    return(
        <div>
            <div className="container ">
                <div className='row justify-content-center text-center'>
                    <div className='col-lg-12 col-md-12 col-12'>
                        <h4 className='size-60 theme-dark mob-heading' style={{fontWeight:"700"}}>
                            {t("dentureswork")}
                        </h4>
                    </div>
                </div>
                <div className="row justify-content-center text-left upper-padding">
                    <div className="col-lg-6 col-md-12 move-right text-lg-start text-md-center" style={{paddingBottom:"35px"}}>
                        <img src={img1} alt='img1' className='dentures-work'/>
                    </div>

                    <div className='col-lg-6 col-md-12 text-center text-lg-start'>
                    <h4 className='theme-dark size-20'>{t("denturesworkh3")}</h4>
                    <p className='size-16' style={{color:"black",lineHeight:"20px",fontWeight:"400"}}>
                    {t("denturesworkp")}
                    </p>
                    <div className="row decent-pad">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="d-flex align-items-center justify-content-center justify-content-md-center">
                            <div className="col-lg-3 col-md-1 col-sm-3 d-flex justify-content-lg-start justify-content-md-end" >
                                <img src={redtick} className="d-flex justify-content-center icon-size" alt="phoneicon" />
                            </div>
                            <div className="col-lg-9 col-md-4 col-sm-9">
                                <h6 style={{ color: "black", fontWeight: "400"}} className="size-16 icon2-text-pos">
                                <b>{t("denturesworkp1")}</b>
                                </h6>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="row decent-pad">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="d-flex align-items-center justify-content-center justify-content-md-center">
                            <div className="col-lg-3 col-md-1 col-sm-3 d-flex justify-content-lg-start justify-content-md-end">
                                <img src={redtick} className="d-flex justify-content-center icon-size" alt="phoneicon" />
                            </div>
                            <div className="col-lg-9 col-md-4 col-sm-9">
                                <h6 style={{ color: "black", fontWeight: "400",paddingRight:"37px"}} className="size-16 icon2-text-pos">
                                <b>{t("denturesworkp2")}</b>
                                </h6>
                            </div>
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