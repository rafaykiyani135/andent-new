import React from 'react'
import Breadcrumb from '../../Menhome/breadcrumb'
import Team from '../../Pages/Team'

function Main() {
  return (
    <>
           <Breadcrumb
                   subtitle="Team"
                   title="Home"
                  subtitledown="Team"
             />

             <Team/>
            
    </>
  )
}

export default Main