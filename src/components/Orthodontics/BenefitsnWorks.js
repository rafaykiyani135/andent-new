import Aligner from '../../assets/andent-data/aligners.png'
import b1 from '../../assets/andent-data/a1.png'
import b2 from '../../assets/andent-data/a2.png'
import b3 from '../../assets/andent-data/a3.png'
import b4 from '../../assets/andent-data/a4.png'

function Main (){
    return(
        <div>
            <div className="container upper-padding">
                <div className="row justify-content-center align-items-center text-center">
                    <h3 className='theme-dark size-60'>
                    Benefits of Invisible Aligners
                    </h3>
                </div>
                <div className="row justify-content-center align-items-center text-center upper-padding">
                    <div className="col-lg-5 col-md-10" style={{paddingBottom:"50px"}}>
                        <div>
                            <img src={Aligner} alt='aligner' style={{width:"482px",height:"322px"}}/>
                        </div>
                    </div> 
                    <br/>
                    <div className="col-lg-3 col-md-10">
                        <div>
                            <h3 className='size-25 theme-dark' style={{fontWeight:"700"}}>
                                Superior Design
                            </h3>
                            <p style={{color:"black",fontWeight:"400",lineHeight:"20px"}}>
                            Invisible aligners offer a <span className='theme-andent'>revolutionary, aesthetic, and convenient</span> orthodontic treatment.
                            With their clear design, comfortable fit, and advanced 3D technology, these aligners enable discreet,
                            predictable, and personalized teeth alignment, redefining your orthodontic journey.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-10">
                        <div>
                            <h3 className='size-25 theme-dark' style={{fontWeight:"700"}}>
                            Convenience
                            </h3>
                            <p style={{color:"black",fontWeight:"400",lineHeight:"20px"}}>
                            Invisible aligners at seamlessly integrate into your lifestyle.
                            They offer the <span className='theme-andent'>convenience of removability for daily activities</span>,
                            require fewer orthodontist visits compared to traditional braces,
                            and promote better oral hygiene by reducing the risks of tooth decay
                            and gum disease during treatment.
                            </p>
                        </div>
                    </div>     
                </div>
                <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                    <h2 className='theme-dark'>How Invisible Aligners Work</h2>
                    </div>
                </div>
                </div>

                <div className="row justify-content-around">
                <div className="col-lg-2 col-md-6 d-flex justify-content-center">
                    <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        <div style={{paddingTop:"20px"}}>
                        <h4 className='theme-dark size-18' style={{textAlign:"center"}}>3D Impression</h4>
                        </div>
                        <div>
                            <p className='size-16 text-center' style={{color:"black",lineHeight:"20px",fontWeight:"400"}}>
                            We begin with a 3D scan of your mouth to capture an exact
                            model of your teeth and gums, forming the basis for your
                            treatment plan.
                            </p>
                        </div>
                        <div className='d-flex justify-content-center upper-padding'>
                        <img src={b1} alt="dt1" style={{height:"120px",width:"120px"}} className='img-fluid'/>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-6 d-flex justify-content-center">
                    <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        <div style={{paddingTop:"20px"}}>
                        <h4 className='theme-dark size-18' style={{textAlign:"center"}}>Treatment Plan Design</h4>
                        </div>
                        <div>
                            <p className='size-16 text-center' style={{color:"black",lineHeight:"20px",fontWeight:"400"}}>
                            We map out the precise, step-by-step movement of your
                            teeth from their current position to their final desired
                            alignment.
                            </p>
                        </div>
                        <div className='d-flex justify-content-center upper-padding'>
                        <img src={b2} alt="dt1" style={{height:"120px",width:"120px"}} className='img-fluid'/>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-6 d-flex justify-content-center">
                    <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        <div style={{paddingTop:"20px"}}>
                        <h4 className='theme-dark size-18' style={{textAlign:"center"}}>Aligner Fabrication</h4>
                        </div>
                        <div>
                            <p className='size-16 text-center' style={{color:"black",lineHeight:"20px",fontWeight:"400"}}>
                            A series of aligners are crafted using biocompatible, BPA-free,
                             clear plastic material which are manufactured to ensure an exact fit. 
                            </p>
                        </div>
                        <div className='d-flex justify-content-center upper-padding'>
                        <img src={b3} alt="dt1" style={{height:"120px",width:"120px"}} className='img-fluid'/>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-6 d-flex justify-content-center">
                    <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        <div style={{paddingTop:"20px"}}>
                        <h4 className='theme-dark size-18' style={{textAlign:"center"}}>Quality Check</h4>
                        </div>
                        <div>
                            <p className='size-16 text-center' style={{color:"black",lineHeight:"20px",fontWeight:"400"}}>
                            Before you receive your aligners, each set undergoes a rigorous
                            quality check to ensure a perfect fit and optimal performance.
                            </p>
                        </div>
                        <div className='d-flex justify-content-center upper-padding' style={{paddingBottom:"50px"}}>
                        <img src={b4} alt="dt1" style={{height:"120px",width:"120px"}} className='img-fluid'/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;