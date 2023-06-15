import React from 'react'
import First from '../Menblog/First'
import Second from '../Menblog/Second'
import Sideone from '../Menblog/Sideone'
//import Three from '../Menblog/Three'
// import Search from '../Menblog/Search'
import Bredcm from '../Menhome/breadcrumb'
import Pagination from '../Pagination/Main'
import { useState,useEffect } from 'react'
import axios from 'axios'
import parse from 'html-react-parser';

function Main() {

  const url="http://ec2-18-216-114-158.us-east-2.compute.amazonaws.com:8080/api/blogs";
  const [blogData,setblogData]=useState(null);

  useEffect(()=>{

    axios.get(url)
    .then(response => {
      setblogData(response.data.data)
      //console.log(blogData[0].attributes.Content)
    })
    .catch(error => {
      console.log("error fetching data ",error)
    })

  },[]);

  return (
    <>
      <Bredcm
          subtitle="Blog"
          title="Home"
          subtitledown="Blog" 
        />
      
      <div className='container' style={{padding:"30px"}}>
      <div className='row justify-content-center'>
      <div className='col-lg-12 col-12'>
      {blogData !== null && blogData.map((data) => (
        <div>
          <h1 style={{paddingBottom:"30px"}}>Blog : {data.attributes.title}</h1>
          <h2>Published at : {data.attributes.publishedAt}</h2>
          {parse(data.attributes.Content)}
        </div>
      ))}
      </div>
      </div>
      </div>

      <section className="inner-blog pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">                 
                  <First/>
                  <Second/>
                  <Pagination/>
              </div>
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