import React from 'react'
import Iconone from '../../assets/img/icon/costmetic-dentistry-veneers.png'
import Icontwo from '../../assets/img/icon/dental-implants.png'
import Iconthree from '../../assets/img/icon/dentalcrowns-bridges.png'
import Iconfour from '../../assets/img/icon/dentures.png'
import Iconfive from '../../assets/img/icon/general-dentistry.png'
import Iconsix from '../../assets/img/icon/orthodontic-treatment.png'
import { Link } from 'react-router-dom'


function Main (){
    return(
        <div>
            <section id="service-details2" className="andent-padding" >
                <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-12">
                    <div className="section-title center-align mb-50 text-center">
                        <h5 style={{fontSize:"20px",color:"#6DA7A2",paddingBottom:"20px"}} >EXPERIENCE THESE AND MORE</h5>
                        <h2 className='theme-dark' style={{fontSize:"60px"}}>Dental Treatments</h2>
                    </div>
                    </div>
                   
                    <div className="col-lg-5 col-md-6 col-sm-12 move-right">
                    <div className="about-content s-about-content">
                        <ul className="text-left">
                        <div>
                        <li style={{paddingBottom:"40px"}}>
                            <div className="icon">
                            <img src={Icontwo} alt="icon01" className='services-icon sm-icon'/>
                            </div>
                            <div className="text" style={{paddingLeft:"20px"}}>
                            <h4 className='theme-dark' style={{fontSize:"18px"}}>Dental Implants</h4>
                            <div style={{width:"263px",height:"60px"}}>
                                <p style={{color:"#4E4E50",lineHeight:"20px",fontSize:"16px"}}>
                                Durable, artificial tooth roots to support natural-looking replacement teeth.
                                </p>
                            </div>
                            <div style={{paddingTop:"15px"}}>
                                <Link to="/dental-implants" style={{position:"relative",bottom:"15px"}}>
                                <p style={{fontStyle:"italic",fontSize:"10px",color:"#6DA7A2"}}>
                                    Learn More
                                </p>
                                </Link>
                            </div>
                           
                            </div>
                        </li>
                        </div>
                        <div>
                        <li style={{paddingBottom:"40px"}}>
                            <div className="icon">
                            <img src={Iconthree} alt="icon01" className='services-icon sm-icon'/>
                            </div>
                            <div className="text" style={{paddingLeft:"20px"}}>
                            <h4 className='theme-dark' style={{fontSize:"18px"}}>Dental Crowns and Bridges</h4>
                            <div style={{width:"263px",height:"60px"}}>
                                <p style={{color:"#4E4E50",lineHeight:"20px",fontSize:"16px"}}>
                                High-quality prosthetics for damaged or missing teeth, ensuring durability.
                                </p>
                            </div>
                            <div style={{paddingTop:"15px"}}>
                                <Link to="/dental-crowns-bridges" style={{position:"relative",bottom:"15px"}}>
                                <p style={{fontStyle:"italic",fontSize:"10px",color:"#6DA7A2"}}>
                                    Learn More
                                </p>
                                </Link>
                            </div>
                            </div>
                        </li>
                        </div>
                        <div>
                        <li>
                            <div className="icon">
                            <img src={Iconfour} alt="icon01" className='services-icon sm-icon'/>
                            </div>
                            <div className="text" style={{paddingLeft:"20px"}}>
                            <h4 className='theme-dark' style={{fontSize:"18px"}}>Dentures</h4>
                            <div style={{width:"263px",height:"60px"}}>
                                  <p style={{color:"#4E4E50",lineHeight:"20px",fontSize:"16px"}}>
                                    Custom-made replacements for comfortable chewing, speaking, and smiling.
                                    </p>
                            </div>
                            <div style={{paddingTop:"15px"}}>
                                <Link to="/dentures" style={{position:"relative",bottom:"15px"}}>
                                <p style={{fontStyle:"italic",fontSize:"10px",color:"#6DA7A2"}}>
                                    Learn More
                                </p>
                                </Link>
                            </div>
                            </div>
                        </li>
                        </div>
                        </ul>
                    </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12 move-right">
                    <div className="about-content s-about-content">
                        <ul>
                        <div>
                        <li style={{paddingBottom:"40px"}}>
                            <div className="icon">
                            <img src={Iconone} alt="icon01" className='services-icon sm-icon'/>
                            </div>
                            <div className="text pt-10" style={{paddingLeft:"20px"}}>
                            <h4 className='theme-dark' style={{fontSize:"18px"}}>Cosmetic Dentistry and Veneers</h4>
                            <div style={{width:"263px",height:"60px"}}>
                                <p style={{color:"#4E4E50",lineHeight:"20px",fontSize:"16px"}}>
                                Transform your smile with whitening, veneers, and personalized makeovers.
                                </p>
                            </div>
                            <div style={{paddingTop:"15px"}}>
                                <Link to="/dental-veneers" style={{position:"relative",bottom:"15px"}}>
                                <p style={{fontStyle:"italic",fontSize:"10px",color:"#6DA7A2"}}>
                                    Learn More
                                </p>
                                </Link>
                            </div>
                            </div>
                        </li>
                        </div>
                        <div>
                        <li style={{paddingBottom:"40px"}}>
                            <div className="icon">
                            <img src={Iconsix} alt="icon01" className='services-icon sm-icon'/>
                            </div>
                            <div className="text pt-10" style={{paddingLeft:"20px"}}>
                            <h4 className='theme-dark' style={{fontSize:"18px"}}>Orthodontic Treatment</h4>
                            <div style={{width:"263px",height:"60px"}}>
                                <p style={{color:"#4E4E50",lineHeight:"20px",fontSize:"16px"}}>
                                Achieve straighter teeth and correct bites with orthodontic treatments, including Invisalign
                                </p>
                            </div>
                            <div style={{paddingTop:"15px"}}>
                                <Link to="/orthodontics" style={{position:"relative",bottom:"15px"}}>
                                <p style={{fontStyle:"italic",fontSize:"10px",color:"#6DA7A2"}}>
                                    Learn More
                                </p>
                                </Link>
                            </div>
                            </div>
                        </li>
                        </div>
                        <div>
                        <li>
                            <div className="icon">
                            <img src={Iconfive} alt="icon01" className='services-icon sm-icon'/>
                            </div>
                            <div className="text pt-10" style={{paddingLeft:"20px"}}>
                            <h4 className='theme-dark' style={{fontSize:"18px"}}>General Dentistry</h4>
                            <div style={{width:"263px",height:"60px"}}>
                                <p style={{color:"#4E4E50",lineHeight:"20px",fontSize:"16px"}}>
                                Preventive care, treatments, and maintenance for optimal oral health and a beautiful smile.
                                </p>
                            </div>
                            <div style={{paddingTop:"15px"}}>
                                <Link to="/general-dentistry" style={{position:"relative",bottom:"15px"}}>
                                <p style={{fontStyle:"italic",fontSize:"10px",color:"#6DA7A2"}}>
                                    Learn More
                                </p>
                                </Link>
                            </div>
                            </div>
                        </li>
                        </div>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
         </section>
        </div>  
    )
}

export default Main;