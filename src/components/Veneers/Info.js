import s1 from '../../assets/andent-data/dvi1.png'
import s2 from '../../assets/andent-data/dvi2.png'
import s3 from '../../assets/andent-data/dvi3.png'

function Main (){
    return(
        <div>
            <div className="container upper-padding">
            <div className="row align-items-center justify-content-center text-center">
                <div className="col-lg-10">
                    <div className="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                    <h2 className='theme-dark'>Cosmetic Dentistry and Smile Makeovers</h2>
                    </div>
                    <p className="theme-andent size-20" style={{lineHeight:"30px",fontWeight:"700"}}>
                    In addition to dental veneers, Andent offers a range of cosmetic dentistry
                    procedures to help you achieve the smile you've always desired
                    </p>
                </div>

                <div className="row justify-content-around upper-padding">
                <div className="col-lg-6 text-left" >
                        <h5 className="size-18 theme-dark">Teeth Whitening</h5>
                        <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                        Our professional teeth whitening treatments effectively remove
                        stains and discoloration, revealing a brighter and more vibrant smile
                        </p>
                    </div>
                    <div className="col-lg-3 text-center upper-padding-rs" style={{position:"relative",bottom:"30px"}}>
                        <img src={s1} alt='step1' style={{height:"144px",width:"240px"}}/>
                    </div>
                </div>

                <div className="row justify-content-around upper-padding">
                    <div className="col-lg-3 text-center upper-padding-rs" style={{position:"relative",bottom:"30px"}}>
                        <img src={s3} alt='step1' style={{height:"144px",width:"240px"}}/>
                    </div>
                    <div className="col-lg-6 text-left" >
                        <h5 className="size-18 theme-dark">Composite Bonding</h5>
                        <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                        Through composite bonding, we can repair chipped, cracked, or decayed
                        teeth using tooth-colored resin material
                        </p>
                    </div>
                </div>

                <div className="row justify-content-around upper-padding">
                <div className="col-lg-6 text-left" >
                        <h5 className="size-18 theme-dark">Smile Makeovers</h5>
                        <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                        Our smile makeovers address multiple aspects of your smile by combining various
                        cosmetic procedures tailored to your unique needs
                        </p>
                    </div>
                    <div className="col-lg-3 text-center upper-padding-rs" style={{position:"relative",bottom:"30px"}}>
                        <img src={s2} alt='step1' style={{height:"144px",width:"240px"}}/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Main;
