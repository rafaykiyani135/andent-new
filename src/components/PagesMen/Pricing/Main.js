import React from 'react'
import Breadcrumb from '../../Menhome/breadcrumb'
import Pricing from '../../Pages/Pricing'

function Main() {
  return (
    <>
         <Breadcrumb
            subtitle="Pricing"
            title="Home"
            subtitledown="Pricing"
          />

          <Pricing/>

    </>
  )
}

export default Main