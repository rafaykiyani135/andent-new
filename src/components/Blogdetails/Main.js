import React from 'react'
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


        { isLoading ? (
          <div className='container' style={{padding:"100px"}}>
          <div className='row justify-content-center text-center'>
            <div className='col-lg-12'>
              <h1 className='theme-dark size-60 mob-heading upper-padding'>Loading...</h1>
            </div>
          </div>
        </div>
        ) : (
          <div>
          { connected ? (
            <section className="inner-blog b-details-p pt-120 pb-120 upper-padding">
              <div className="container"> 
                <div className="row">
                <div className='col-sm-12 col-md-12 col-lg-12'>
                <h1 style={{paddingBottom:"50px"}}>
                { blog.title }
                </h1>
                <div className='api-html'>
                  { ReactHtmlParser(blog.content) }
                </div>
                </div>
                </div>
              </div>
            </section>
          ) : (
            <section className="inner-blog b-details-p pt-120 pb-120 upper-padding">
              <div className="container"> 
                <div className="row">
                <div className='col-sm-12 col-md-12 col-lg-12'>
                <h1 className='theme-dark size-60 mob-heading'>
                  Sorry, we could not find the post your are looking for.
                </h1>
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