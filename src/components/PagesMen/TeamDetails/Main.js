import React from 'react'
import Breadcrumb from '../../Menhome/breadcrumb'
import Teamdetails from '../../Pages/Teamdetails'


function Main() {
  return (
    <>
            <Breadcrumb
                subtitle="Team Details"
                title="Home"
                subtitledown="Team Details"
             />

            <Teamdetails/>


    </>
  )
}

export default Main