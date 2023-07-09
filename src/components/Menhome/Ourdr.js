import React from 'react'
import teamone from '../../assets/img/team/team04.png'


function Ourdr() {
    

    return (
        <>
        <div className='container'>
            <div className='row justify-content-center text-center'>
            <div className='col-lg-8'>
                <h2 className='theme-dark' style={{ fontSize: "60px" }}>
                Meet Our Team
                </h2>
            </div>
            </div>
            <div className='row justify-content-around text-center' style={{paddingTop:"50px",paddingBottom:"50px"}}>
            <div className='col-lg-3 col-md-6 mb-4'>
                <img src={teamone} alt='team-img' className='img-fluid' style={{height:"200px",width:"400px"}}/>
                <div style={{ paddingTop: "15px" }}>
                <h3 className='theme-dark' style={{ fontSize: "18px" }}>
                    Laurent Bixheku
                </h3>
                <p className='theme-andent' style={{ fontSize: "16px" }}>
                    Dentistry
                </p>
                </div>
            </div>
            <div className='col-lg-3 col-md-6 mb-4'>
                <img src={teamone} alt='team-img' className='img-fluid' style={{height:"200px",width:"400px"}}/>
                <div style={{ paddingTop: "15px" }}>
                <h3 className='theme-dark' style={{ fontSize: "18px" }}>
                    Leonard Maci
                </h3>
                <p className='theme-andent' style={{ fontSize: "16px" }}>
                    Dental Tourism Clinic coordinator 
                </p>
                </div>
            </div>
            <div className='col-lg-3 col-md-6 mb-4'>
                <img src={teamone} alt='team-img' className='img-fluid' style={{height:"200px",width:"400px"}}/>
                <div style={{ paddingTop: "15px" }}>
                <h3 className='theme-dark' style={{ fontSize: "18px" }}>
                    Manuela Manjani
                </h3>
                <p className='theme-andent' style={{ fontSize: "16px" }}>
                    Dentistry
                </p>
                </div>
            </div>

            </div>
        </div>
        </>
    )
}

export default Ourdr