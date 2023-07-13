import s1 from '../../assets/andent-data/s1.png'
import s2 from '../../assets/andent-data/s2.png'
import s3 from '../../assets/andent-data/s3.png'
import s4 from '../../assets/andent-data/s4.png'
import s5 from '../../assets/andent-data/s5.png'
import d1 from '../../assets/andent-data/d1.png'
import d2 from '../../assets/andent-data/d2.png'
import redtick from '../../assets/andent-data/tick.png'

function Main(){
    return(
        <div>
                <div className="container andent-padding">
                    <div className='row justify-content-center text-center'>
                        <div className='col-lg-12 col-md-10'>
                        <h3 className='size-60 theme-dark'>
                            Step by Step Procedure with Andent
                        </h3>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-6 text-left move-right" >
                            <h5 className="size-18 theme-dark">1. Comprehensive Assessment</h5>
                            <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                            We kickstart your journey with a detailed evaluation of your oral health,
                             understanding your needs, and discussing the best implant solution for you.
                            We leverage advanced imaging technology for precise treatment planning 
                            </p>
                        </div>
                        <div className="col-lg-2 text-center upper-padding-rs" style={{position:"relative",bottom:"30px"}}>
                            <img src={s1} alt='step1' className='andent-icon-sq'/>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-2 text-center" style={{position:"relative",bottom:"30px"}}>
                            <img src={s2} alt='step1' className='andent-icon-sq'/>
                        </div>
                        <div className="col-lg-6 text-left" >
                            <h5 className="size-18 theme-dark">2. Implant Surgery</h5>
                            <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                            Our dental experts will then place the titanium implant into your jawbone.
                             This is done with precision and care, prioritizing your comfort throughout
                              the process.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-6 text-left move-right" >
                            <h5 className="size-18 theme-dark">3. Healing and Integration</h5>
                            <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                            Post-surgery, we allow time for osseointegration, where the implant fuses with the jawbone.
                             This healing process, which can take a few months, ensures a stable foundation for the new tooth.
                            </p>
                        </div>
                        <div className="col-lg-2 text-center upper-padding-rs"  style={{position:"relative",bottom:"30px"}}>
                            <img src={s3} alt='step1' className='andent-icon-sq-1'/>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-2 text-center" style={{position:"relative",bottom:"30px"}}>
                            <img src={s4} alt='step1' className='andent-icon-sq-1'/>
                        </div>
                        <div className="col-lg-6 text-left" >
                            <h5 className="size-18 theme-dark">4. Abutment Placement</h5>
                            <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                            Once healed, an abutment, a small connector, is attached to the implant.
                             This will hold your new tooth in place.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-6 text-left move-right" >
                            <h5 className="size-18 theme-dark">5. Beautiful Restoration</h5>
                            <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                            The final step is the placement of the prosthetic tooth, beautifully crafted to blend seamlessly with your natural teeth.
                             With your new smile in place, you're all set to chew, speak, and beam with confidence.
                            </p>
                        </div>
                        <div className="col-lg-2 text-center upper-padding-rs"  style={{position:"relative",bottom:"30px"}}>
                            <img src={s5} alt='step1' className='andent-icon-sq'/>
                        </div>
                    </div>
                    <div className='row justify-content-center text-center upper-padding'>
                        <div className='col-lg-12 col-md-10'>
                        <h3 className='size-60 theme-dark'>
                            Types of Dental Implants
                        </h3>
                        </div>
                    </div>
                    <div className="row justify-content-center upper-padding text-left">
                        <div className="col-lg-3 text-center move-left" >
                            <img src={d1} alt='teeth1' style={{width:"321px",height:"195px"}}/>
                            <div style={{paddingTop:"20px"}}>
                                <h3 className='theme-dark size-18 text-center decent-pad'>
                                    Zirconia Implants
                                </h3>
                                <div className="row decent-pad">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="d-flex align-items-center">
                                    <div className="col-lg-3 col-md-3 col-sm-3 d-flex justify-content-left">
                                        <img src={redtick} className="icon img-fluid d-flex justify-content-center" alt="phoneicon" height={42} style={{ width: "42px" }} />
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-sm-9 text-left">
                                        <h6 style={{ color: "black", fontWeight: "400"}} className="size-16 icon-text-pos">
                                        Metal-free option with excellent aesthetics.
                                        </h6>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="row decent-pad">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="d-flex align-items-center">
                                    <div className="col-lg-3 col-md-3 col-sm-3 d-flex justify-content-left">
                                        <img src={redtick} className="d-flex justify-content-center icon-size" alt="phoneicon" />
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-sm-9 text-left">
                                        <h6 style={{ color: "black", fontWeight: "400"}} className="size-16 icon-text-pos">
                                        Biocompatible ceramic material.
                                        </h6>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="row decent-pad">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="d-flex align-items-center">
                                    <div className="col-lg-3 col-md-3 col-sm-3 d-flex justify-content-left">
                                        <img src={redtick} className="icon img-fluid d-flex justify-content-center" alt="phoneicon" height={42} style={{ width: "42px" }} />
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-sm-9 text-left">
                                        <h6 style={{ color: "black", fontWeight: "400"}} className="size-16 icon-text-pos">
                                        Perfect for patients seeking a natural look and feel.
                                        </h6>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 text-center move-right">
                            <img src={d2} alt='teeth1' style={{width:"321px",height:"195px"}}/>
                            <div style={{paddingTop:"20px"}}>
                                <h3 className='theme-dark size-18 text-center decent-pad'>
                                Titanium Implants
                                </h3>
                                <div className="row decent-pad">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="d-flex align-items-center">
                                    <div className="col-lg-3 col-md-3 col-sm-3 d-flex justify-content-left">
                                        <img src={redtick} className="icon img-fluid d-flex justify-content-center" alt="phoneicon" height={42} style={{ width: "42px" }} />
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-sm-9 text-left">
                                        <h6 style={{ color: "black", fontWeight: "400"}} className="size-16 icon-text-pos">
                                        Long lasting solution for natural tooth replacement
                                        </h6>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="row decent-pad">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="d-flex align-items-center">
                                    <div className="col-lg-3 col-md-3 col-sm-3 d-flex justify-content-left">
                                        <img src={redtick} className="icon img-fluid d-flex justify-content-center" alt="phoneicon" height={42} style={{ width: "42px" }} />
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-sm-9 text-left">
                                        <h6 style={{ color: "black", fontWeight: "400"}} className="size-16 icon-text-pos">
                                        Reduced risk of rejection or allergic reactions
                                        </h6>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="row decent-pad">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="d-flex align-items-center">
                                    <div className="col-lg-3 col-md-3 col-sm-3 d-flex justify-content-left">
                                        <img src={redtick} className="icon img-fluid d-flex justify-content-center" alt="phoneicon" height={42} style={{ width: "42px" }} />
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-sm-9 text-left">
                                        <h6 style={{ color: "black", fontWeight: "400"}} className="size-16 icon-text-pos">
                                        Prevents bone loss from missing teeth
                                        </h6>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
        </div>
    );
}

export default Main;