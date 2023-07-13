import img1 from '../../assets/andent-data/sec1.png'
import img2 from '../../assets/andent-data/sec2.png'
import img3 from '../../assets/andent-data/sec3.png'
import img4 from '../../assets/andent-data/sec4.png'
import img5 from '../../assets/andent-data/sec5.png'
import img6 from '../../assets/andent-data/sec6.png'
import { Link } from 'react-router-dom'

function Main (){


    return(
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-8 text-center">
                        <h3 className="theme-andent size-20" style={{fontWeight:"700"}}>
                        SAFETY IS OUR PRIORITY
                        </h3>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-md-8 text-center">
                        <h3 className="theme-dark size-60" style={{fontWeight:"700"}}>
                        Security Protocol & Technology
                        </h3>
                    </div>
                </div>
                <div className="row justify-content-center decent-pad">
                    <div className="col-lg-8 col-md-8 text-center">
                        <p className="size-16" style={{fontWeight:"400",lineHeight:"20px",color:"black"}}>
                        At Andent Clinic, we prioritize your health and safety by implementing top dental practices
                        and maintaining the highest hygiene standards. Our multi-professional dental team follows
                        international guidelines, ensuring a safe environment.
                        </p>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-12">
                    <div className="section-title center-align mb-50 text-center">
                        <p style={{fontSize:"16px",color:"#6DA7A2",paddingBottom:"20px"}} >Experience our state-of-the-art dental facilities equipped with modern tools and technologies, including:</p>
                    </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12">
                    <div>
                        <ul className="text-left">
                        <li style={{ paddingBottom: "40px", display: "flex" }}>
                            <div>
                            <img src={img1} alt="icon01" className='andent-icon-circ andent-icon-circ-sm ' style={{ maxWidth: "100%", height: "auto" }} />
                            </div>
                            <div className="text sec-icon-text" style={{ paddingLeft: "20px", position: "relative", top: "20px" }}>
                            <h4 className='theme-dark sec-icon-text-heading' style={{ fontSize: "18px" }}>Intra and Extra Oral Scanner</h4>
                            <p style={{ color: "#4E4E50", lineHeight: "20px", fontSize: "16px" }}>
                                Durable, artificial tooth roots to support natural-looking replacement teeth.
                            </p>
                            <Link to="/" style={{ position: "relative", bottom: "15px" }}>
                                <p style={{ fontStyle: "italic", fontSize: "10px", color: "#6DA7A2" }}>
                                Learn More
                                </p>
                            </Link>
                            </div>
                        </li>
                        <li style={{ paddingBottom: "40px", display: "flex" }}>
                            <div>
                            <img src={img3} alt="icon01" className='andent-icon-circ andent-icon-circ-sm' style={{ maxWidth: "100%", height: "auto" }} />
                            </div>
                            <div className="text sec-icon-text" style={{ paddingLeft: "20px", position: "relative", top: "20px" }}>
                            <h4 className='theme-dark sec-icon-text-heading' style={{ fontSize: "18px" }}>DNA and Bacterial Testing</h4>
                            <p style={{ color: "#4E4E50", lineHeight: "20px", fontSize: "16px" }}>
                                High-quality prosthetics for damaged or missing teeth, ensuring durability.
                            </p>
                            <Link to="/" style={{ position: "relative", bottom: "15px" }}>
                                <p style={{ fontStyle: "italic", fontSize: "10px", color: "#6DA7A2" }}>
                                Learn More
                                </p>
                            </Link>
                            </div>
                        </li>
                        <li style={{ paddingBottom: "40px", display: "flex" }}>
                            <div>
                            <img src={img5} alt="icon01" className='andent-icon-circ andent-icon-circ-sm' style={{ maxWidth: "100%", height: "auto" }} />
                            </div>
                            <div className="text sec-icon-text" style={{ paddingLeft: "20px", position: "relative", top: "20px" }}>
                            <h4 className='theme-dark sec-icon-text-heading' style={{ fontSize: "18px" }}>DNA and Bacterial Testing</h4>
                            <p style={{ color: "#4E4E50", lineHeight: "20px", fontSize: "16px" }}>
                                Custom-made replacements for comfortable chewing, speaking, and smiling.
                            </p>
                            <Link to="/" style={{ position: "relative", bottom: "15px" }}>
                                <p style={{ fontStyle: "italic", fontSize: "10px", color: "#6DA7A2" }}>
                                Learn More
                                </p>
                            </Link>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12">
                        <ul>
                        <div>
                        <li style={{paddingBottom:"40px",display:"flex"}}>
                            <div>
                            <img src={img2} alt="icon01" className='andent-icon-circ andent-icon-circ-sm' style={{ maxWidth: "100%", height: "auto" }} />
                            </div>
                            <div className="text sec-icon-text" style={{paddingLeft:"20px",position:"relative",top:"20px"}}>
                            <h4 className='theme-dark sec-icon-text-heading' style={{fontSize:"18px"}}>Laser Technology</h4>
                            <p style={{color:"#4E4E50",lineHeight:"20px",fontSize:"16px"}}>
                            Transform your smile with whitening, veneers, and personalized makeovers.
                            </p>
                            <Link to="/" style={{position:"relative",bottom:"15px"}}>
                                <p style={{fontStyle:"italic",fontSize:"10px",color:"#6DA7A2"}}>
                                    Learn More
                                </p>
                            </Link>
                            </div>
                        </li>
                        </div>
                        <div>
                        <li style={{paddingBottom:"40px",display:"flex"}}>
                            <div>
                            <img src={img4} alt="icon01" className='andent-icon-circ andent-icon-circ-sm' style={{ maxWidth: "100%", height: "auto" }}/>
                            </div>
                            <div className="text sec-icon-text" style={{paddingLeft:"20px",position:"relative",top:"20px"}}>
                            <h4 className='theme-dark sec-icon-text-heading' style={{fontSize:"18px"}}>Intraoral Camera</h4>
                            <p style={{color:"#4E4E50",lineHeight:"20px",fontSize:"16px"}}>
                            Achieve straighter teeth and correct bites with orthodontic treatments, including Invisalign
                            </p>
                            <Link to="/" style={{position:"relative",bottom:"15px"}}>
                                <p style={{fontStyle:"italic",fontSize:"10px",color:"#6DA7A2"}}>
                                    Learn More
                                </p>
                            </Link>
                            </div>
                        </li>
                        </div>
                        <div>
                        <li style={{paddingBottom:"40px",display:"flex"}}>
                            <div>
                            <img src={img6} alt="icon01" className='andent-icon-circ andent-icon-circ-sm' style={{ maxWidth: "100%", height: "auto" }}/>
                            </div>
                            <div className="text sec-icon-text" style={{paddingLeft:"20px",position:"relative",top:"20px"}}>
                            <h4 className='theme-dark sec-icon-text-heading' style={{fontSize:"18px"}}>3D Dental CT Scan</h4>
                            <p style={{color:"#4E4E50",lineHeight:"20px",fontSize:"16px"}}>
                            Preventive care, treatments, and maintenance for optimal oral health and a beautiful smile.
                            </p>
                            <Link to="/" style={{position:"relative",bottom:"15px"}}>
                                <p style={{fontStyle:"italic",fontSize:"10px",color:"#6DA7A2"}}>
                                    Learn More
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