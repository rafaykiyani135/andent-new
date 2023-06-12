/*
import React from 'react'
import { useState } from 'react'
import Protfolioimg01 from '../../../assets/img/gallery/protfolio-img01.png'
import Protfolioimg02 from '../../../assets/img/gallery/protfolio-img02.png'
import Protfolioimg03 from '../../../assets/img/gallery/protfolio-img03.png'
import Protfolioimg04 from '../../../assets/img/gallery/protfolio-img04.png'
import Protfolioimg05 from '../../../assets/img/gallery/protfolio-img05.png'
import Protfolioimg06 from '../../../assets/img/gallery/protfolio-img06.png'
import Breadcrumb from '../../Menhome/breadcrumb'
import FsLightbox from 'fslightbox-react';
import { Link } from 'react-router-dom'

*/

function Main() {
/*
    const [images , setImages] = useState([
   
        Protfolioimg01,
        Protfolioimg02,
        Protfolioimg03,
        Protfolioimg04,      
        Protfolioimg05,
        Protfolioimg06,
        
	])

    const [img,  setImg] = useState()
    const [img1, setImg1] = useState()
    const [img2, setImg2] = useState()
    const [img3, setImg3] = useState()
    const [img4, setImg4] = useState()
    const [img5, setImg5] = useState()

    const [toggler, setToggler] = useState(false);

    const [activeImage , setActiveImage] = useState(1)


  return (
    <>
          <Breadcrumb
            subtitle="Gallery"
            title="Home"
            subtitledown="Gallery"
          />

            <section id="work" className="pt-105 pb-95">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="masonry-gallery-huge">
                        <div className="grid row">
                            <div className="grid-item hover-zoomin banking" >
                            <Link className="popup-image lightbox-image"  data-fancybox="gallery" to="#" onClick={() => setImg(true)}>
                                <figure className="gallery-image"
                                    onClick={() => {
                                                setToggler(!toggler)
                                                setActiveImage(1) }} >
                                     <img src={Protfolioimg02} alt="img" className="img" />
                                </figure>
                            </Link>
                            </div>
                            <div className="grid-item hover-zoomin financial" style={{left: "49.5177%"}}>
                            <Link className="popup-image lightbox-image" data-fancybox="gallery" to="#" nClick={() => setImg1(true)}>
                                <figure className="gallery-image"
                                onClick={() => {
                                    setToggler(!toggler)
                                    setActiveImage(2) }}>
                                <img src={Protfolioimg03} alt="img" className="img" />
                                </figure>
                            </Link>
                            </div>
                            <div className="grid-item hover-zoomin financial">
                            <Link className="popup-image lightbox-image" data-fancybox="gallery" to="#" nClick={() => setImg2(true)}>
                                <figure className="gallery-image"
                                    onClick={() => {
                                        setToggler(!toggler)
                                        setActiveImage(3) }}>
                                    <img src={Protfolioimg01} alt="img" className="img" />
                                </figure>
                            </Link>
                            </div>
                            <div className="grid-item hover-zoomin insurance">
                            <Link className="popup-image lightbox-image" data-fancybox="gallery" to="#" nClick={() => setImg3(true)}>
                                <figure className="gallery-image"
                                    onClick={() => {
                                        setToggler(!toggler)
                                        setActiveImage(4) }}
                                        >
                                <img src={Protfolioimg06} alt="img" className="img" />
                                </figure>
                            </Link>
                            </div>
                            <div className="grid-item hover-zoomin banking insurance">
                            <Link className="popup-image lightbox-image" data-fancybox="gallery" to="#" nClick={() => setImg4(true)}>
                                <figure className="gallery-image"
                                    
                                    onClick={() => {
                                        setToggler(!toggler)
                                        setActiveImage(5) }}
                                        >
                                <img src={Protfolioimg04} alt="img" className="img" />
                                </figure>
                            </Link>
                            </div>
                            <div className="grid-item hover-zoomin financial">
                            <Link className="popup-image lightbox-image" data-fancybox="gallery" to="#" nClick={() => setImg5(true)}>
                                <figure className="gallery-image"
                                    onClick={() => {
                                        setToggler(!toggler)
                                        setActiveImage(6) }}
                                    >
                                <img src={Protfolioimg05} alt="img" className="img" />
                                </figure>
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <FsLightbox
                toggler={toggler}
                sources={images}
                slide={activeImage} />

    </>
  )*/
}

export default Main