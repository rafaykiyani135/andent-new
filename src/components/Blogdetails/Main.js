import React from 'react'
import Breadcrumb from '../Menhome/breadcrumb'
import First from '../Blogdetailsmen/First'
import Sideone from '../Menblog/Sideone'

function Main() {
  return (
    <>
        <Breadcrumb
            subtitle="Blog Details"
            title="Home"
            subtitledown="Blog Details"
        />

        <section className="inner-blog b-details-p pt-120 pb-120">
             <div className="container"> 
                <div className="row">
                   <First/>
                <div className="col-sm-12 col-md-12 col-lg-4">
                    <aside className="sidebar-widget">
                        <Sideone/>
                    </aside>
                </div>
                </div>
             </div>
        </section>
    </>
  )
}

export default Main