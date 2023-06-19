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

  const url=`https://andent-backend.prodbuilds.com/api/blogs/${id}`

  const [blog,setBlog]=useState([]);
  const [connected,setConnected] =useState(false);
  const [isLoading,setIsLoading]=useState(false);

  useEffect(() => {

    setIsLoading(true);

    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setBlog(response.data.data.attributes);
        setConnected(true);
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error);
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, [url]);

  return (
    


    <>
        <Breadcrumb
            subtitle="Blog Details"
            title="Home"
            subtitledown="Blog Details"
        />

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
          { connected ? (
            <section className="inner-blog b-details-p pt-120 pb-120">
              <div className="container"> 
                <div className="row">
                <div className='col-sm-12 col-md-12 col-lg-8'>
                <h1 style={{paddingBottom:"50px"}}>
                { blog.title }
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
          ) : (
            <section className="inner-blog b-details-p pt-120 pb-120">
              <div className="container"> 
                <div className="row">
                <div className='col-sm-12 col-md-12 col-lg-8'>
                <h1>
                  Sorry, we could not find the post your are looking for.
                </h1>
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
        )}

        
    </>
  )
}

export default Main