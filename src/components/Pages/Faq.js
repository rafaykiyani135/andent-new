import React, { useState }  from 'react'


function Faq() {
    const [Faq, setFaq] = useState(0);
    
    const Drop = [
        {
            Que: " Breaking The Rules Using SQLite To Demo Web?",
            Answer: " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        },
        {
            Que: "Monthly Web Development Update Pragmatic Releasing?",
            Answer: " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        },
        {
            Que: "How To Use Underlined Text To Improve User Experience",
            Answer: " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        },
        {
            Que: "Understanding CSS Layout And The Block Formatting",
            Answer: " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        }
      
    ]



  return (
    <>
        

        <section id="faq" className="faq-area pt-120 pb-120">
            <div className="container">
                <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="faq-wrap">
                    <div className="accordion" id="accordionExample">
                    { Drop.map((items, index)=> (
                        <div className="card">
                        <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                            <button className={`faq-btn ${Faq !== index && "collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"  onClick={ ()=> {setFaq(index)}} key={items} >
                                {items.Que}
                            </button>
                            </h2>
                        </div>
                        {Faq === index && 
                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={{}} >
                                <div className="card-body" key={items}>
                                    {items.Answer}
                                </div>
                            </div> 
                            }
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="faq-wrap">
                    <div className="accordion" id="accordionExample1">
                    { Drop.map((items, index)=> (
                        <div className="card">
                        <div className="card-header" id="headingfive">
                            <h2 className="mb-0">
                            <button className={`faq-btn ${Faq !== index && "collapsed"}`} onClick={ ()=> {setFaq(index)}} type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" >
                                    {items.Que}
                            </button>
                            </h2>
                        </div>
                        {Faq === index && 
                            <div id="collapsefive" className="collapse show" aria-labelledby="headingfive" data-bs-parent="#accordionExample1" >
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
                </div>
            </div>
        </section>
    
    </>
  )
}

export default Faq