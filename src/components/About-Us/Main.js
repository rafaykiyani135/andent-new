import React from 'react'
import About from '../Menabout/About'
import 'react-floating-whatsapp-button/dist/index.css'
import Review from '../reviews/trustpilot'
import Treatments from './Treatments'
import Testimonial from '../Menhome/Testimonial'
import Team from '../Menhome/Ourdr'
import Vid from './Vid'
import Tourism from '../Menhome/tourism'
import Contact from '../implants/Contactsm'
import Book from './Bookwmap'

function Main() {
  return (
    <>
      <About/>
      <Review/>
      <Treatments/>
      <Testimonial/>
      <Team/>
      <Vid/>
      <Tourism/>
      <Contact/>
      <Book/>
    </>
  )
}

export default Main