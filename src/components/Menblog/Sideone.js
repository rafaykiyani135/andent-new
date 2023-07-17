import React from 'react'
import { Link } from 'react-router-dom'


function Sideone() {
  return (
    <>
        <section id="search-3" className="widget widget_search">
                <h2 className="widget-title theme-dark">Search</h2>
                <form role="search" method="get" className="search-form" action="http://wordpress.zcube.in/finco/" >
                <label>
                    <span className="screen-reader-text ">Search for:</span>
                    <input type="search" className="search-field" placeholder="Search …" name="s" />
                </label>
                <input type="submit" className="search-submit" defaultValue="Search" />
                </form>
        </section>
        <section id="custom_html-5" className="widget_text widget widget_custom_html">
                <h2 className="widget-title theme-dark">Follow Us</h2>
                <div className="textwidget custom-html-widget">
                <div className="widget-social">
                    <Link to="#">
                    <i className="fab fa-twitter" />
                    </Link>
                    <Link to="#">
                    <i className="fab fa-pinterest-p" />
                    </Link>
                    <Link to="#">
                    <i className="fab fa-facebook-f" />
                    </Link>
                    <Link to="#">
                    <i className="fab fa-instagram" />
                    </Link>
                    <Link to="#">
                    <i className="fab fa-wordpress" />
                    </Link>
                </div>
                </div>
        </section>
        <section id="categories-1" className="widget widget_categories">
                <h2 className="widget-title theme-dark">Categories</h2>
                <ul>
                <li className="cat-item cat-item-16">
                    <Link to="#">Branding</Link> (4)
                </li>
                <li className="cat-item cat-item-23">
                    <Link to="#">Corporat</Link> (3)
                </li>
                <li className="cat-item cat-item-18">
                    <Link to="#">Design</Link> (3)
                </li>
                <li className="cat-item cat-item-22">
                    <Link to="#">Gallery</Link> (3)
                </li>
                </ul>
        </section>
        <section id="recent-posts-4" className="widget widget_recent_entries">
            <h2 className="widget-title theme-dark">Recent Posts</h2>
            <ul>
            <li>
                <Link to="#">User Experience Psychology And Performance Smshing</Link>
                <span className="post-date">August 19, 2020</span>
            </li>
            <li>
                <Link to="#">Monthly Web Development Up Cost Of JavaScript</Link>
                <span className="post-date">August 19, 2020</span>
            </li>
            <li>
                <Link to="#">There are many variation passages of like available.</Link>
                <span className="post-date">August 19, 2020</span>
            </li>
            </ul>
        </section>
        <section id="tag_cloud-1" className="widget widget_tag_cloud">
            <h2 className="widget-title theme-dark">Tag</h2>
            <div className="tagcloud">
                <Link to="#" className="tag-cloud-link tag-link-28 tag-link-position-1" style={{ fontSize: "8pt" }} aria-label="app (1 item)" >
                    app
                </Link>
                <Link to="#" className="tag-cloud-link tag-link-17 tag-link-position-2" style={{ fontSize: "8pt" }} aria-label="Branding (1 item)" >
                    Branding
                </Link>
                <Link to="#" className="tag-cloud-link tag-link-20 tag-link-position-3" style={{ fontSize: "8pt" }} aria-label="corporat (1 item)" >
                    corporat
                </Link>
                <Link to="#" className="tag-cloud-link tag-link-24 tag-link-position-4" style={{ fontSize: "16.4pt" }} aria-label="Design (2 items)" >
                    Design
                </Link>
                <Link to="#" className="tag-cloud-link tag-link-25 tag-link-position-5" style={{ fontSize: "22pt" }} aria-label="gallery (3 items)" >
                    gallery
                </Link>
                <Link to="#" className="tag-cloud-link tag-link-26 tag-link-position-6" style={{ fontSize: "8pt" }} aria-label="video (1 item)" >
                    video
                </Link>
                <Link to="#" className="tag-cloud-link tag-link-29 tag-link-position-7" style={{ fontSize: "16.4pt" }} aria-label="web design (2 items)" >
                    web design
                </Link>
            </div>
        </section>
    </>
  )
}

export default Sideone