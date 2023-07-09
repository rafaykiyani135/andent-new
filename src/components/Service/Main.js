import React from 'react'
import Bredcm from '../Menhome/breadcrumb'
import Testimonialslider from '../Menhome/Testimonial'
import Teeth from '../ServiceMen/Teeth'


function Main() {
  return (
    <>
      <Bredcm
            subtitle="Service"
            title="Home"
            subtitledown="Service" />
        <Teeth/>
        <Testimonialslider/>
    </>
  )
}

export default Main