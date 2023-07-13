import s1 from '../../assets/andent-data/denture5.png'
import s2 from '../../assets/andent-data/denture6.png'
import s3 from '../../assets/andent-data/denture7.png'
import s4 from '../../assets/andent-data/denture8.png'

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
                            <h5 className="size-18 theme-dark">Consultation</h5>
                            <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                            Our team will evaluate your oral health and discuss your
                            denture options based on your specific needs and preferences.
                            </p>
                        </div>
                        <div className="col-lg-2 text-center upper-padding-rs" style={{position:"relative",bottom:"30px"}}>
                            <img src={s1} alt='step1' className='andent-icon-circ'/>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-2 text-center" style={{position:"relative",bottom:"30px"}}>
                            <img src={s2} alt='step1' className='andent-icon-circ move-img-right'/>
                        </div>
                        <div className="col-lg-6 text-left" >
                            <h5 className="size-18 theme-dark">Impressions and Measurements</h5>
                            <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                            Precise impressions and measurements of your mouth are taken
                            to ensure a proper fit and optimal functionality of your dentures.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-6 text-left move-right" >
                            <h5 className="size-18 theme-dark">Denture Fabrication</h5>
                            <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                            Using advanced dental technology and high-quality materials, your dentures will
                            be meticulously crafted to provide a natural-looking appearance and comfortable fit.
                            </p>
                        </div>
                        <div className="col-lg-2 text-center upper-padding-rs"  style={{position:"relative",bottom:"30px"}}>
                            <img src={s3} alt='step1' className='andent-icon-circ'/>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-2 text-center" style={{position:"relative",bottom:"30px"}}>
                            <img src={s4} alt='step1' className='andent-icon-circ move-img-right'/>
                        </div>
                        <div className="col-lg-6 text-left" >
                            <h5 className="size-18 theme-dark">Fitting and Adjustments</h5>
                            <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                            Once your dentures are ready, we will ensure they fit properly
                            and make any necessary adjustments to guarantee optimal comfort and functionality.
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Main;