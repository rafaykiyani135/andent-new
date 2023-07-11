import React from "react";

function Main (){

    const images = require.context('../../assets/andent-data/final pictures', true);
    const imageList = images.keys().map(image => images(image));

    return(
        <div>
        <div className="container upper-padding">

            <div className="row align-items-center justify-content-center text-center upper-padding">
                <div className="col-lg-12">
                    <div className="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                    <h2 className='theme-dark'>Before & After Pictures of Clients</h2>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center text-center">
            {imageList.map((image, index) => (
                <div className="col-lg-6 col-md-6" key={index} style={{paddingBottom:"50px"}}>
                <img src={image} alt={index} />
                </div>
            ))}
            </div>
        </div>
        </div>
    )
}

export default Main;