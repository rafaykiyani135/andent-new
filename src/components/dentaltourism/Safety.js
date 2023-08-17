import img1 from '../../assets/andent-data/sec1.png'
import img2 from '../../assets/andent-data/sec2.png'
import img3 from '../../assets/andent-data/sec3.png'
import img4 from '../../assets/andent-data/sec4.png'
import img5 from '../../assets/andent-data/sec5.png'
import img6 from '../../assets/andent-data/sec6.png'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function Main (){

    const {t}=useTranslation();


    const linkClick = (e) =>{
        window.analytics.track("Link clicked", {
            buttonText: e.currentTarget.title,
            link: e.currentTarget.href,
            clickedOnPage: window.location.pathname
          });
    }

    return(
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-8 text-center">
                        <h3 className="theme-andent size-20" style={{fontWeight:"700"}}>
                        {t("safetypriority")}
                        </h3>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-md-8 text-center">
                        <h3 className="theme-dark size-60 mob-heading" style={{fontWeight:"700"}}>
                        {t("securityprotocol")}
                        </h3>
                    </div>
                </div>
                <div className="row justify-content-center decent-pad">
                    <div className="col-lg-8 col-md-8 text-center">
                        <p className="size-16" style={{fontWeight:"400",lineHeight:"20px",color:"black"}}>
                        {t("securityprotocolp")}
                        </p>
                    </div>
                    <div className="col-lg-12">
                    <div className="section-title center-align mb-50 text-center">
                        <p style={{fontSize:"16px",color:"#6DA7A2",paddingBottom:"20px"}} >{t("securityprotocolp1")}</p>
                    </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-end move-left">
                    <div className="col-lg-5 col-md-6 col-sm-12">
                    <div>
                        <ul className="text-left">
                        <li style={{ paddingBottom: "40px", display: "flex" }}>
                            <div className='d-md-flex align-items-md-center'>
                            <img src={img1} alt="icon01" className='andent-icon-circ andent-icon-circ-sm ' style={{ maxWidth: "100%", height: "auto" }} />
                            </div>
                            <div className="text sec-icon-text safety-mob-dim" style={{ paddingLeft: "20px", position: "relative", top: "20px" }}>
                            <h4 className='theme-dark sec-icon-text-heading' style={{ fontSize: "16px" }}>{t("tech1")}</h4>
                            <p style={{ color: "#4E4E50", lineHeight: "20px", fontSize: "16px" }}>
                            {t("tech1p")}
                            </p>
                            <Link to="/about" style={{ position: "relative", bottom: "15px" }} title='Learn More' onClick={linkClick}>
                                <p style={{ fontStyle: "italic", fontSize: "10px", color: "#6DA7A2" }}>
                                {t("learnmore")}
                                </p>
                            </Link>
                            </div>
                        </li>
                        <li style={{ paddingBottom: "40px", display: "flex" }}>
                            <div className='d-md-flex align-items-md-center order-md-first'>
                            <img src={img3} alt="icon01" className='andent-icon-circ andent-icon-circ-sm' style={{ maxWidth: "100%", height: "auto" }} />
                            </div>
                            <div className="text sec-icon-text safety-mob-dim order-first" style={{ paddingLeft: "20px", position: "relative", top: "20px" }}>
                            <h4 className='theme-dark sec-icon-text-heading' style={{ fontSize: "16px" }}>{t("tech2")}</h4>
                            <p style={{ color: "#4E4E50", lineHeight: "20px", fontSize: "16px"}} >
                            {t("tech2p")}
                            </p>
                            <Link to="/about" style={{ position: "relative", bottom: "15px" }} title='Learn More' onClick={linkClick}>
                                <p style={{ fontStyle: "italic", fontSize: "10px", color: "#6DA7A2" }}>
                                {t("learnmore")}
                                </p>
                            </Link>
                            </div>
                        </li>
                        <li style={{ paddingBottom: "40px", display: "flex" }}>
                            <div className='d-md-flex align-items-md-center'>
                            <img src={img5} alt="icon01" className='andent-icon-circ andent-icon-circ-sm move-down-lg' style={{ maxWidth: "100%", height: "auto" }} />
                            </div>
                            <div className="text sec-icon-text safety-mob-dim" style={{ paddingLeft: "20px", position: "relative", top: "20px" }}>
                            <h4 className='theme-dark sec-icon-text-heading' style={{ fontSize: "16px" }}>{t("tech3")}</h4>
                            <div className='upper-pad-lg'>
                                <p style={{ color: "#4E4E50", lineHeight: "20px", fontSize: "16px" }}>
                                {t("tech3p")}
                                </p>
                                <Link to="/about" style={{ position: "relative", bottom: "15px" }} title='Learn More' onClick={linkClick}>
                                    <p style={{ fontStyle: "italic", fontSize: "10px", color: "#6DA7A2" }}>
                                    {t("learnmore")}
                                    </p>
                                </Link>
                            </div>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12">
                        <ul className='text-left'>
                        <div className=''>
                        <li style={{paddingBottom:"40px",display:"flex"}}>
                            <div className='d-md-flex align-items-md-center order-md-first'>
                            <img src={img2} alt="icon01" className='andent-icon-circ andent-icon-circ-sm' style={{ maxWidth: "100%", height: "auto" }} />
                            </div>
                            <div className="text sec-icon-text order-first safety-mob-dim" style={{paddingLeft:"20px",position:"relative",top:"20px"}}>
                            <h4 className='theme-dark sec-icon-text-heading' style={{fontSize:"18px"}}>{t("tech4")}</h4>
                            <p style={{color:"#4E4E50",lineHeight:"20px",fontSize:"16px"}}>
                            {t("tech4p")}
                            </p>
                            <Link to="/about" style={{position:"relative",bottom:"15px"}} title='Learn More' onClick={linkClick}>
                                <p style={{fontStyle:"italic",fontSize:"10px",color:"#6DA7A2"}}>
                                {t("learnmore")}
                                </p>
                            </Link>
                            </div>
                        </li>
                        </div>
                        <div>
                        <li style={{paddingBottom:"40px",display:"flex"}}>
                            <div className='d-md-flex align-items-md-center'>
                            <img src={img4} alt="icon01" className='andent-icon-circ andent-icon-circ-sm' style={{ maxWidth: "100%", height: "auto" }}/>
                            </div>
                            <div className="text sec-icon-text safety-mob-dim" style={{paddingLeft:"20px",position:"relative",top:"20px"}}>
                            <h4 className='theme-dark sec-icon-text-heading' style={{fontSize:"18px"}}>{t("tech5")}</h4>
                            <p style={{color:"#4E4E50",lineHeight:"20px",fontSize:"16px"}}>
                            {t("tech5p")}
                            </p>
                            <Link to="/about" style={{position:"relative",bottom:"15px"}} title='Learn More' onClick={linkClick}>
                                <p style={{fontStyle:"italic",fontSize:"10px",color:"#6DA7A2"}}>
                                {t("learnmore")}
                                </p>
                            </Link>
                            </div>
                        </li>
                        </div>
                        <div>
                        <li style={{paddingBottom:"40px",display:"flex"}}>
                            <div className='d-md-flex align-items-md-center order-md-first'>
                            <img src={img6} alt="icon01" className='andent-icon-circ andent-icon-circ-sm' style={{ maxWidth: "100%", height: "auto" }} />
                            </div>
                            <div className="text sec-icon-text order-first safety-mob-dim" style={{paddingLeft:"20px",position:"relative",top:"20px"}}>
                            <h4 className='theme-dark sec-icon-text-heading' style={{fontSize:"18px"}}>{t("tech6")}</h4>
                            <p style={{color:"#4E4E50",lineHeight:"20px",fontSize:"16px"}}>
                            {t("tech6p")}
                            </p>
                            <Link to="/about" style={{position:"relative",bottom:"15px"}} title='Learn More' onClick={linkClick}>
                                <p style={{fontStyle:"italic",fontSize:"10px",color:"#6DA7A2"}}>
                                {t("learnmore")}
                                </p>
                            </Link>
                            </div>
                        </li>
                        </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;