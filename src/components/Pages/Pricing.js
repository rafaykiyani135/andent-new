import React from 'react'
import IconOne from '../../assets/img/icon/pr-icon1.png'
import IconTwo from '../../assets/img/icon/pr-icon2.png'
import IconThree from '../../assets/img/icon/pr-icon3.png'
import { Link } from 'react-router-dom'

function Pricing() {
  return (
    <>
        <section id="pricing" className="pricing-area pt-120 pb-60 fix p-relative">
            <div className="container">
                <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="pricing-box pricing-box2 text-center mb-60">
                    <div className="pricing-head">
                        <div className="icon">
                        <img src={IconOne} alt="img" />
                        </div>
                        <h3>Basic Plan</h3>
                        <div className="price-count">
                        <h2>
                            $49 <span>/ Monthly</span>
                        </h2>
                        </div>
                        <hr />
                    </div>
                    <div className="pricing-body mt-20 mb-30 text-left">
                        <ul>
                        <li>Aliquam quis justo at lorem</li>
                        <li>Fusce sodales, urna et tempus</li>
                        <li>Vestibulum blandit lorem quis</li>
                        <li>Orci varius natoque penatibus</li>
                        <li>Aliquam a nisl congue, auctor</li>
                        </ul>
                    </div>
                    <div className="pricing-btn">
                        <Link to="contact.html" className="btn ss-btn">
                        Choose Plan
                        </Link>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="pricing-box pricing-box2 active text-center mb-60">
                    <div className="pricing-head">
                        <div className="icon">
                        <img src={IconTwo} alt="img" />
                        </div>
                        <h3>Standard Plan </h3>
                        <div className="price-count">
                        <h2>
                            $99 <span>/ Monthly</span>
                        </h2>
                        </div>
                        <hr />
                    </div>
                    <div className="pricing-body mt-20 mb-30 text-left">
                        <ul>
                        <li>Aliquam quis justo at lorem</li>
                        <li>Fusce sodales, urna et tempus</li>
                        <li>Vestibulum blandit lorem quis</li>
                        <li>Orci varius natoque penatibus</li>
                        <li>Aliquam a nisl congue, auctor</li>
                        </ul>
                    </div>
                    <div className="pricing-btn">
                        <Link to="contact.html" className="btn ss-btn">
                        Choose Plan
                        </Link>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="pricing-box pricing-box2 text-center mb-60">
                    <div className="pricing-head">
                        <div className="icon">
                        <img src={IconThree} alt="img" />
                        </div>
                        <h3>Unlimited Plan</h3>
                        <div className="price-count">
                        <h2>
                            $149 <span>/ Monthly</span>
                        </h2>
                        </div>
                        <hr />
                    </div>
                    <div className="pricing-body mt-20 mb-30 text-left">
                        <ul>
                        <li>Aliquam quis justo at lorem</li>
                        <li>Fusce sodales, urna et tempus</li>
                        <li>Vestibulum blandit lorem quis</li>
                        <li>Orci varius natoque penatibus</li>
                        <li>Aliquam a nisl congue, auctor</li>
                        </ul>
                    </div>
                    <div className="pricing-btn">
                        <Link to="contact.html" className="btn ss-btn">
                        Choose Plan
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

    </>
  )
}

export default Pricing