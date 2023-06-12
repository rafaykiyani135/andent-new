import React from 'react'
import Faq from '../../../components/Pages/Faq'
import Breadcrumb from '../../Menhome/breadcrumb'

function Main() {
  return (
    <>

        <Breadcrumb
            subtitle="Faq"
            title="Home"
            subtitledown="Faq"
        />

        <Faq/>
    
    </>
  )
}

export default Main