import React , { useState } from 'react'
import Faqimg from '../../assets/img/bg/faq-img.png'


function Faqsection() {
    const [Faq, setFaq] = useState(0);

    const Drop = [
        {
            Que: "Vivamus rhoncus ante a ipsum imperdiet ?",
            Answer: " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        },
        {
            Que: "Vivamus rhoncus ante a ipsum imperdiet ?",
            Answer: " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        },
        {
            Que: "Vivamus rhoncus ante a ipsum imperdiet ?",
            Answer: " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        },
        {
            Que: "Vivamus rhoncus ante a ipsum imperdiet ?",
            Answer: " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        }
    ]

    return (
        <>
            <section className="faq-area fix" style={{ backgroundColor: "#0e264f" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title mb-50">
                                <h5>FAQ</h5>
                                <h2>Frequently Asked Question</h2>
                            </div>
                            <div className="faq-wrap">
                                <div className="accordion" id="accordionExample">
                               { Drop.map((items, index)=> (
                                    <div className="card" key={index}>
                                        <div className="card-header" id="headingThree">
                                            <h2 className="mb-0">
                                                <button className={`faq-btn ${Faq !== index && "collapsed"}`} type="button" data-bs-toggle="collapse" onClick={ ()=> {setFaq(index)}} data-bs-target="#collapseThree"  key={items}>
                                                    {items.Que}
                                                </button>
                                            </h2>
                                        </div>
                                        {Faq === index &&
                                            <div id="collapseThree" className="collapse show" data-bs-parent="#accordionExample" key={items}>
                                                <div className="card-body">
                                                {items.Answer}
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="faq-img text-right">
                                <img src={Faqimg} alt="img" className="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Faqsection