import React from 'react'
import Iframe from 'react-iframe'


function Map() {
  return (
    <>
        <div className="map fix" style={{ background: "#f5f5f5" }}>
            <div className="container-flud">
                <div className="row">
                <div className="col-lg-12">
                    <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.004518759625!2d19.814192096789547!3d41.3305151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135031303fe86d0b%3A0x7d2830bb4995e303!2sDentisti%20in%20Albania%20-%20Andent%20Clinic!5e0!3m2!1sen!2s!4v1688988361448!5m2!1sen!2s" 
                           width={600}
                           height={450} 
                           style={{ border : "0" }}
                          loading="lazy">
                    </Iframe>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Map