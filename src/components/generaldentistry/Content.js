import s1 from '../../assets/andent-data/gd1.png'
import s2 from '../../assets/andent-data/gd2.png'
import s3 from '../../assets/andent-data/gd3.png'
import s4 from '../../assets/andent-data/gd4.png'
import s5 from '../../assets/andent-data/gd5.png'
import s6 from '../../assets/andent-data/gd6.png'
import s7 from '../../assets/andent-data/gd7.png'
import s8 from '../../assets/andent-data/gd8.png'
import s9 from '../../assets/andent-data/gd9.png'
import s10 from '../../assets/andent-data/gd10.png'
import { useTranslation } from 'react-i18next';

import Exp from '../implants/Exp';


function Main (){

    const {t}=useTranslation();


    return(
        <div>
            <div className="container andent-padding">
                    <div className='row justify-content-center text-center'>
                        <div className='col-lg-12 col-md-10'>
                        <h3 className='size-60 theme-dark mob-heading'>
                             {t("experienceourtreatments")}
                        </h3>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-start text-md-center text-lg-start move-right" >
                            <h5 className="size-18 theme-dark">{t("treatment1h")}</h5>
                            <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                            {t("treatment1p")}
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center upper-padding-rs stepbstep">
                            <img src={s1} alt='step1' className='andent-icon-sq'/>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center stepbstep">
                            <img src={s2} alt='step1' className='andent-icon-sq steps-img-left'/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-start text-md-center text-lg-start move-left" >
                            <h5 className="size-18 theme-dark">{t("treatment2h")}</h5>
                            <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                            {t("treatment2p")}
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-start text-md-center text-lg-start move-right" >
                            <h5 className="size-18 theme-dark">{t("treatment3h")}</h5>
                            <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                            {t("treatment3p")}
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center upper-padding-rs stepbstep" >
                            <img src={s3} alt='step1' className='andent-icon-sq'/>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center stepbstep">
                            <img src={s4} alt='step1' className='andent-icon-sq steps-img-left'/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-start text-md-center text-lg-start move-left" >
                            <h5 className="size-18 theme-dark">{t("treatment4h")}</h5>
                            <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                            {t("treatment4p")}
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-start text-md-center text-lg-start move-right" >
                            <h5 className="size-18 theme-dark">{t("treatment5h")}</h5>
                            <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                            {t("treatment5p")}
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center upper-padding-rs stepbstep">
                            <img src={s5} alt='step1' className='andent-icon-sq'/>
                        </div>
                    </div>

                    <Exp/>

                    <div className='decent-pad'>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-start text-md-center text-lg-start move-right" >
                            <h5 className="size-18 theme-dark">{t("treatment6h")}</h5>
                            <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                            {t("treatment6p")}
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center upper-padding-rs stepbstep">
                            <img src={s6} alt='step1' className='andent-icon-sq'/>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center stepbstep"  >
                            <img src={s7} alt='step1' className='andent-icon-sq steps-img-left'/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-start text-md-center text-lg-start move-left" >
                            <h5 className="size-18 theme-dark">{t("treatment7h")}</h5>
                            <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                            {t("treatment7p")}
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-start text-md-center text-lg-start move-right" >
                            <h5 className="size-18 theme-dark">{t("treatment8h")}</h5>
                            <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                            {t("treatment8p")}
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center upper-padding-rs stepbstep">
                            <img src={s8} alt='step1' className='andent-icon-sq'/>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center stepbstep" >
                            <img src={s9} alt='step1' className='andent-icon-sq steps-img-left'/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-start text-md-center text-lg-start move-left" >
                            <h5 className="size-18 theme-dark">{t("treatment9h")}</h5>
                            <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                            Enhance the appearance and functionality of your teeth with dental bonding. Our skilled dentists use tooth-colored 
                            {t("treatment9p")}
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-start text-md-center text-lg-start move-right" >
                            <h5 className="size-18 theme-dark">{t("treatment10h")}</h5>
                            <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                            {t("treatment10p")}
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center upper-padding-rs stepbstep" >
                            <img src={s10} alt='step1' className='andent-icon-sq'/>
                        </div>
                    </div>
                    </div>
                    

                </div>
        </div>
    )
}

export default Main;