import img1 from '../../assets/andent-data/dbwork.png'
import img2 from '../../assets/andent-data/dbwork1.png'
import { useTranslation } from 'react-i18next';

function Main (){

    const {t}=useTranslation();

    return(
        <div>
            <div className="container andent-padding">
            <div className='row justify-content-center text-center'>
                    <div className='col-lg-12 col-md-10'>
                    <h3 className='size-60 theme-dark mob-heading'>
                        {t("howbridgeswork")}
                    </h3>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-10 col-sm-10 text-start text-md-center" >
                        <img src={img1} alt='dbimg' className='img-fluid' style={{height:"402px",width:"402px"}}/>
                    </div>
                    <div className="col-lg-5 col-md-10 col-sm-10 text-center text-lg-start" style={{paddingTop:"70px"}}>
                        <h4 className='theme-dark size-20' style={{fontWeight:"700"}}>
                            {t("bridges")}
                        </h4>   
                        <p className='size-16' style={{lineHeight:"20px",color:"black"}}>
                        {t("bridgesp")}
                        </p>
                        <h4 className='theme-dark size-20 upper-padding' style={{fontWeight:"700"}}>
                        {t("crowns")}
                        </h4>   
                        <p className='size-16' style={{lineHeight:"20px",color:"black"}}>
                        {t("crownsp")}
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center">
                <div className="col-lg-5 col-md-10 col-sm-10 text-start text-md-center" style={{}}>
                        <img src={img2} alt='dbimg' className='' style={{height:"318px",width:"476px"}}/>
                </div>
                <div className="col-lg-5 col-md-10 col-sm-10 text-center text-lg-start order-lg-first order-md-first" style={{paddingTop:"70px"}}>
                        <h4 className='theme-dark size-20' style={{fontWeight:"700"}}>
                        {t("howbridgesdifferent")}
                        </h4>   
                        <p className='size-16' style={{lineHeight:"20px",color:"black"}}>
                        {t("howbridgesdifferentp")}
                        </p>
                </div>
                </div>
            </div>
        </div> 
    )
}

export default Main;