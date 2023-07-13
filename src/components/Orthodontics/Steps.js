import s1 from '../../assets/andent-data/os1.png'
import s2 from '../../assets/andent-data/os2.png'
import s3 from '../../assets/andent-data/os3.png'
import s4 from '../../assets/andent-data/os4.png'
import s5 from '../../assets/andent-data/os5.png'

function Main (){
    return (
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
                <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-left move-right" >
                    <h5 className="size-18 theme-dark">Consultation</h5>
                    <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                    Our orthodontic experts will assess your teeth and discuss your smile goals.
                    </p>
                </div>
                <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center upper-padding-rs" style={{position:"relative",bottom:"30px"}}>
                    <img src={s1} alt='step1' className='andent-icon-circ'/>
                </div>
            </div>
            <div className="row justify-content-around upper-padding">
                <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center upper-padding-rs" style={{position:"relative",bottom:"30px"}}>
                    <img src={s2} alt='step1' className='andent-icon-circ'/>
                </div>
                <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-left" >
                    <h5 className="size-18 theme-dark">Custom Treatment Plan</h5>
                    <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                    Using advanced technology, we create a personalized treatment plan tailored to your unique needs.
                    </p>
                </div>
            </div>
            <div className="row justify-content-around upper-padding">
                <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-left move-right" >
                    <h5 className="size-18 theme-dark">Fabrication Process</h5>
                    <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                    Your custom Invisible aligners or your metal braces will be be
                    fabricated using digital impressions of your teeth for a precise and comfortable fit.
                    </p>
                </div>
                <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center upper-padding-rs" style={{position:"relative",bottom:"30px"}}>
                    <img src={s3} alt='step1' className='andent-icon-circ'/>
                </div>
            </div>
            <div className="row justify-content-around upper-padding">
                <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center upper-padding-rs" style={{position:"relative",bottom:"30px"}}>
                    <img src={s4} alt='step1' className='andent-icon-circ'/>
                </div>
                <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-left" >
                    <h5 className="size-18 theme-dark">Aligner Wear or Placing Braces</h5>
                    <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                    You will wear your aligners for 20-22 hours a day or our
                    dentists will place your new braces on your teeth and ensure a comfortable fit
                    </p>
                </div>
            </div>
            <div className="row justify-content-around upper-padding">
                <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-left move-right" >
                    <h5 className="size-18 theme-dark">Smile Transformation</h5>
                    <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                    Over time, you will notice your teeth gradually moving into their proper alignment,
                    bringing you closer to your desired smile.
                    </p>
                </div>
                <div className="col-lg-2 col-md-6 col-6 col-sm-6text-center upper-padding-rs" style={{position:"relative",bottom:"30px"}}>
                    <img src={s5} alt='step1' className='andent-icon-circ'/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Main;