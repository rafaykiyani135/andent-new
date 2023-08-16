import s1 from '../../assets/andent-data/dvi1.png'
import s2 from '../../assets/andent-data/dvi2.png'
import s3 from '../../assets/andent-data/dvi3.png'
import { useTranslation } from 'react-i18next'

function Main (){

    const {t}=useTranslation();


    return(
        <div>
            <div className="container andent-padding">
            <div className="row align-items-center justify-content-center text-center">
                <div className="col-lg-12">
                    <div className="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                    <h2 className='theme-dark mob-heading'>{t("veneersinfoh")}</h2>
                    </div>
                    <div className='col-lg-12 d-flex justify-content-center'>
                    <div style={{height:"60px",width:"878px"}} >
                        <p className="theme-andent size-20 text-center" style={{lineHeight:"30px",fontWeight:"700"}}>
                        {t("veneersinfop")}
                        </p>
                    </div>
                    </div>
                </div>

                <div className="row justify-content-around" style={{paddingTop:"100px"}}>
                    <div className="col-lg-3 text-center upper-padding-rs veneer-info-pad" style={{position:"relative",bottom:"30px"}}>
                        <img src={s1} alt='step1' style={{height:"144px",width:"240px"}}/>
                    </div>
                    <div className="col-lg-6 text-center text-lg-start move-right mob-top-pad order-lg-first order-md-first" >
                        <h5 className="size-18 theme-dark">{t("veneersinfo1")}</h5>
                        <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                        {t("veneersinfo1p")}
                        </p>
                    </div>
                </div>

                <div className="row justify-content-around upper-padding">
                    <div className="col-lg-3 text-center upper-padding-rs veneer-info-pad" style={{position:"relative",bottom:"30px"}}>
                        <img src={s3} alt='step1' style={{height:"144px",width:"240px"}} className='move-img-right'/>
                    </div>
                    <div className="col-lg-6 text-center text-lg-start order-md-first" >
                        <h5 className="size-18 theme-dark">{t("veneersinfo2")}</h5>
                        <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                        {t("veneersinfo2p")}
                        </p>
                    </div>
                </div>

                <div className="row justify-content-around upper-padding">
                    <div className="col-lg-3 text-center upper-padding-rs veneer-info-pad" style={{position:"relative",bottom:"30px"}}>
                        <img src={s2} alt='step1' style={{height:"144px",width:"240px"}}/>
                    </div>
                    <div className="col-lg-6 text-lg-start text-center move-right order-lg-first order-md-first" >
                        <h5 className="size-18 theme-dark">{t("veneersinfo3")}</h5>
                        <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                        {t("veneersinfo3p")}
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Main;
