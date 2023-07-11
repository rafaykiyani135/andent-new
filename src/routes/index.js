import React , {useEffect} from 'react'
import {Route, Routes, useLocation} from 'react-router-dom';
import Header from '../components/Header/Main'
import Footer from '../components/Footer/Main'
import Home from '../components/Home/Main'
import About from '../components/About-Us/Main'
import Contact from '../components/Contact-Us/Main'
import Blog from '../components/Blog/Main';
import BlogDdeatils from '../components/Blogdetails/Main'
import Service from '../components/Service/Main'
import Servicedeatils from '../components/Servicesdeatils/Main'
import Gallery from '../components/Pages/Gallarymen'
import Pricing from '../components/PagesMen/Pricing/Main';
import Faq from '../components/PagesMen/Faq/Main'
import Team from '../components/PagesMen/Team/Main'
import TeamDetails from '../components/PagesMen/TeamDetails/Main'
import Shop from '../components/PagesMen/Shop/Main'
import ShopDetails from '../components/PagesMen/ShopDetails/Main'
import Hometwo from '../components/HomeTwo/Main'
import HomeThree from '../components/HomeThree/Main'
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
        <Route path="/service" element={ <Service/>} />
        <Route path="/singleservice" element={ <Servicedeatils/>} />
        <Route path="/gallery" element={ <Gallery/>} />
        <Route path="/pricing" element={ <Pricing/>} />
        <Route path="/faq" element={ <Faq/>} />
        <Route path="/team" element={ <Team/>} />
        <Route path="/teamdetails" element={ <TeamDetails/>} />
        <Route path="/shop" element={ <Shop/>} />
        <Route path="/Shopdetails" element={ <ShopDetails/>} />
        <Route path="/hometwo" element={ <Hometwo/>} />
        <Route path="/homethree" element={ <HomeThree/>} />

      </Routes>

      <Footer/>
    </>
  )
}

export default Index