import React, { useRef } from 'react'
//import Three from '../Menblog/Three'
// import Search from '../Menblog/Search'
import Bredcm from '../Menhome/breadcrumb'
import { useState,useEffect } from 'react'
import Blogchild from './api'
import axios from 'axios'


function Main() {



  const [rerenderTrigger, setRerenderTrigger] = useState(0);
  const pageNumRef = useRef(1);
  const [pages,setPages]=useState(null);

  const clickHandler = (event) => {
    const newPageNum = parseInt(event.target.innerText);
    pageNumRef.current = newPageNum;
    setRerenderTrigger((prev) => prev + 1);
  };

  const increment = () => {
    if(pageNumRef.current+1>pages){
      return;
    }
    else{
      pageNumRef.current=pageNumRef.current+1;
      setRerenderTrigger((prev) => prev + 1);
    }
  }

  const decrement = () => {
    if(pageNumRef.current-1<1){
      return;
    }
    else{
      pageNumRef.current=pageNumRef.current-1;
      setRerenderTrigger((prev) => prev + 1);
    }
  }

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

      <Blogchild page={pageNumRef.current} key={rerenderTrigger}/>


      <section className="inner-blog pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">                 
                  <div className="pagination-wrap mb-50">
                  <nav>
                      <ul className="pagination">
                      <li className="page-item">
                          <a href="#top" onClick={decrement}>
                          <i className="fas fa-angle-double-left" />
                          </a>
                      </li>
                      {Array.from({ length: pages }, (_, index) => {
                        const pageNumber = index + 1;
                        return (
                          <li key={pageNumber} className="page-item">
                            <a
                              href="#top"
                              onClick={clickHandler}
                            >
                              {pageNumber}
                            </a>
                          </li>
                        );
                      })}
                      <li className="page-item">
                          <a href="#top" onClick={increment}>
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

    </>
  )
}

export default Main