import s1 from '../../assets/andent-data/gd1.png'
import s2 from '../../assets/andent-data/gd2.png'
import s3 from '../../assets/andent-data/gd3.png'
import s4 from '../../assets/andent-data/gd4.png'
import s5 from '../../assets/andent-data/gd5.png'
import s6 from '../../assets/andent-data/gd6.png'
import s7 from '../../assets/andent-data/gd7.png'
import s8 from '../../assets/andent-data/gd8.png'
import s9 from '../../assets/andent-data/gd9.png'
import s10 from '../../assets/andent-data/gd10.png'

import Exp from '../implants/Exp';


function Main (){
    return(
        <div>
            <div className="container andent-padding">
                    <div className='row justify-content-center text-center'>
                        <div className='col-lg-12 col-md-10'>
                        <h3 className='size-60 theme-dark mob-heading'>
                             Experience Our Dental Treatments
                        </h3>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-left move-right" >
                            <h5 className="size-18 theme-dark">Routine Dental Examinations and Check-ups</h5>
                            <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                            Stay ahead of potential dental problems with regular check-ups. Our skilled dentists perform thorough examinations,
                             detecting any oral health issues early on and providing timely treatments.
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center upper-padding-rs" style={{position:"relative",bottom:"30px"}}>
                            <img src={s1} alt='step1' className='andent-icon-sq'/>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center" style={{position:"relative",bottom:"30px"}}>
                            <img src={s2} alt='step1' className='andent-icon-sq steps-img-left'/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-left move-left" >
                            <h5 className="size-18 theme-dark">Dental Cleanings </h5>
                            <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                            Experience a fresh and healthy smile with our professional dental cleanings. Our hygienists employ advanced techniques
                             to remove plaque, tartar, and stains, ensuring your teeth are thoroughly cleaned.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-left move-right" >
                            <h5 className="size-18 theme-dark">Dental Fillings</h5>
                            <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                            Restore the strength and appearance of your damaged teeth with our amalgam or composite resin fillings.
                             Our dentists ensure durable and aesthetically pleasing results, preserving your oral health.
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center upper-padding-rs"  style={{position:"relative",bottom:"30px"}}>
                            <img src={s3} alt='step1' className='andent-icon-sq'/>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center" style={{position:"relative",bottom:"30px"}}>
                            <img src={s4} alt='step1' className='andent-icon-sq steps-img-left'/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-left move-left" >
                            <h5 className="size-18 theme-dark">Tooth Extractions</h5>
                            <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                            In cases where a tooth is beyond repair due to severe damage or infection, our skilled dentists perform tooth extractions with utmost care.
                             We provide comprehensive aftercare instructions to facilitate a smooth recovery.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-left move-right" >
                            <h5 className="size-18 theme-dark">Dental Sealants</h5>
                            <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                            Protect your teeth from cavities with dental sealants. Our thin, protective coatings are
                             applied to the chewing surfaces of your teeth,
                             particularly beneficial for children and individuals prone to dental decay.
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center upper-padding-rs"  style={{position:"relative",bottom:"30px"}}>
                            <img src={s5} alt='step1' className='andent-icon-sq'/>
                        </div>
                    </div>

                    <Exp/>

                    <div className='decent-pad'>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-left move-right" >
                            <h5 className="size-18 theme-dark">Fluoride Treatments</h5>
                            <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                            Strengthen your tooth enamel and prevent tooth decay with our fluoride treatments.
                             Our application of this essential mineral provides
                             an extra layer of protection, especially for those at higher risk of cavities.
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center upper-padding-rs" style={{position:"relative",bottom:"30px"}}>
                            <img src={s6} alt='step1' className='andent-icon-sq'/>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center" style={{position:"relative",bottom:"30px"}}>
                            <img src={s7} alt='step1' className='andent-icon-sq steps-img-left'/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-left move-left" >
                            <h5 className="size-18 theme-dark">Treatment for Gum Disease (Gingivitis) </h5>
                            <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                            Combat gum disease with our effective treatments. Our comprehensive approach eliminates bacteria and
                             restores gum health, preventing further oral health complications.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-left move-right" >
                            <h5 className="size-18 theme-dark">Dental X-Rays</h5>
                            <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                            Accurate diagnoses and treatment planning are made possible with dental X-rays. Our modern imaging technology
                             captures detailed images, aiding in the detection of hidden dental issues.
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center upper-padding-rs"  style={{position:"relative",bottom:"30px"}}>
                            <img src={s8} alt='step1' className='andent-icon-sq'/>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center" style={{position:"relative",bottom:"30px"}}>
                            <img src={s9} alt='step1' className='andent-icon-sq steps-img-left'/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-left move-left" >
                            <h5 className="size-18 theme-dark">Dental Bonding</h5>
                            <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                            Enhance the appearance and functionality of your teeth with dental bonding. Our skilled dentists use tooth-colored 
                            resin material to repair chips, cracks, or discoloration, restoring your confident smile.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-around upper-padding">
                        <div className="col-lg-6 col-md-6 col-6 col-sm-6 text-left move-right" >
                            <h5 className="size-18 theme-dark">Oral Hygiene Instructions</h5>
                            <p className="size-16" style={{color:"#000000",lineHeight:"20px"}}>
                            Our dedicated dental team takes the time to educate patients on proper oral hygiene
                             techniques. We provide personalized instructions to help you maintain optimal dental health at home.
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6 col-sm-6 text-center upper-padding-rs"  style={{position:"relative",bottom:"30px"}}>
                            <img src={s10} alt='step1' className='andent-icon-sq'/>
                        </div>
                    </div>
                    </div>
                    

                </div>
        </div>
    )
}

export default Main;