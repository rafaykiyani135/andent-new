import img1 from '../../assets/andent-data/dentures1.png'
import redtick from '../../assets/andent-data/tick.png'

function Main (){
    return(
        <div>
            <div className="container">
                <div className='row justify-content-center text-center'>
                    <div className='col-lg-12 col-md-12 col-12'>
                        <h4 className='size-60 theme-dark mob-heading' style={{fontWeight:"700"}}>
                            How Dentures Work
                        </h4>
                    </div>
                </div>
                <div className="row justify-content-center text-left upper-padding">
                    <div className="col-lg-6 col-md-12 move-right" style={{paddingBottom:"35px"}}>
                        <img src={img1} alt='img1' style={{height:"275px",width:"523px"}}/>
                    </div>

                    <div className='col-lg-6 col-md-12'>
                    <h4 className='theme-dark size-20'>Natural Looking Design</h4>
                    <p className='size-16' style={{color:"black",lineHeight:"20px",fontWeight:"400"}}>
                        Dentures are removable dental appliances that are crafted to resemble
                        your natural teeth and gums. They are custom-made to fit your unique
                        mouth shape and are designed to restore your smile and ability to chew
                        and speak properly. Dentures are made from durable materials that are
                        both comfortable and functional.
                    </p>
                    <div className="row decent-pad">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="d-flex align-items-center">
                            <div className="col-lg-3 col-md-3 col-sm-3 d-flex justify-content-left">
                                <img src={redtick} className="d-flex justify-content-center icon-size" alt="phoneicon" />
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-9">
                                <h6 style={{ color: "black", fontWeight: "400"}} className="size-16 icon2-text-pos">
                                <b>Biocompatible ceramic material.</b>
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
                            <div className="col-lg-9 col-md-9 col-sm-9">
                                <h6 style={{ color: "black", fontWeight: "400"}} className="size-16 icon2-text-pos">
                                <b>Easy to Maintain.</b>
                                </h6>
                            </div>
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