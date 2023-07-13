import b1 from '../../assets/andent-data/bd1.png'
import b2 from '../../assets/andent-data/bd2.png'
import b3 from '../../assets/andent-data/bd3.png'
import b4 from '../../assets/andent-data/bd4.png'
import s1 from '../../assets/andent-data/dvs1.png'
import s2 from '../../assets/andent-data/dvs2.png'
import s3 from '../../assets/andent-data/dvs3.png'
import s4 from '../../assets/andent-data/dvs4.png'


function Main (){
    return(
        <div>
            <div className="container andent-padding">
                <div>
                    <div className="row align-items-center justify-content-center text-center">
                    <div className="col-lg-8">
                        <div className="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                        <h2 className='theme-dark'>Benefits of Dental Veneers</h2>
                        </div>
                        <p className="theme-andent size-20" style={{lineHeight:"30px",fontWeight:"700"}}>
                        Veneers are an effective solution for a range of
                        cosmetic dental concerns like discolored, chipped,
                        or misaligned teeth
                        </p>
                    </div>
                    </div>

                    <div className="row justify-content-around">
                    <div className="col-lg-2 col-md-6 d-flex justify-content-center">
                        <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                            <div className='d-flex justify-content-center upper-padding'>
                            <img src={b1} alt="dt1" style={{height:"120px",width:"120px"}} className='img-fluid'/>
                            </div>
                            <div style={{paddingTop:"20px"}}>
                            <h4 className='theme-dark size-18' style={{textAlign:"center"}}>Aesthetics</h4>
                            </div>
                            <div>
                                <p className='size-16 text-center' style={{color:"black",lineHeight:"20px",fontWeight:"400"}}>
                                Our expertly crafted veneers enhance the appearance of teeth
                                that are discolored, stained, chipped, cracked, or have gaps
                                between them.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 d-flex justify-content-center">
                        <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                            <div className='d-flex justify-content-center upper-padding'>
                            <img src={b2} alt="dt1" style={{height:"120px",width:"120px"}} className='img-fluid'/>
                            </div>
                            <div style={{paddingTop:"20px"}}>
                            <h4 className='theme-dark size-18' style={{textAlign:"center"}}>Customization</h4>
                            </div>
                            <div>
                                <p className='size-16 text-center' style={{color:"black",lineHeight:"20px",fontWeight:"400"}}>
                                Each veneer is custom-made to match the color, shape,
                                size, and texture of your natural teeth ensuring a
                                seamless integration with your smile
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 d-flex justify-content-center">
                        <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                            <div className='d-flex justify-content-center upper-padding'>
                            <img src={b3} alt="dt1" style={{height:"120px",width:"120px"}} className='img-fluid'/>
                            </div>
                            <div style={{paddingTop:"20px"}}>
                            <h4 className='theme-dark size-18' style={{textAlign:"center"}}>Durability</h4>
                            </div>
                            <div>
                                <p className='size-16 text-center' style={{color:"black",lineHeight:"20px",fontWeight:"400"}}>
                                We use high-quality materials, such as porcelain
                                or composite resin, known for their strength and
                                longevity. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 d-flex justify-content-center">
                        <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                            <div className='d-flex justify-content-center upper-padding'>
                            <img src={b4} alt="dt1" style={{height:"120px",width:"120px"}} className='img-fluid'/>
                            </div>
                            <div style={{paddingTop:"20px"}}>
                            <h4 className='theme-dark size-18' style={{textAlign:"center"}}>Minimally Invasive</h4>
                            </div>
                            <div>
                                <p className='size-16 text-center' style={{color:"black",lineHeight:"20px",fontWeight:"400"}}>
                                Our minimally invasive approach preserves the majority
                                of your natural tooth structure by bonding the veneers
                                to the front surface of your teeth
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center justify-content-center text-center upper-padding">
                    <div className="col-lg-12">
                        <div className="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                        <h2 className='theme-dark'>Step by Step Procedure with Andent</h2>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-around upper-padding">
                    <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-left move-right" >
                        <h5 className="size-18 theme-dark">Consultation</h5>
                        <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                        The process starts with a thorough examination of your oral health.
                        We'll discuss your goals and the best type of veneers.
                        </p>
                    </div>
                    <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center upper-padding-rs" style={{position:"relative",bottom:"30px"}}>
                        <img src={s1} alt='step1' className='andent-icon-circ steps-img-left2'/>
                    </div>
                </div>
                <div className="row justify-content-around upper-padding">
                <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center upper-padding-rs" style={{position:"relative",bottom:"30px"}}>
                    <img src={s2} alt='step1' className='andent-icon-circ move-img-right'/>
                </div>
                <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-left" >
                    <h5 className="size-18 theme-dark">Preparation</h5>
                    <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                    Preparation may involve removing enamel from the tooth's surface to accommodate the veneer.
                    We will then take an impression or digital scan of your teeth.
                    </p>
                </div>
                </div>
                <div className="row justify-content-around upper-padding">
                    <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-left move-right" >
                        <h5 className="size-18 theme-dark">Creation</h5>
                        <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                        Using the impressions, we will craft the veneers using durable
                        materials that fit in with the rest of your teeth.
                        </p>
                    </div>
                    <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center upper-padding-rs" style={{position:"relative",bottom:"30px"}}>
                        <img src={s3} alt='step1' className='andent-icon-circ steps-img-left2'/>
                    </div>
                </div>
                <div className="row justify-content-around upper-padding">
                    <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center upper-padding-rs" style={{position:"relative",bottom:"30px"}}>
                        <img src={s4} alt='step1' className='andent-icon-circ move-img-right steps-img-left2'/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-left" >
                        <h5 className="size-18 theme-dark">Placement</h5>
                        <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                        We then clean your teeth and bond the veneers to the tooth's
                        surface using a special adhesive.
                        </p>
                    </div>
                 </div>
            </div>
            </div>
        </div>
    )
}

export default Main;