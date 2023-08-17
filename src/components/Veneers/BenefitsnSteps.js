import b1 from '../../assets/andent-data/bd1.png'
import b2 from '../../assets/andent-data/bd2.png'
import b3 from '../../assets/andent-data/bd3.png'
import b4 from '../../assets/andent-data/bd4.png'
import s1 from '../../assets/andent-data/dvs1.png'
import s2 from '../../assets/andent-data/dvs2.png'
import s3 from '../../assets/andent-data/dvs3.png'
import s4 from '../../assets/andent-data/dvs4.png'
import { useTranslation } from 'react-i18next'

function Main (){

    const {t}=useTranslation();


    return(
        <div>
            <div className="container andent-padding">
                <div>
                    <div className="row align-items-center justify-content-center text-center">
                    <div className="col-lg-8">
                        <div className="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                        <h2 className='theme-dark mob-heading'>{t("veneersbenefit")}</h2>
                        </div>
                        <p className="theme-andent size-20" style={{lineHeight:"30px",fontWeight:"700"}}>
                        {t("veneersbenefitp")}
                        </p>
                    </div>
                    </div>

                    <div className="row justify-content-around">
                    <div className="col-lg-2 col-md-6 d-flex justify-content-center">
                        <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                            <div className='d-flex justify-content-center upper-padding'>
                            <img src={b1} alt="dt1" style={{height:"120px",width:"120px"}} className='img-fluid'/>
                            </div>
                            <div style={{paddingTop:"20px"}}>
                            <h4 className='theme-dark size-18' style={{textAlign:"center"}}>{t("veneersbenefit1")}</h4>
                            </div>
                            <div>
                                <p className='size-16 text-center' style={{color:"black",lineHeight:"20px",fontWeight:"400"}}>
                                {t("veneersbenefit1p")}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 d-flex justify-content-center">
                        <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                            <div className='d-flex justify-content-center upper-padding'>
                            <img src={b2} alt="dt1" style={{height:"120px",width:"120px"}} className='img-fluid'/>
                            </div>
                            <div style={{paddingTop:"20px"}}>
                            <h4 className='theme-dark size-18' style={{textAlign:"center"}}>{t("veneersbenefit2")}</h4>
                            </div>
                            <div>
                                <p className='size-16 text-center' style={{color:"black",lineHeight:"20px",fontWeight:"400"}}>
                                {t("veneersbenefit2p")}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 d-flex justify-content-center">
                        <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                            <div className='d-flex justify-content-center upper-padding'>
                            <img src={b3} alt="dt1" style={{height:"120px",width:"120px"}} className='img-fluid'/>
                            </div>
                            <div style={{paddingTop:"20px"}}>
                            <h4 className='theme-dark size-18' style={{textAlign:"center"}}>{t("veneersbenefit3")}</h4>
                            </div>
                            <div>
                                <p className='size-16 text-center' style={{color:"black",lineHeight:"20px",fontWeight:"400"}}>
                                {t("veneersbenefit3p")}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 d-flex justify-content-center">
                        <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                            <div className='d-flex justify-content-center upper-padding'>
                            <img src={b4} alt="dt1" style={{height:"120px",width:"120px"}} className='img-fluid'/>
                            </div>
                            <div style={{paddingTop:"20px"}}>
                            <h4 className='theme-dark size-18' style={{textAlign:"center"}}>{t("veneersbenefit4")}</h4>
                            </div>
                            <div>
                                <p className='size-16 text-center' style={{color:"black",lineHeight:"20px",fontWeight:"400"}}>
                                {t("veneersbenefit4p")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center justify-content-center text-center upper-padding">
                    <div className="col-lg-12">
                        <div className="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                        <h2 className='theme-dark mob-heading'>{t("stepbystep")}</h2>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-around upper-padding">
                    <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-start text-md-center text-lg-start move-right" >
                        <h5 className="size-18 theme-dark">{t("veneersstep1")}</h5>
                        <p className="size-16 tourism-benefits" style={{color:"#000000",lineHeight:"20px"}}>
                        {t("veneersstep1p")}
                        </p>
                    </div>
                    <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center upper-padding-rs" style={{position:"relative",bottom:"30px"}}>
                        <img src={s1} alt='step1' className='andent-icon-circ steps-img-left2 move-left'/>
                    </div>
                </div>
                <div className="row justify-content-around upper-padding">
                <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center upper-padding-rs" style={{position:"relative",bottom:"30px"}}>
                    <img src={s2} alt='step1' className='andent-icon-circ move-img-right'/>
                </div>
                <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-start text-md-center text-lg-start" >
                    <h5 className="size-18 theme-dark">{t("veneersstep2")}</h5>
                    <p className="size-16 tourism-benefits" style={{color:"#000000",lineHeight:"20px"}}>
                    {t("veneersstep2p")}
                    </p>
                </div>
                </div>
                <div className="row justify-content-around upper-padding">
                    <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-start text-md-center text-lg-start move-right" >
                        <h5 className="size-18 theme-dark">{t("veneersstep3")}</h5>
                        <p className="size-16 tourism-benefits" style={{color:"#000000",lineHeight:"20px"}}>
                        {t("veneersstep3p")}
                        </p>
                    </div>
                    <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center upper-padding-rs" style={{position:"relative",bottom:"30px"}}>
                        <img src={s3} alt='step1' className='andent-icon-circ steps-img-left2 move-left'/>
                    </div>
                </div>
                <div className="row justify-content-around upper-padding">
                    <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center upper-padding-rs" style={{position:"relative",bottom:"30px"}}>
                        <img src={s4} alt='step1' className='andent-icon-circ move-img-right steps-img-left2'/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-start text-md-center text-lg-start" >
                        <h5 className="size-18 theme-dark">{t("veneersstep4")}</h5>
                        <p className="size-16 tourism-benefits" style={{color:"#000000",lineHeight:"20px"}}>
                        {t("veneersstep4p")}
                        </p>
                    </div>
                 </div>
            </div>
            </div>
        </div>
    )
}

export default Main;