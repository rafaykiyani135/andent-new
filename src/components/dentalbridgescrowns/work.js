import img1 from '../../assets/andent-data/dbwork.png'
import img2 from '../../assets/andent-data/dbwork1.png'

function Main (){
    return(
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-10 col-sm-10" >
                        <img src={img1} alt='dbimg' className='img-fluid' style={{height:"402px",width:"402px"}}/>
                    </div>
                    <div className="col-lg-5 col-md-10 col-sm-10" style={{paddingTop:"70px"}}>
                        <h4 className='theme-dark size-20' style={{fontWeight:"700"}}>
                            Bridges
                        </h4>   
                        <p className='size-16' style={{lineHeight:"20px",color:"black"}}>
                        Bridges are fixed prostheses that replace missing teeth by using artificial
                         teeth to bridge the gap, supported by neighboring teeth or implants.
                        </p>
                        <h4 className='theme-dark size-20 upper-padding' style={{fontWeight:"700"}}>
                            Crowns
                        </h4>   
                        <p className='size-16' style={{lineHeight:"20px",color:"black"}}>
                        Crowns are custom-made tooth-shaped restorations that protect and 
                        strengthen damaged teeth, while enhancing their appearance.
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center">
                <div className="col-lg-5 col-md-10 col-sm-10" style={{paddingTop:"70px"}}>
                        <h4 className='theme-dark size-20' style={{fontWeight:"700"}}>
                        How bridges are different than implants
                        </h4>   
                        <p className='size-16' style={{lineHeight:"20px",color:"black"}}>
                        Dental bridges rely on adjacent teeth for support, while dental implants
                         are independently anchored into the jawbone, offering enhanced durability
                        </p>
                    </div>
                    <div className="col-lg-5 col-md-10 col-sm-10" style={{}}>
                        <img src={img2} alt='dbimg' className='' style={{height:"318px",width:"476px"}}/>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Main;