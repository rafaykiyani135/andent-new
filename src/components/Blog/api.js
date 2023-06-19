import React from "react";
import { useState,useEffect } from 'react'
import axios from 'axios'
import First from "../Menblog/First";
import Sideone from "../Menblog/Sideone";

function Blogchild (props) {


    const url=`https://andent-backend.prodbuilds.com/api/blogs?sort=createdAt%3Adesc&pagination[page]=${props.page}&pagination[pageSize]=5`;
    const [blogData,setblogData]=useState(null);
    const [connected,setConnected] =useState(false);
    const [isLoading,setIsLoading]=useState(false);


  useEffect(() => {

   setIsLoading(true); 

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setblogData(response.data.data);
      setConnected(true);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  fetchData();
}, [url]);

 

    return(
        <>

          { isLoading ? (
             <div className='container' style={{padding:"100px"}}>
             <div className='row justify-content-center text-center'>
               <div className='col-lg-8'>
                 <h1>Loading...</h1>
               </div>
             </div>
           </div>
          ) : (
            <div>
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
                    <h1>Blog is coming soon!</h1>
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
            </div>
          ) }

          
        </>

    );
}

export default Blogchild;