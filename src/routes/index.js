import React , {useEffect} from 'react'
import {Route, Routes, useLocation} from 'react-router-dom';
import Header from '../components/Header/Main'
import Footer from '../components/Footer/Main'
import Home from '../components/Home/Main'
import About from '../components/About-Us/Main'
import Contact from '../components/Contact-Us/Main'
import Blog from '../components/Blog/Main';
import BlogDdeatils from '../components/Blogdetails/Main'
import Implants from '../components/implants/Main'
import BrdigesCrowns from '../components/dentalbridgescrowns/Main'
import GeneralDenstiry from '../components/generaldentistry/Main'
import Tourism from '../components/dentaltourism/Main';
import Orthodontic from '../components/Orthodontics/Main';
import Veneers from '../components/Veneers/Main'
import Dentures from '../components/dentures/Main'
import Testimonial from '../components/Testimonial/Main'

function Index() {

  const location = useLocation();
  const path = location.pathname
  useEffect(() => {
    window.scroll(0, 0)
}, [path]);

  return (
    <>
      <Header/>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path='/dental-implants' element={<Implants/>}/>
        <Route path='dental-crowns-bridges' element={<BrdigesCrowns/>}/>
        <Route path='general-dentistry' element={<GeneralDenstiry/>}/>
        <Route path='/dental-tourism' element={<Tourism/>}/>
        <Route path="/about" element={<About />} />
        <Route path='/orthodontics' element={<Orthodontic/>}/>
        <Route path='/dental-veneers' element={<Veneers/>}/>
        <Route path='/dentures' element={<Dentures/>}/>
        <Route path='/testimonials' element={<Testimonial/>}/>s
        <Route path="/contact" element={ <Contact/>} />
        <Route path="/blog/:page" element={ <Blog/>} />
        <Route path="/blogdetails/:id" element={ <BlogDdeatils/>} />
      </Routes>

      <Footer/>
    </>
  )
}

export default Index