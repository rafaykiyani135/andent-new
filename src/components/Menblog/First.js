import React from 'react'
import { Link } from 'react-router-dom'


function First({published,by,cover,title,abstract,content,id}) {
   // const [video, setVideo] = useState();



    const date= new Date(published.slice(0,10))
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    return (
        <div className="bsingle__post mb-50">
      <div className="bsingle__post-thumb">
        <img src={cover} alt="" />
      </div>
      <div className="bsingle__content">
        <div className="meta-info">
          <ul>
            <li>
              <i className="fal fa-user" />
              By {by}
            </li>
            <li>
              <i className="fal fa-calendar-alt" /> {formattedDate}
            </li>
          </ul>
        </div>
        <h2>
          <Link to={`/blogdetails/${id}`}>
            {title}
          </Link>
        </h2>
        <p>{abstract}</p>
        <div className="blog__btn">
        <Link to={`/blogdetails/${id}`} className='btn'>
            Read More
          </Link>
        </div>
      </div>
    </div>
    )
}


export default First;