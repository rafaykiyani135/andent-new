import React from "react";
import { useState,useEffect } from 'react'
import axios from 'axios'
import First from "../Menblog/First";
import Sideone from "../Menblog/Sideone";

function Blogchild (props) {


    const url=`http://ec2-18-216-114-158.us-east-2.compute.amazonaws.com:8080/api/blogs?sort=createdAt%3Adesc&pagination[page]=${props.page}&pagination[pageSize]=5`;
    const [blogData,setblogData]=useState(null);
    const [connected,setConnected] =useState(false);


  useEffect(()=>{

    axios.get(url)
    .then(response => {
      setblogData(response.data.data)
      setConnected(true);
    })
    .catch(error => {
      console.log("error fetching data ",error)
    })

  },[url]);

 

    return(
        <>
          {connected ? (
              <section className="inner-blog pt-120 pb-120">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">                 
                  {blogData !== null && blogData.map((data,index) => (
                <div>
                <First abstract={data.attributes.abstract} by={data.attributes.by}  published={data.attributes.publishedAt}
                content={data.attributes.content} cover={data.attributes.cover} title={data.attributes.title}
                id={data.id}/>
                </div>
            ))}
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-4">
                    <aside className="sidebar-widget">
                      <Sideone/>
                    </aside>
                  </div>
                </div>
              </div>
          </section>
          ) : (
            <section className="inner-blog pt-120 pb-120">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">                 
                    <h1>Blogs are coming soon!</h1>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-4">
                    <aside className="sidebar-widget">
                      <Sideone/>
                    </aside>
                  </div>
                </div>
              </div>
          </section>
          )}
        </>

    );
}

export default Blogchild;