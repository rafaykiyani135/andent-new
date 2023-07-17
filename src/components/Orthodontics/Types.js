import d1 from '../../assets/andent-data/o1.png'
import d2 from '../../assets/andent-data/o2.png'


function Main () {




    return(
        <div className='container' style={{paddingBottom:"125px"}}>
            <div className='row justify-content-center'>
                <div className='col-lg-10 col-md-10'>
                    <h3 className='theme-dark size-60 mob-heading text-center decent-pad'>
                        Types of Orthodontic Treatments
                    </h3>
                </div>
            </div>
            <div className="row justify-content-center upper-pad-20 orth-type">
                <div className='col-lg-6 col-md-12 move-right'>
                    <div className='orth-types'>
                        <img src={d1} alt='traditional bracer' style={{width:"240px",height:"144px",borderRadius:"10px"}}/>
                    </div>
                    <div className='decent-pad orth-text-head'>
                        <h3 className='theme-dark size-25 text-center upper-pad-10' style={{lineHeight:"37.5px"}}>
                            Traditional Braces and Retainers
                        </h3>
                        <p className='size-16 text-center' style={{lineHeight:"20px",fontWeight:"400",color:"black"}}>
                        Durable metal braces expertly realign teeth,
                        offering a cost-effective and proven method
                        to perfect your smile.
                        </p>
                    </div>
                </div>
                <div className='col-lg-6 col-md-12 move-left'>
                    <div className='orth-types'>
                        <img src={d2} alt='traditional bracer' style={{width:"240px",height:"144px",borderRadius:"10px"}}/>
                    </div>
                    <div className='decent-pad orth-text-head'>
                        <h3 className='theme-dark size-25 text-center upper-pad-10' style={{lineHeight:"37.5px"}}>
                        Invisible<br/> Aligners
                        </h3>
                        <p className='size-16 text-center' style={{lineHeight:"20px",fontWeight:"400",color:"black"}}>
                        Invisible Aligners are custom-made, clear devices,
                        providing a discreet and removable solution for teeth realignment
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;