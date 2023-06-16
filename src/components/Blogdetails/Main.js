import React from 'react'
import Breadcrumb from '../Menhome/breadcrumb'
import Sideone from '../Menblog/Sideone'
//import { useLocation } from 'react-router'
import ReactHtmlParser from 'react-html-parser';
import { useParams } from 'react-router';
import axios from 'axios';
import { useState,useEffect } from 'react';

function Main() {

//  const location = useLocation();
// const propsData=location.state;

  const {id} = useParams();

  const url=`http://ec2-18-216-114-158.us-east-2.compute.amazonaws.com:8080/api/blogs/${id}`

  const [blog,setBlog]=useState([]);

  useEffect(()=>{

    axios.get(url)
    .then(response => {
      setBlog(response.data.data.attributes)
    })
    .catch(error => {
      console.log("error fetching data ",error)
    })

  },[url]);

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
                <div className='col-sm-12 col-md-12 col-lg-8'>
                <h1 style={{paddingBottom:"50px"}}>
                  Title : { blog.title }
                </h1>
                <div>
                  { ReactHtmlParser(blog.content) }
                </div>
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