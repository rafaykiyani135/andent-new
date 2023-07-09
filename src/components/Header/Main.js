import React, { useState } from 'react'
import Logo from '../../assets/andent-data/logo.png'
import { Link } from 'react-router-dom'
import phone from '../../assets/andent-data/callcalling.png'
import mail from '../../assets/andent-data/mail1.png'
import ig from '../../assets/andent-data/instagram.png'
import fb from '../../assets/andent-data/facebook.png'


function Main() {

    const [mobile, setmobile] = useState(false);
    const [Services, setServices] = useState(false)

    return (
        <>
            <header className="header-area header-three">
                <div className="header-top second-header d-none d-md-block" style={{backgroundColor:"#6DA7A2"}}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-8 d-none d-lg-block">
                                <div className="header-cta">
                                    <ul>
                                        <li>
                                            <img src={phone} alt='phone' className='icon' style={{paddingRight:"10px"}}/>
                                            <span>+91-7052-101-786</span>
                                        </li>
                                        <li>
                                           <img src={mail} alt='mail' className='icon1' style={{paddingRight:"10px"}}/>
                                            <span>info@example.com</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 d-none d-lg-block text-right">
                                <div className="header-social">
                                    <span>
                                        <Link to='https://www.facebook.com/' title="Facebook">
                                        <img src={fb} alt='phone' className='icon3' style={{paddingRight:"10px"}}/>
                                        </Link>
                                        <Link to='https://www.instagram.com/' title="instgram">
                                        <img src={ig} alt='phone' className='icon2' style={{paddingRight:"10px"}}/>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="header-sticky" className="menu-area sticky-menu" style={{ backgroundColor: "white" }}>
                    <div className="container">
                        <div className="second-menu">
                            <div className="row align-items-center">
                                <div className="col-xl-2 col-lg-2">
                                    <div className="logo">
                                        <Link to="/">
                                            <img src={Logo} alt="logo" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-7">
                                    <div className="main-menu text-right text-xl-right">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li className='has-sub'>
                                                    <Link to="/">Home</Link>
                                                </li>
                                                <li className='has-sub'>
                                                    <Link to="/dental-tourism">Denal Tourism</Link>
                                                </li>
                                                <li className='has-sub'>
                                                    <Link to="/dental-crowns-bridges">Dental Crowns</Link>
                                                </li>
                                                <li className='has-sub'>
                                                    <Link to="#">About</Link>
                                                </li>
                                                <li className='has-sub'>
                                                    <Link to="#">Testimonials</Link>
                                                </li>
                                                <li className='has-sub'>
                                                    <Link to="/contact">Other Services &nbsp; <span style={{position:"relative",bottom:"3px"}}><i class="arrow down"></i></span></Link>
                                                    <ul>
                                                        <li>
                                                            <Link to="/dental-implants">Dental Implants</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/singleservice">Cosmetic Dentistry and Veneers</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/singleservice">Orthodontic Treatment</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/singleservice">Dentures</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/general-dentistry">General Dentistry</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 text-right d-none d-lg-block mt-25 mb-25 text-right text-xl-right">
                                    <div>
                                        <ul>
                                            <li>
                                                <div>
                                                    <Link to="/contact" className="header-btn">
                                                        <p>
                                                        Contact Us
                                                        </p>
                                                    </Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mobile-menu mean-container">
                                        <div className="mean-bar">
                                            <Link to="#" onClick={() => setmobile(!mobile)} className={`meanmenu-reveal ${mobile && "meanclose"}`} style={{ right: "0px", left: "auto", textAlign: "center", textIndent: "0px", fontSize: "18px" }}>
                                                {mobile ? "X" : <span><span><span></span></span></span>}
                                            </Link>
                                            {mobile &&
                                                <nav className="mean-nav">
                                                    <ul style={{ display: "block" }}>
                                                        <li className="has-sub">
                                                            <Link to="/"> Home </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/dental-tourism">Dental Tourism</Link>
                                                        </li>
                                                        <li className="has-sub">
                                                            <Link to="/dental-crowns-bridges">Dental Crowns</Link>
                                                        </li>
                                                        <li className="has-sub">
                                                            <Link to="#">About</Link>
                                                        </li>
                                                        <li className="has-sub">
                                                            <Link to="#">Testimonials</Link>
                                                        </li>
                                                        <li className="mean-last has-sub">
                                                            <Link to="/contact">Other Services</Link>
                                                            {Services &&
                                                            <ul style={{ display: "block" }}>
                                                            <li>
                                                                <Link to="/dental-implants">Dental Implants</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/singleservice">Cosmetic Dentistry and Veneers</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/singleservice">Orthodontic Treatment</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/singleservice">Dentures</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/general-dentistry">General Dentistry</Link>
                                                            </li>
                                                            </ul>  
                                                            }
                                                            <Link className={`mean-expand ${mobile && "mean-clicked"}`} to="#" onClick={() => { setServices(!Services) }} style={{ fontSize: 18 }}>
                                                            {Services ? "-" : "+"}
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Main