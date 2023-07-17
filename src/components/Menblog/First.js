import React from 'react'
import { Link } from 'react-router-dom'


function First({published,by,cover,title,abstract,id}) {

    const date= new Date(published.slice(0,10))
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    const coverLink = "https://andent-backend.prodbuilds.com" + cover;

    return (
        <div className="bsingle__post mb-50">
      <div className="bsingle__post-thumb">
        <img src={coverLink} alt="" />
      </div>
      <div className="bsingle__content">
        <div className="meta-info">
          <ul>
            <li className='theme-dark'>
              <i className="fal fa-user" />
              By {by}
            </li>
            <li className='theme-dark'>
              <i className="fal fa-calendar-alt" /> {formattedDate}
            </li>
          </ul>
        </div>
        <h2>
          <Link to={`/blogdetails/${id}`} className='theme-dark'>
            {title}
          </Link>
        </h2>
        <p>{abstract}</p>
        <div className='text-center text-lg-start'>
        <Link to={`/blogdetails/${id}`} className='btn' style={{height:"62px"}}>
          <p>
            Read More
          </p>
          </Link>
        </div>
      </div>
    </div>
    )
}


export default First;