import gif from '../../assets/andent-data/s.gif';
import { Link } from 'react-router-dom';


function Main (){

    return(
        <div className=''>
            <div className='row justify-content-center text-center'>
            <div className='col-lg-8 col-md-8 col-12 d-flex justify-content-center'>
                <div>
                <img src={gif} alt="loading.."/>
                </div>
            </div>
            </div>
            <div className='row justify-content-center text-center'>
                <div className='col-lg-8 col-md-8 d-flex justify-content-center'>
                <div className='upper-padding'>
                        <button className='btn d-flex align-items-center justify-content-center' style={{ height: "50px" }}>
                            <Link to="/about" style={{ color: "white" }}>
                            <p style={{transform:"translateY(8px)"}}>
                                Learn More
                            </p>
                            </Link>
                        </button>
                        </div>
                </div>
               </div>
        </div>
    )
}

export default Main;