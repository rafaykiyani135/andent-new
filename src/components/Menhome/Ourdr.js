import React from 'react'
import teamone from '../../assets/img/team/team01.png'
import teamTwo from '../../assets/img/team/team02.png'
import teamThree from '../../assets/img/team/team03.png'
import teamfour from '../../assets/img/team/team04.png'
import { Link } from 'react-router-dom'
import Slider from "react-slick";


function Ourdr() {
    const satting = {
        dots: true,
        infinite: true,
        arrows: false,
        prevArrow: '<button type="button" className="slick-prev"><i className="far fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" className="slick-next"><i className="far fa-chevron-right"></i></button>',
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]}

    return (
        <>
            <section className="team-area2 fix p-relative pt-105 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 p-relative">
                            <div className="section-title center-align mb-50 text-center wow fadeInDown animated"
                                data-animation="fadeInDown"
                                data-delay=".4s" >

                                <h5>Our Doctor</h5>
                                <h2>Best Expert Dentist</h2>
                            </div>
                        </div>
                    </div>
                    <Slider className="row team-active" {...satting}>
                        <div className="col-xl-4">
                            <div className="single-team mb-40">
                                <div className="team-thumb">
                                    <div className="brd">
                                        <img src={teamone} alt="img" />
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4>
                                        <Link to="team-single.html">Howard Holmes</Link>
                                    </h4>
                                    <p>Dentist</p>
                                    <div className="team-social">
                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                {" "}
                                                <Link to="#">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-instagram" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="single-team mb-40">
                                <div className="team-thumb">
                                    <div className="brd">
                                        <img src={teamTwo} alt="img" />
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4>
                                        <Link to="team-single.html">Ella Thompson</Link>
                                    </h4>
                                    <p>Dentist</p>
                                    <div className="team-social">
                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                {" "}
                                                <Link to="#">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-instagram" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="single-team mb-40">
                                <div className="team-thumb">
                                    <div className="brd">
                                        <img src={teamThree} alt="img" />
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4>
                                        <Link to="team-single.html">Vincent Cooper</Link>
                                    </h4>
                                    <p>Dentist</p>
                                    <div className="team-social">
                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                {" "}
                                                <Link to="#">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-instagram" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="single-team mb-40">
                                <div className="team-thumb">
                                    <div className="brd">
                                        <img src={teamfour} alt="img" />
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4>
                                        <Link to="team-single.html">Danielle Bryant</Link>
                                    </h4>
                                    <p>Dentist</p>
                                    <div className="team-social">
                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                {" "}
                                                <Link to="#">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-instagram" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="single-team mb-40">
                                <div className="team-thumb">
                                    <div className="brd">
                                        <img src={teamThree} alt="img" />
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4>
                                        <Link to="team-single.html">Vincent Cooper</Link>
                                    </h4>
                                    <p>Dentist</p>
                                    <div className="team-social">
                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                {" "}
                                                <Link to="#">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fab fa-instagram" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Ourdr