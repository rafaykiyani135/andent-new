import React, { useState } from 'react'
import Logo from '../../assets/img/logo/logo.png'
import { Link } from 'react-router-dom'


function Main() {

    const [mobile, setmobile] = useState(false);
    const [home, setHome] = useState(false);
    const [Services, setServices] = useState(false)
    const [Pages, setPages] = useState(false)
    const [Blog, setBlog] = useState(false)

    return (
        <>
            <header className="header-area header-three">
                <div className="header-top second-header d-none d-md-block" >
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-8 d-none d-lg-block">
                                <div className="header-cta">
                                    <ul>
                                        <li>
                                            <i className="icon fal fa-envelope" />
                                            <span>info@example.com</span>
                                        </li>
                                        <li>
                                            <i className="icon fal fa-phone" />
                                            <span>+91-7052-101-786</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 d-none d-lg-block text-right">
                                <div className="header-social">
                                    <span>
                                        <Link to='https://www.facebook.com/' title="Facebook">
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link to='https://www.instagram.com/' title="LinkedIn">
                                            <i className="fab fa-instagram" />
                                        </Link>
                                        <Link to='https://twitter.com/' title="Twitter">
                                            <i className="fab fa-twitter" />
                                        </Link>
                                        <Link to='https://www.youtube.com/' title="Twitter">
                                            <i className="fab fa-youtube" />
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
                                                <li className="has-sub">
                                                    <Link to="/">Home</Link>
                                                    <ul>
                                                        <li>
                                                            <Link to="/">Home Page 01</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/hometwo">Home Page 02</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/homethree">Home Page 03</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link to="/about">About Us</Link>
                                                </li>
                                                <li className="has-sub">
                                                    <Link to="/service">Services</Link>
                                                    <ul>
                                                        <li>
                                                            <Link to="/singleservice"> Root Canal</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/singleservice">Alignment Teeth</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/singleservice"> Cosmetic Teeth</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/singleservice">Oral Hygiene</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/singleservice">Live Advisory</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/singleservice">Cavity Inspection</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/service">Services</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="has-sub">
                                                    <Link to="#">Pages</Link>
                                                    <ul>
                                                        <li>
                                                            <Link to="/gallery">Gallery</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/pricing">Pricing</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/faq">Faq</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/team">Team</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/teamdetails">Team Details</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/shop">Shop</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/Shopdetails">Shop Details</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="has-sub">
                                                    <Link to="/blog">Blog</Link>
                                                    <ul>
                                                        <li>
                                                            <Link to="/blog/1">Blog</Link>
                                                        </li>
                                                        <li>
                                                        <Link to='/blogdetails/1'>Blog Details</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link to="/contact">Contact</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 text-right d-none d-lg-block mt-25 mb-25 text-right text-xl-right">
                                    <div className="login">
                                        <ul>
                                            <li>
                                                <div className="second-header-btn">
                                                    <Link to="/contact" className="btn">
                                                        Book Appointment
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
                                                            {home &&
                                                                <ul style={{ display: "block" }}>

                                                                    <li>
                                                                        <Link to="/">Home Page 01</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/hometwo">Home Page 02</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/homethree">Home Page 03</Link>
                                                                    </li>

                                                                </ul>}

                                                            <Link className={`mean-expand ${mobile && "mean-clicked"}`} to="#" onClick={() => { setHome(!home) }} style={{ fontSize: 18 }}>
                                                                {home ? "-" : "+"}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/about">About Us</Link>
                                                        </li>
                                                        <li className="has-sub">
                                                            <Link to="/services">Services</Link>
                                                            {Services &&
                                                            <ul style={{ display: "block" }}>
                                                                <li>
                                                                    <Link to="/singleservice"> Root Canal</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/singleservice">Alignment Teeth</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/singleservice"> Cosmetic Teeth</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/singleservice">Oral Hygiene</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/singleservice">Live Advisory</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/singleservice">Cavity Inspection</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/services">Services</Link>
                                                                </li>
                                                            </ul>  
                                                            }
                                                            <Link className={`mean-expand ${mobile && "mean-clicked"}`} to="#" onClick={() => { setServices(!Services) }} style={{ fontSize: 18 }}>
                                                            {Services ? "-" : "+"}
                                                            </Link>
                                                        </li>
                                                        <li className="has-sub">
                                                            <Link to="#">Pages</Link>
                                                            {Pages && 
                                                            <ul style={{ display: "block" }}>
                                                                <li>
                                                                    <Link to="/gallery">Gallery</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/pricing">Pricing</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/faql">Faq</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/team">Team</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/teamsingle">Team Details</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/shop">Shop</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/Shopdetails">Shop Details</Link>
                                                                </li>
                                                            </ul>
                                                            }
                                                            <Link className={`mean-expand ${Pages && "mean-clicked"}`} to="#" style={{ fontSize: 18 }} onClick={() => { setPages(!Pages) }}>
                                                            {Pages ? "-" : "+"}
                                                            </Link>
                                                        </li>
                                                        <li className="has-sub">
                                                            <Link to="blog.html">Blog</Link>
                                                            {Blog && 
                                                            <ul style={{ display: "block" }}>
                                                                <li>
                                                                    <Link to="/blog/1">Blog</Link>
                                                                </li>
                                                                <li>
                                                                <   Link to='/blogdetails/1'>Blog Details</Link>
                                                                </li>
                                                            </ul> 
                                                            }
                                                            <Link className={`mean-expand ${Blog && "mean-clicked"}`} to="#" style={{ fontSize: 18 }} onClick={() => { setBlog(!Blog) }} >
                                                                +
                                                            </Link>
                                                        </li>
                                                        <li className="mean-last">
                                                            <Link to="/contact">Contact</Link>
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