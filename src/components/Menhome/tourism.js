import React from 'react'
import Innerone from '../../assets/andent-data/dt1.png'
import Innertwo from '../../assets/andent-data/dt2.png'
import Innerthree from '../../assets/andent-data/dt3.png'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'


function Tourism() {
  return (
    <>
        <section id="blog" className="blog-area p-relative fix pt-90 pb-90">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                    <h5 className='theme-andent' style={{color:"#6DA7A2",fontSize:"20px"}}>MAKE THE MOST OUT OF YOUR TRIP</h5>
                    <h2 className='theme-dark'>Dental Toursim</h2>
                    </div>
                </div>
                </div>
                <div className="row justify-content-around">
                <div className="col-lg-3 col-md-6 d-flex text-center">
                    <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        <div>
                        <img src={Innerone} alt="dt1" style={{height:"200px",width:"320px"}} className='img-fluid'/>
                        </div>
                        <div style={{paddingTop:"20px"}}>
                        <h4 className='theme-dark' style={{textAlign:"center",fontSize:"18px"}}>Free accommodation in a 4-star hotel in the heart of Tirana</h4>
                        </div>
                        <div style={{paddingTop:"0px"}}>
                        <p className='theme-dark text-center' style={{lineHeight:"20px"}}>
                        Allowing you to immerse yourself in the vibrant life and captivating
                         attractions while receiving top-tier dental services.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        <div>
                        <img src={Innertwo} alt="dt1" style={{height:"200px",width:"320px"}} className='img-fluid'/>
                        </div>
                        <div style={{paddingTop:"20px"}}>
                        <h4 className='theme-dark' style={{textAlign:"center",fontSize:"18px"}}>Assistance with your dental travel experience from start to finish</h4>
                        </div>
                        <div style={{paddingTop:"0px"}}>
                        <p className='theme-dark text-center' style={{lineHeight:"20px"}}>
                        Services like picking you up and dropping you off from the airport, scheduling
                         appointments, reminders, translations, and more.
                        </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                <div className="fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" >
                        <div>
                        <img src={Innerthree} alt="dt1" style={{height:"200px",width:"320px"}} className='img-fluid'/>
                        </div>
                        <div style={{paddingTop:"20px"}}>
                        <h4 className='theme-dark' style={{textAlign:"center",fontSize:"18px"}}>Travel tips and tours to make the most of your trip</h4>
                        </div>
                        <div style={{paddingTop:"0px"}}>
                        <p className='theme-dark text-center' style={{lineHeight:"20px"}}>
                        To ensure you're getting the most out of your trip, we will personalise your journey
                         based on your likes and dislikes.
                        </p>
                        </div>
                    </div>
                </div>
                </div>
                <div className='row justify-content-center text-center upper-padding'>
                <div className='col-lg-8 col-md-8 col-12 d-flex justify-content-center'>
                    <div style={{ position: 'relative', paddingTop: '56.25%', width: '100%' }}>
                    <ReactPlayer
                        url="https://streamable.com/yp0ty3"
                        controls={true}
                        width='100%'
                        height='100%'
                        style={{ position: 'absolute', top: 0, left: 0 }}
                    />
                    </div>
                </div>
                </div>
               <div className='row justify-content-center text-center'>
                <div className='col-lg-8 col-md-8 d-flex justify-content-center'>
                <div className='upper-padding'>
                        <button className='btn d-flex align-items-center justify-content-center' style={{ height: "50px" }}>
                            <Link to="/dental-tourism" style={{ color: "white" }}>
                            <p style={{transform:"translateY(8px)"}}>
                                Learn More
                            </p>
                            </Link>
                        </button>
                        </div>
                </div>
               </div>
                
                </div>
        </section>
    
    </>
  )
}

export default Tourism;