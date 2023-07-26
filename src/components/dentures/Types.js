import b1 from '../../assets/andent-data/dentures2.png'
import b2 from '../../assets/andent-data/dentures3.png'
import b3 from '../../assets/andent-data/dentures4.png'


function Main (){
    return(
        <div>
            <div className="container upper-pad-20 mob-top-pad">
                <div className='mob-top-pad-dentures'>
                    <div className="row align-items-center justify-content-center text-center">
                    <div className="col-lg-8">
                        <div className="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                        <h2 className='theme-dark'>Types of Dentures</h2>
                        </div>
                        <p className="theme-andent size-20" style={{lineHeight:"30px",fontWeight:"700"}}>
                        Dentures provide a reliable remedy for dental issues like missing,
                        damaged, or decaying teeth, restoring both functionality and aesthetics
                        </p>
                    </div>
                    </div>

                    <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-6 d-flex justify-content-center">
                        <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                            <div className='d-flex justify-content-center upper-padding'>
                            <img src={b1} alt="dt1" style={{height:"144px",width:"240px"}} className='img-fluid'/>
                            </div>
                            <div style={{paddingTop:"20px"}}>
                            <h4 className='theme-dark size-18' style={{textAlign:"center"}}>Complete Dentures</h4>
                            </div>
                            <div>
                                <p className='size-16 text-center' style={{color:"black",lineHeight:"20px",fontWeight:"400"}}>
                                Complete dentures replace all of your natural teeth and are
                                custom-made to fit your mouth perfectly, providing a full and
                                natural-looking smile.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex justify-content-center">
                        <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                            <div className='d-flex justify-content-center upper-padding'>
                            <img src={b2} alt="dt1" style={{height:"144px",width:"240px"}} className='img-fluid'/>
                            </div>
                            <div style={{paddingTop:"20px"}}>
                            <h4 className='theme-dark size-18' style={{textAlign:"center"}}>Partial Dentures</h4>
                            </div>
                            <div>
                                <p className='size-16 text-center' style={{color:"black",lineHeight:"20px",fontWeight:"400"}}>
                                If you have some natural teeth remaining, partial dentures are
                                designed to fill in the gaps, restoring both aesthetics and
                                functionality.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 d-flex justify-content-center">
                        <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                            <div className='d-flex justify-content-center upper-padding'>
                            <img src={b3} alt="dt1" style={{height:"144px",width:"240px"}} className='img-fluid'/>
                            </div>
                            <div style={{paddingTop:"20px"}}>
                            <h4 className='theme-dark size-18' style={{textAlign:"center"}}>Implant-Supported Dentures</h4>
                            </div>
                            <div>
                                <p className='size-16 text-center' style={{color:"black",lineHeight:"20px",fontWeight:"400"}}>
                                Implant-supported dentures are attached to dental implants for
                                enhanced stability and comfort providing improved chewing ability.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Main;