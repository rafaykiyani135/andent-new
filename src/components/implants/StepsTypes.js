import s1 from '../../assets/andent-data/s1.png'
import s2 from '../../assets/andent-data/s2.png'
import s3 from '../../assets/andent-data/s3.png'
import s4 from '../../assets/andent-data/s4.png'
import s5 from '../../assets/andent-data/s5.png'
import d1 from '../../assets/andent-data/d1.png'
import d2 from '../../assets/andent-data/d2.png'
import redtick from '../../assets/andent-data/tick.png'
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Main(){

    const {t,i18n}=useTranslation();

    useEffect(() => {
        const lng= navigator.language;
        i18n.changeLanguage(lng)
      });

    return(
        <div>
                <div className="container" style={{paddingTop:"40px"}}>
                    <div className='row justify-content-center text-center'>
                        <div className='col-lg-12 col-md-10'>
                        <h3 className='size-60 theme-dark mob-heading'>
                            {t("stepbystep")}
                        </h3>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-6 col-md-6 col-6 col-sm-6 move-right text-center text-lg-start" >
                            <h5 className="size-18 theme-dark">{t("imp1")}</h5>
                            <p className="size-16 tourism-benefits" style={{color:"#000000",lineHeight:"20px"}}>
                            {t("imp1p")}
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center upper-padding-rs" style={{position:"relative",bottom:"30px"}}>
                            <img src={s1} alt='step1' className='andent-icon-sq move-down'/>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center " style={{position:"relative",bottom:"30px"}}>
                            <img src={s2} alt='step1' className='andent-icon-sq steps-img-left move-down'/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-center text-lg-start" >
                            <h5 className="size-18 theme-dark">{t("imp2")}</h5>
                            <p className="size-16 tourism-benefits" style={{color:"#000000",lineHeight:"20px"}}>
                            {t("imp2p")}
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-center text-lg-start move-right" >
                            <h5 className="size-18 theme-dark">{t("imp3")}</h5>
                            <p className="size-16 tourism-benefits" style={{color:"#000000",lineHeight:"20px"}}>
                            {t("imp3p")}
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center upper-padding-rs"  style={{position:"relative",bottom:"30px"}}>
                            <img src={s3} alt='step1' className='andent-icon-sq-1 steps-img-left move-down'/>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center" style={{position:"relative",bottom:"30px"}}>
                            <img src={s4} alt='step1' className='andent-icon-sq-1 steps-img-left move-down'/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-center text-lg-start" >
                            <h5 className="size-18 theme-dark">{t("imp4")}</h5>
                            <p className="size-16 tourism-benefits" style={{color:"#000000",lineHeight:"20px"}}>
                            {t("imp4p")}
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-center text-lg-start move-right" >
                            <h5 className="size-18 theme-dark">{t("imp5")}</h5>
                            <p className="size-16 tourism-benefits" style={{color:"#000000",lineHeight:"20px"}}>
                            {t("imp5p")}
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center upper-padding-rs"  style={{position:"relative",bottom:"30px"}}>
                            <img src={s5} alt='step1' className='andent-icon-sq move-down'/>
                        </div>
                    </div>
                    <div className='row justify-content-center text-center upper-padding'>
                        <div className='col-lg-12 col-md-10'>
                        <h3 className='size-60 theme-dark mob-heading'>
                        {t("imptypes")}
                        </h3>
                        </div>
                    </div>
                    <div className="row justify-content-center upper-padding text-left">
                    <div className="col-lg-3 text-center move-left mob-bottom-pad">
                        <img src={d1} alt="teeth1" style={{ width: "100%", maxWidth: "321px", height: "auto" }} />
                        <div style={{ paddingTop: "20px" }}>
                            <h3 className="theme-dark size-18 text-center decent-pad">{t("impt1")}</h3>
                            <div className="row decent-pad ">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="d-flex align-items-center justify-content-center justify-content-lg-start text-lg-start">
                                <div className="col-lg-3 col-md-3 col-sm-3 d-flex justify-content-left">
                                    <img src={redtick} className="d-flex justify-content-center icon-size footer-mob-icon" alt="phoneicon" />
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-9 text-start implant-textbox">
                                    <h6 style={{ color: "black", fontWeight: "400" }} className="size-16 icon-text-pos">
                                    {t("impt1p1")}
                                    </h6>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="row decent-pad">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="d-flex align-items-center justify-content-center justify-content-lg-start text-lg-start">
                                <div className="col-lg-3 col-md-3 col-sm-3 d-flex justify-content-left">
                                    <img src={redtick} className="d-flex justify-content-center icon-size footer-mob-icon" alt="phoneicon" />
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-9 text-start implant-textbox">
                                    <h6 style={{ color: "black", fontWeight: "400" }} className="size-16 icon-text-pos">
                                    {t("impt1p2")}
                                    </h6>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="row decent-pad">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="d-flex align-items-center justify-content-center justify-content-lg-start text-lg-start">
                                <div className="col-lg-3 col-md-3 col-sm-3 d-flex justify-content-left">
                                    <img src={redtick} className="d-flex justify-content-center icon-size footer-mob-icon" alt="phoneicon" />
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-9 text-start implant-textbox">
                                    <h6 style={{ color: "black", fontWeight: "400" }} className="size-16 icon-text-pos">
                                    {t("impt1p3")}
                                    </h6>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 text-center move-right">
                            <img src={d2} alt='teeth1' style={{ width: "100%", maxWidth: "321px", height: "auto" }} />
                            <div style={{paddingTop:"20px"}}>
                                <h3 className='theme-dark size-18 text-center decent-pad'>
                                {t("impt2")}
                                </h3>
                                <div className="row decent-pad">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="d-flex align-items-center justify-content-center justify-content-lg-start text-lg-start">
                                    <div className="col-lg-3 col-md-3 col-sm-3 d-flex justify-content-left">
                                    <img src={redtick} className="d-flex justify-content-center icon-size footer-mob-icon" alt="phoneicon" />
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-sm-9 text-start implant-textbox">
                                        <h6 style={{ color: "black", fontWeight: "400"}} className="size-16 icon-text-pos">
                                        {t("impt2p1")}
                                        </h6>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="row decent-pad">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="d-flex align-items-center justify-content-center justify-content-lg-start text-lg-start">
                                    <div className="col-lg-3 col-md-3 col-sm-3 d-flex justify-content-left">
                                    <img src={redtick} className="d-flex justify-content-center icon-size footer-mob-icon" alt="phoneicon" />
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-sm-9 text-start implant-textbox">
                                        <h6 style={{ color: "black", fontWeight: "400"}} className="size-16 icon-text-pos">
                                        {t("impt2p2")}
                                        </h6>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="row decent-pad">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="d-flex align-items-center justify-content-center justify-content-lg-start text-lg-start">
                                    <div className="col-lg-3 col-md-3 col-sm-3 d-flex justify-content-left">
                                    <img src={redtick} className="d-flex justify-content-center icon-size footer-mob-icon" alt="phoneicon" />
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-sm-9 text-start implant-textbox">
                                        <h6 style={{ color: "black", fontWeight: "400"}} className="size-16 icon-text-pos">
                                        {t("impt2p3")}
                                        </h6>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
        </div>
    );
}

export default Main;