import s1 from '../../assets/andent-data/c1.png'
import s2 from '../../assets/andent-data/c2.png'
import s3 from '../../assets/andent-data/c3.png'
import s4 from '../../assets/andent-data/c4.png'
import s5 from '../../assets/andent-data/c5.png'
import d1 from '../../assets/andent-data/crown1.png'
import d2 from '../../assets/andent-data/crown2.png'
import d3 from '../../assets/andent-data/crown3.png'

function Main(){
    return(
        <div>
                <div className="container upper-padding">
                    <div className='row justify-content-center text-center'>
                        <div className='col-lg-12 col-md-10'>
                        <h3 className='size-60 theme-dark'>
                            Step by Step Procedure with Andent
                        </h3>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-6 text-left" >
                            <h5 className="size-18 theme-dark">1. Consultation</h5>
                            <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                            Our experienced dental team will assess your oral health and discuss your goals and concerns.
                            </p>
                        </div>
                        <div className="col-lg-2 text-center upper-padding-rs" style={{position:"relative",bottom:"30px"}}>
                            <img src={s1} alt='step1' className='icon'/>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-2 text-center" style={{position:"relative",bottom:"30px"}}>
                            <img src={s2} alt='step1' className='icon'/>
                        </div>
                        <div className="col-lg-6 text-left" >
                            <h5 className="size-18 theme-dark">2. Treatment Planning</h5>
                            <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                            A personalized treatment plan will be developed based on your unique needs and preferences
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-6 text-left" >
                            <h5 className="size-18 theme-dark">3. Tooth Preparation</h5>
                            <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                            For crowns, the damaged tooth is reshaped to create space for the crown.
                             For bridges, adjacent teeth are prepared to support the bridge.
                            </p>
                        </div>
                        <div className="col-lg-2 text-center upper-padding-rs"  style={{position:"relative",bottom:"30px"}}>
                            <img src={s3} alt='step1' className='icon'/>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-2 text-center" style={{position:"relative",bottom:"30px"}}>
                            <img src={s4} alt='step1' className='icon'/>
                        </div>
                        <div className="col-lg-6 text-left" >
                            <h5 className="size-18 theme-dark">4. Impressions to ensure optimal fit</h5>
                            <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                            An impression of your teeth is taken to ensure the crowns or bridges are 
                            custom-fit for optimal comfort and functionality.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-6 text-left" >
                            <h5 className="size-18 theme-dark">5. Placement of crowns or bridges </h5>
                            <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                            Once your custom crowns or bridges are ready, they will be securely bonded 
                            or fixed in place and you can enjoy your new healthy teeth.
                            </p>
                        </div>
                        <div className="col-lg-2 text-center upper-padding-rs"  style={{position:"relative",bottom:"30px"}}>
                            <img src={s5} alt='step1' className='icon'/>
                        </div>
                    </div>
                    <div className='row justify-content-center text-center upper-padding'>
                        <div className='col-lg-12 col-md-10'>
                        <h3 className='size-60 theme-dark'>
                        Types of Dental Crowns and Bridges
                        </h3>
                        </div>
                    </div>
                    <div className="row justify-content-center upper-padding text-left">
                        <div className="col-lg-3 text-center" >
                            <img src={d1} alt='teeth1' style={{width:"319px",height:"195px"}}/>
                            <div style={{paddingTop:"20px"}}>
                                <h3 className='theme-dark size-18 text-center decent-pad'>
                                    Zirconia Crowns
                                </h3>
                                <p style={{color:"black",lineHeight:"20px"}} className='size-16 decent-pad'>
                                Known for their strength and durability, zirconia crowns
                                 are highly resistant to chipping or cracking.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 text-center" >
                            <img src={d2} alt='teeth1' style={{width:"319px",height:"195px"}}/>
                            <div style={{paddingTop:"20px"}}>
                                <h3 className='theme-dark size-18 text-center decent-pad'>
                                    Porcelain Crowns
                                </h3>
                                <p style={{color:"black",lineHeight:"20px"}} className='size-16 decent-pad'>
                                Natural-looking and durable, porcelain crowns
                                 are a popular choice for front teeth.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 text-center" >
                            <img src={d3} alt='teeth1' style={{width:"319px",height:"195px"}}/>
                            <div style={{paddingTop:"20px"}}>
                                <h3 className='theme-dark size-18 text-center decent-pad'>
                                Ceramic Crowns
                                </h3>
                                <p style={{color:"black",lineHeight:"20px"}} className='size-16 decent-pad'>
                                Ceramic crowns offer excellent aesthetics and are metal-free,
                                 making them a great option for patients with metal allergies.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
        </div>
    );
}

export default Main;