import s1 from '../../assets/andent-data/c1.png'
import s2 from '../../assets/andent-data/c2.png'
import s3 from '../../assets/andent-data/c3.png'
import s4 from '../../assets/andent-data/c4.png'
import s5 from '../../assets/andent-data/c5.png'
import d1 from '../../assets/andent-data/crown1.png'
import d2 from '../../assets/andent-data/crown2.png'
import d3 from '../../assets/andent-data/crown3.png'
import { useTranslation } from 'react-i18next';

function Main(){

    const {t}=useTranslation();


    return(
        <div>
                <div className="container andent-padding upper-pad-20">
                    <div className='row justify-content-center text-center'>
                        <div className='col-lg-12 col-md-10'>
                        <h3 className='size-60 theme-dark mob-heading'>
                            {t("stepbystep")}
                        </h3>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-start text-lg-start text-md-center move-right" >
                            <h5 className="size-18 theme-dark">{t("bridges1")}</h5>
                            <p className="size-16 tourism-benefits" style={{color:"#000000",lineHeight:"20px"}}>
                            {t("bridges1p")}
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center upper-padding-rs stepbstepimg">
                            <img src={s1} alt='step1' className='andent-icon-sq steps-img-left2'/>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center stepbstepimg">
                            <img src={s2} alt='step1' className='andent-icon-sq steps-img-left'/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-start text-lg-start text-md-center" >
                            <h5 className="size-18 theme-dark">{t("bridges2")}</h5>
                            <p className="size-16 tourism-benefits" style={{color:"#000000",lineHeight:"20px"}}>
                            {t("bridges2p")}
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-start text-lg-start text-md-center move-right" >
                            <h5 className="size-18 theme-dark">{t("bridges3")}</h5>
                            <p className="size-16 tourism-benefits" style={{color:"#000000",lineHeight:"20px"}}>
                            {t("bridges3p")}
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center upper-padding-rs stepbstepimg">
                            <img src={s3} alt='step1' className='andent-icon-sq'/>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center stepbstepimg">
                            <img src={s4} alt='step1' className='andent-icon-sq steps-img-left'/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-start text-lg-start text-md-center" >
                            <h5 className="size-18 theme-dark">{t("bridges4")}</h5>
                            <p className="size-16 tourism-benefits" style={{color:"#000000",lineHeight:"20px"}}>
                            {t("bridges4p")}
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-start text-lg-start text-md-center move-right" >
                            <h5 className="size-18 theme-dark">{t("bridges5")}</h5>
                            <p className="size-16 tourism-benefits" style={{color:"#000000",lineHeight:"20px"}}>
                            {t("bridges5p")}
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center upper-padding-rs  stepbstepimg">
                            <img src={s5} alt='step1' className='andent-icon-sq'/>
                        </div>
                    </div>
                    <div className='row justify-content-center text-center upper-padding'>
                        <div className='col-lg-12 col-12'>
                        <h3 className='size-60 theme-dark mob-heading'>
                        {t("bridgestypes")}
                        </h3>
                        </div>
                    </div>
                    <div className="row justify-content-center upper-padding text-left">
                        <div className="col-lg-3 text-center move-left" >
                            <img src={d1} alt='teeth1' className='crowns-img'/>
                            <div className='pad-10 mob-top-pad'>
                                <h3 className='theme-dark size-18 text-center'>
                                {t("bridgest1")}
                                </h3>
                                <div className='types-textbox tourism-text'>
                                     <p style={{color:"black",lineHeight:"20px"}} className='size-16'>
                                     {t("bridgest1p")}
                                    </p>
                                </div>
                               
                            </div>
                        </div>
                        <div className="col-lg-3 text-center mob-top-pad" >
                            <img src={d2} alt='teeth1' className='crowns-img'/>
                            <div className='pad-10 mob-top-pad'>
                                <h3 className='theme-dark size-18 text-center'>
                                {t("bridgest2")}
                                </h3>
                                <div className='types-textbox tourism-text'>
                                      <p style={{color:"black",lineHeight:"20px"}} className='size-16'>
                                      {t("bridgest2p")}
                                      </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 text-center move-right mob-top-pad" >
                            <img src={d3} alt='teeth1' className='crowns-img'/>
                            <div className='pad-10 mob-top-pad'>
                                <h3 className='theme-dark size-18 text-center'>
                                {t("bridgest3")}
                                </h3>
                                <div className='types-textbox tourism-text'>
                                    <p style={{color:"black",lineHeight:"20px"}} className='size-16'>
                                    {t("bridgest3p")}
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </div>
        </div>
    );
}

export default Main;