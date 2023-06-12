import React from 'react'
import ShopDetails from '../../Pages/ShopDetails'
import Breadcrumb from '../../Menhome/breadcrumb'

function Main() {
  return (
    <>

    <Breadcrumb
         subtitle="Shop Details"
         title="Home"
         subtitledown="Shop Details"
    />

    <ShopDetails/>

    
    </>
  )
}

export default Main