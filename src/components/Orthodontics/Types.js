import d1 from '../../assets/andent-data/o1.png'
import d2 from '../../assets/andent-data/o2.png'


function Main () {
    return(
        <div>
            <div className='row justify-content-center'>
                <div className='col-lg-10 col-md-10'>
                    <h3 className='theme-dark size-60 text-center decent-pad'>
                        Types of Orthodontic Treatments
                    </h3>
                </div>
            </div>
            <div className="row justify-content-center upper-padding orth-type">
                <div className='col-lg-5'>
                    <div className="col-lg-5 text-center">
                        <img src={d1} alt='teeth1' style={{width:"240px",height:"144px"}}/>
                        <div style={{paddingTop:"20px"}}>
                            <h3 className='theme-dark size-18 text-center decent-pad'>
                            Traditional Braces and Retainers
                            </h3>
                            <p className='size-16 decent-pad' style={{lineHeight:"20px",fontWeight:"400",color:"black"}}>
                            Durable metal braces expertly realign teeth, offering a
                            cost-effective and proven method to perfect your smile.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-5'>
                    <div className="col-lg-5 text-center" >
                        <img src={d2} alt='teeth1' style={{width:"240px",height:"144px"}}/>
                        <div style={{paddingTop:"20px"}}>
                            <h3 className='theme-dark size-18 text-center decent-pad'>
                            Invisible Aligners
                            </h3>
                            <br/>
                            <p className='size-16 decent-pad' style={{lineHeight:"20px",fontWeight:"400",color:"black"}}>
                            Invisible Aligners are custom-made, clear devices, providing
                            a discreet and removable solution for teeth realignment
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;