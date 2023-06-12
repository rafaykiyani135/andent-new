import React from 'react'
import Bssingle from '../../assets/img/blog/inner_b1.jpg'
import bgsingleOne from '../../assets/img/blog/inner_b2.jpg'
import Bloginnertwo from '../../assets/img/blog/inner_b3.jpg'
import Slider from "react-slick";
import { Link } from 'react-router-dom';


function Second() {
  return (
    <>
       <div  className="bsingle__post mb-50">
            <Slider  className="bsingle__post-thumb blog-active" >
                <div className="slide-post">
                <img src={Bloginnertwo} alt="" />
                </div>
                <div className="slide-post">
                <img src={bgsingleOne} alt="" />
                </div>
                <div className="slide-post">
                <img src={Bssingle} alt="" />
                </div>
            </Slider>
            <div  className="bsingle__content">
                <div className="meta-info">
                <ul>
                    <li>
                    <i className="fal fa-user" />
                    By Zcube
                    </li>
                    <li>
                    <i className="fal fa-calendar-alt" /> 24th March 2021
                    </li>
                </ul>
                </div>
                <h2>
                <Link to="/blogdetails">
                    I must explain to you how all this mistaken idea of denouncing pleasure.
                </Link>
                </h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.Duis aute irure dolor in reprehenderit in voluptate
                velit esse.
                </p>
                <div className="blog__btn">
                <Link to="#" className="btn">
                    Read More
                </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Second