import React from 'react'
//import { useState } from 'react'
import Bssingle from '../../assets/img/blog/inner_b1.jpg'
import bgsingleOne from '../../assets/img/blog/inner_b2.jpg'
import { Link } from 'react-router-dom'


function First() {
   // const [video, setVideo] = useState();
    
    return (
        <>
            <div className="bsingle__post mb-50">
                <div className="bsingle__post-thumb">
                    <img src={Bssingle} alt="" />
                </div>
                <div className="bsingle__content">
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
                            Lorem ipsum dolor sit amet, consectetur cing elit, sed do eiusmod
                            tempor.
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

            <div className="bsingle__post mb-50">
                <div className="bsingle__post-thumb video-p">
                    <img src={bgsingleOne} alt="" />
                    <Link to="#" /*onClick={() => setVideo(true)} */className="video-i popup-video" >
                        <i className="fas fa-play" />
                    </Link>
                </div>
                <div className="bsingle__content">
                    <div className="meta-info">
                        <ul>
                            <li>
                                <i className="fal fa-user" />
                                By Zcube
                            </li>
                            <li>
                                <i className="far fa-comments" />
                                35 Comments
                            </li>
                        </ul>
                    </div>
                    <h2>
                        <Link to="/blogdetails">
                            There are many variations passages of like consectetur lorem ipsum
                            available.
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

export default First