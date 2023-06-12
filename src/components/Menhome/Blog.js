import React from 'react'
import Innerone from '../../assets/img/blog/inner_b1.jpg'
import Innertwo from '../../assets/img/blog/inner_b2.jpg'
import Innerthree from '../../assets/img/blog/inner_b3.jpg'
import { Link } from 'react-router-dom'


function Blog() {
  return (
    <>
        <section id="blog" className="blog-area p-relative fix pt-90 pb-90">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                    <h5>Our Blog</h5>
                    <h2>Latest Blog &amp; News</h2>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="single-post2 hover-zoomin mb-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                    <div className="blog-thumb2">
                        <Link to="/blog">
                        <img src={Innerone} alt="img" />
                        </Link>
                    </div>
                    <div className="blog-content2">
                        <div className="date-home">
                        <i className="fal fa-calendar-alt" /> 24th March 2021
                        </div>
                        <h4>
                        <Link to="/blog">
                            Cras accumsan nulla nec lacus ultricies placerat.
                        </Link>
                        </h4>
                        <p>
                        Curabitur sagittis libero tincidunt tempor finibus. Mauris at
                        dignissim ligula, nec tristique orci.
                        </p>
                        <div className="blog-btn">
                        <Link to="/blog">Read More</Link>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-post2 mb-30 hover-zoomin wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                    <div className="blog-thumb2">
                        <Link to="/blog">
                        <img src={Innertwo} alt="img" />
                        </Link>
                    </div>
                    <div className="blog-content2">
                        <div className="date-home">
                        <i className="fal fa-calendar-alt" /> 24th March 2021
                        </div>
                        <h4>
                        <Link to="/blog">
                            Dras accumsan nulla nec lacus ultricies placerat.
                        </Link>
                        </h4>
                        <p>
                        Curabitur sagittis libero tincidunt tempor finibus. Mauris at
                        dignissim ligula, nec tristique orci.
                        </p>
                        <div className="blog-btn">
                        <Link to="/blog">Read More</Link>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-post2 mb-30 hover-zoomin wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                    <div className="blog-thumb2">
                        <Link to="/blog">
                        <img src={Innerthree} alt="img" />
                        </Link>
                    </div>
                    <div className="blog-content2">
                        <div className="date-home">
                        <i className="fal fa-calendar-alt" /> 24th March 2021
                        </div>
                        <h4>
                        <Link to="/blog">
                            Seas accumsan nulla nec lacus ultricies placerat.
                        </Link>
                        </h4>
                        <p>
                        Curabitur sagittis libero tincidunt tempor finibus. Mauris at
                        dignissim ligula, nec tristique orci.
                        </p>
                        <div className="blog-btn">
                        <Link to="/blog">Read More</Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    
    </>
  )
}

export default Blog