import React from 'react'
//import Three from '../Menblog/Three'
// import Search from '../Menblog/Search'
import Bredcm from '../Menhome/breadcrumb'
import { useState,useEffect } from 'react'
import Blogchild from './api'
import axios from 'axios'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'


function Main() {

  const {page} = useParams();
  const [pages,setPages]=useState(null);
  const [paramPage,setParamPage]=useState(1);

  useEffect(() => {
      setParamPage(page);
  }, [page]);

  
  const url="https://andent-backend.prodbuilds.com/api/blogs?sort=createdAt%3Adesc&pagination[page]=1&pagination[pageSize]=5"

  useEffect(() => {

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setPages(response.data.meta.pagination.pageCount);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  fetchData();
}, []);


  return (


    <>

      <Bredcm
          subtitle="Blog"
          title="Home"
          subtitledown="Blog" 
        />
        <div>
          <Blogchild page={paramPage}/>
            <section className="inner-blog pt-120 pb-120">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">                 
                        <div className="pagination-wrap mb-50">
                        <nav>
                            <ul className="pagination">
                            <li className="page-item">
                                <a href="#top">
                                <i className="fas fa-angle-double-left" />
                                </a>
                            </li>
                            {Array.from({ length: pages }, (_, index) => {
                              const pageNumber = index + 1;
                              return (
                                <li key={pageNumber} className="page-item">
                                  
                                  <Link to={`/blog/${pageNumber}`}> 
                                  {pageNumber}
                                  </Link>
                                </li>
                              );
                            })}
                            <li className="page-item">
                                <a href="#top">
                                <i className="fas fa-angle-double-right" />
                                </a>
                            </li>
                            </ul>
                        </nav>
              </div>
                    </div>
                  </div>
                </div>
            </section>
        </div>
      ) 

      

    </>
  )
}

export default Main