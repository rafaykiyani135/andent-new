import React from 'react'
import Breadcrumb from '../../Menhome/breadcrumb'
import Shop from '../../Pages/Shop'


function Main() {
  return (
    <>
        <Breadcrumb
            subtitle="Shop"
            title="Home"
            subtitledown="Shop"
          />

          <Shop/>
    </>
  )
}

export default Main