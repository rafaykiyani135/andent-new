import React from 'react'
import Logo from '../../assets/img/logo/f_logo.png'
import { Link } from 'react-router-dom'



function Main() {
  return (
    <>
        <footer className="footer-bg footer-p pt-90" style={{ backgroundColor: "#00173c" }}>
                <div className="footer-top pb-70">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                <h2>
                                    <img src={Logo} alt="logo" />
                                </h2>
                                </div>
                                <div className="footer-link">
                                <p>
                                    Mauris non nisi semper, lacinia neque in, dapibus leo. Curabitur
                                    sagittis libero tincidunt tempor finibus. Mauris at dignissim
                                    ligula, nec tristique orci.Quisque vitae metus.
                                </p>
                                <div className="f-contact">
                                    <ul>
                                    <li>
                                        <i className="icon fal fa-clock" />
                                        <span>
                                        Monday - Saturday:
                                        <br />
                                        9:00am - 10:00Pm
                                        </span>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                <h2>Other Links</h2>
                                </div>
                                <div className="footer-link">
                                <ul>
                                    <li>
                                    <Link to="/"> Home</Link>
                                    </li>
                                    <li>
                                    <Link to="/about">About Us</Link>
                                    </li>
                                    <li>
                                    <Link to="/service">Services</Link>
                                    </li>
                                    <li>
                                    <Link to="/gallery"> Project</Link>
                                    </li>
                                    <li>
                                    <Link to="/team">Our Team</Link>
                                    </li>
                                    <li>
                                    <Link to="/blog">Latest Blog</Link>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                <h2>Our Services</h2>
                                </div>
                                <div className="footer-link">
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
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                <h2>Contact Us</h2>
                                </div>
                                <div className="f-contact">
                                <ul>
                                    <li>
                                    <i className="icon fal fa-map-marker-check" />
                                    <span>
                                        1247/Plot No. 39, 15th Phase,
                                        <br /> LHB Colony, Kanpur
                                    </span>
                                    </li>
                                    <li>
                                    <i className="icon fal fa-phone" />
                                    <span>
                                        1800-121-3637
                                        <br />
                                        +91-7052-101-786
                                    </span>
                                    </li>
                                    <li>
                                    <i className="icon fal fa-envelope" />
                                    <span>
                                        <Link to="mailto:info@example.com">info@example.com</Link>
                                        <br />
                                        <Link to="mailto:help@example.com">help@example.com</Link>
                                    </span>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-wrap">
                    <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                        <div className="copy-text">
                            Copyright © 2023 decare. All rights reserved.
                        </div>
                        </div>
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4">
                        <div className="footer-social">
                            <a href='https://www.facebook.com/'>
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href='https://www.instagram.com/'>
                                <i className="fab fa-instagram" />
                            </a>
                            <a href='https://twitter.com/'>
                                <i className="fab fa-twitter" />
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
        </footer>

    </>
  )
}

export default Main