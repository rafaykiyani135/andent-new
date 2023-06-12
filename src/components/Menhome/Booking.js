import React from 'react'

function Booking() {
  return (
    <>
        <section id="booking" className="booking-area p-relative">
            <div className="container">
                <form action="#" className="contact-form">
                    <div className="row">
                        <div className="col-lg-12">
                        <ul>
                            <li>
                            <div className="contact-field p-relative c-name">
                                <input type="text" placeholder="Enter Name" />
                                <i className="fal fa-user" />
                            </div>
                            </li>
                            <li>
                            <div className="contact-field p-relative c-email">
                                <input type="text" placeholder="Select Your Location..." />
                                <i className="fal fa-map-marker-alt" />
                            </div>
                            </li>
                            <li>
                            <div className="contact-field p-relative c-subject mb-20">
                                <select className="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon" >
                                <option>Select Department...</option>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                                </select>
                                <i className="far fa-angle-down" />
                            </div>
                            </li>
                            <li>
                            <div className="slider-btn">
                                <button className="bk-btn" data-animation="fadeInRight" data-delay=".8s"> Submit Now </button>
                            </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                </form>
            </div>
        </section>

    </>
  )
}

export default Booking