import s1 from '../../assets/andent-data/denture5.png'
import s2 from '../../assets/andent-data/denture6.png'
import s3 from '../../assets/andent-data/denture7.png'
import s4 from '../../assets/andent-data/denture8.png'
import { useTranslation } from 'react-i18next';

function Main(){

    const {t}=useTranslation();

    return(
        <div>
                <div className="container andent-padding">
                    <div className='row justify-content-center text-center'>
                        <div className='col-lg-12 col-md-10'>
                        <h3 className='size-60 theme-dark mob-heading'>
                            {t("stepbystep")}
                        </h3>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-center text-lg-start move-right" >
                            <h5 className="size-18 theme-dark">{t("denturestep1")}</h5>
                            <p className="size-16 tourism-benefits" style={{color:"#000000",lineHeight:"20px"}}>
                            {t("denturestep1p")}
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center upper-padding-rs" style={{position:"relative",bottom:"30px"}}>
                            <img src={s1} alt='step1' className='andent-icon-circ move-left'/>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center" style={{position:"relative",bottom:"30px"}}>
                            <img src={s2} alt='step1' className='andent-icon-circ move-img-right steps-img-left'/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-center text-lg-start" >
                            <h5 className="size-18 theme-dark">{t("denturestep2")}</h5>
                            <p className="size-16 tourism-benefits" style={{color:"#000000",lineHeight:"20px"}}>
                            {t("denturestep2p")}
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-6 col-md-6 col-6 col-sm-6text-center text-lg-start move-right" >
                            <h5 className="size-18 theme-dark">{t("denturestep3")}</h5>
                            <p className="size-16 tourism-benefits" style={{color:"#000000",lineHeight:"20px"}}>
                            {t("denturestep3p")}
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center upper-padding-rs"  style={{position:"relative",bottom:"30px"}}>
                            <img src={s3} alt='step1' className='andent-icon-circ move-left'/>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center" style={{position:"relative",bottom:"30px"}}>
                            <img src={s4} alt='step1' className='andent-icon-circ move-img-right steps-img-left'/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-center text-lg-start" >
                            <h5 className="size-18 theme-dark">{t("denturestep4")}</h5>
                            <p className="size-16 tourism-benefits" style={{color:"#000000",lineHeight:"20px"}}>
                            {t("denturestep4p")}
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Main;