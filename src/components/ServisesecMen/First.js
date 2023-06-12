import React from 'react'
import hairmakeup2 from '../../assets/img/bg/hair-makeup2.jpg'
import hairmakeup3 from '../../assets/img/bg/hair-makeup3.jpg'
import { Link } from 'react-router-dom'


function First() {
  return (
    <>
      
      <div className="about-area5 about-p p-relative">
        <div className="container pt-120 pb-90">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4 order-1">
              <aside className="sidebar services-sidebar">
                <div className="sidebar-widget categories">
                  <div className="widget-content">
                    <ul className="services-categories">
                      <li>
                        <Link to="single-service.html"> Root Canal</Link>
                      </li>
                      <li className="active">
                        <Link to="single-service.html">Alignment Teeth</Link>
                      </li>
                      <li>
                        <Link to="single-service.html"> Cosmetic Teeth</Link>
                      </li>
                      <li>
                        <Link to="single-service.html">Oral Hygiene</Link>
                      </li>
                      <li>
                        <Link to="single-service.html">Live Advisory</Link>
                      </li>
                      <li>
                        <Link to="single-service.html">Cavity Inspection</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="service-detail-contact wow fadeup-animation" data-wow-delay="1.1s">
                  <h3 className="h3-title">If You Need Any Help Contact With Us</h3>
                  <Link to="/" title="Call now">
                    +91 705 2101 786
                  </Link>
                </div>
              </aside>
            </div>
           
            <div className="col-lg-8 col-md-12 col-sm-12 order-2">
              <div className="service-detail">
                <div className="content-box">
                  <h2> We give the best Services </h2>
                  <p>
                    Pleasure and praising pain was born and I will give you a complete
                    account of the systems, and expound the actually teachings of the
                    great explorer of the truth, the master-builder of human uts
                    happiness. No one rejects, dislikes, or avoids pleasure itself,
                    because it is pleasure, but because those who do not know how to
                    pursue pleasure rationally Nor who loves or pursues or desires to
                    obtain pain of itself.
                  </p>

                  <div className="two-column">
                    <div className="row">
                      <div className="image-column col-xl-6 col-lg-12 col-md-12">
                        <figure className="image">
                          <img src={hairmakeup2} alt="" />
                        </figure>
                      </div>
                      <div className="text-column col-xl-6 col-lg-12 col-md-12">
                        <figure className="image">
                          <img src={hairmakeup3} alt="" />
                        </figure>
                      </div>
                    </div>
                  </div>
                  <h3>Why Choose This Service</h3>
                  <p>
                    Complete account of the systems and expound the actually teachings
                    of the great explorer of the truth, the master-builder of human
                    uts happiness. No one rejects, dislikes, or avoids pleasure
                    itself, because it is pleasure, but because those who do not know
                    how to pursue pleasure rationally encounter consequences that are
                    extremely.
                  </p>
                  <p>
                    Complete account of the systems and expound the actually teachings
                    of the great explorer of the truth, the master-builder of human
                    uts happiness. No one rejects, dislikes, or avoids pleasure
                    itself, because it is pleasure, but because those who do not know
                    how to pursue pleasure rationally.
                  </p>
                 
                  <div className="product-info-tabs">
                    
                    <div className="prod-tabs tabs-box">
                     
                      <ul className="tab-btns tab-buttons clearfix">
                        <li data-tab="#prod-details" className="tab-btn active-btn">
                          Precautions
                        </li>
                        <li data-tab="#prod-spec" className="tab-btn">
                          Intelligence
                        </li>
                        <li data-tab="#prod-reviews" className="tab-btn">
                          Specializations
                        </li>
                      </ul>
                     
                      <div className="tabs-content">
                        
                        <div className="tab active-tab" id="prod-details">
                          <div className="content">
                            <p>
                              Suspendisse laoreet at nulla id auctor. Maecenas in dui
                              cursus, lacinia nisl non, blandit lorem. Aliquam vel
                              risus hendrerit, faucibus nisl a, porta sapien. Etiam
                              iaculis mattis quam, nec iaculis velit feugiat quis.
                              Pellentesque sed feugiat dui, ac euismod leo.
                            </p>
                          </div>
                        </div>
                       
                        <div className="tab" id="prod-spec">
                          <div className="content">
                            <p>
                              Suspendisse laoreet at nulla id auctor. Maecenas in dui
                              cursus, lacinia nisl non, blandit lorem. Aliquam vel
                              risus hendrerit, faucibus nisl a, porta sapien. Etiam
                              iaculis mattis quam, nec iaculis velit feugiat quis.
                              Pellentesque sed feugiat dui, ac euismod leo.
                            </p>
                          </div>
                        </div>
                        <div className="tab" id="prod-reviews">
                          <div className="content">
                            <p>
                              Suspendisse laoreet at nulla id auctor. Maecenas in dui
                              cursus, lacinia nisl non, blandit lorem. Aliquam vel
                              risus hendrerit, faucibus nisl a, porta sapien. Etiam
                              iaculis mattis quam, nec iaculis velit feugiat quis.
                              Pellentesque sed feugiat dui, ac euismod leo.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default First