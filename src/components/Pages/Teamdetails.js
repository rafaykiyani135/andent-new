import React, { useEffect } from 'react'
import Teamone from '../../assets/img/team/team01.png'


function Teamdetails() {
    // const [Value, setValue] = useState(0);

    useEffect(() => {
        const el = document.getElementsByName("firstbaar");
        
        for (let index = 0; index < el.length; index++) {
            let progressed =parseInt(el[index].id); 
            let count = 0;
            let counts=setInterval(() => {
                count++
               el[index].style.width = count + '%' ;
                if(count===progressed)
                {
                    count=0;
                    clearInterval(counts);
                    
                }
            });
        }
       

       
    }, [])

    return (
        <>
            <section className="team-area-content">
                <div className="container">
                    <div className="lower-content">
                        <div className="row">
                            <div className="col-lg-3 col-md-12 col-sm-12 text-center">
                                <div className="team-img-box">
                                    <img src={Teamone} alt="img" />
                                </div>
                            </div>
                            <div className="text-column col-lg-9 col-md-12 col-sm-12">
                                <div className="s-about-content pl-30 wow fadeInRight" data-animation="fadeInRight" data-delay=".2s" >
                                    <p>
                                        Pleasure and praising pain was born and I will give you a complete
                                        account of the systems, and expound the actually teachings of the
                                        great explorer of the truth, the master-builder of human uts
                                        happiness. No one rejects, dislikes, or avoids pleasure itself,
                                        because it is pleasure, but because those who do not know how to
                                        pursue pleasure rationally Nor who loves or pursues or desires to
                                        obtain pain of itself.
                                    </p>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="skills-content s-about-content mt-20">
                                                <div className="skills">
                                                    <div className="skill mb-30">
                                                        <div className="skill-name">Design</div>
                                                        <div className="skill-bar">
                                                            <div className="skill-per" id={80} name="firstbaar" />
                                                        </div>
                                                    </div>
                                                    <div className="skill mb-30">
                                                        <div className="skill-name">Easy Manage</div>
                                                        <div className="skill-bar">
                                                            <div className="skill-per" id={90} name="firstbaar" />
                                                        </div>
                                                    </div>
                                                    <div className="skill mb-30">
                                                        <div className="skill-name">Project Organize</div>
                                                        <div className="skill-bar">
                                                            <div className="skill-per" id={70} name="firstbaar" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="per-info">
                                                <h4>Personal Info</h4>
                                                <ul>
                                                    <li>
                                                        <div className="icon">
                                                            <i className="fal fa-envelope" /> <strong>Email</strong>
                                                        </div>
                                                        <div className="text">info@webexample.com</div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <i className="fal fa-phone" /> <strong>Phone</strong>
                                                        </div>
                                                        <div className="text">980-786-098-09</div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <i className="fal fa-map-marker-alt" />
                                                            <strong>Address</strong>
                                                        </div>
                                                        <div className="text">12/A, Miranda City Hall, NYC</div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <i className="fal fa-globe" />
                                                            <strong>Website</strong>
                                                        </div>
                                                        <div className="text">www.webexample.com</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Teamdetails