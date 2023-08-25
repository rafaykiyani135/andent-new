import ReactPlayer from "react-player";
import star from '../../assets/andent-data/star.png'

function Main (props){

    const stars = Array.from({ length: 5 }, (_, index) => (
        <img index={index} key={index} src={star} alt="icons" style={{paddingRight:"10px",transform:"translateY(-5px)",height:"20px",width:"30px"}}  />
      ));

    return(
        <div className="container">
            <div className='row test-upper-padding justify-content-center fadeInUp animated' data-animation="fadeInDown animated" data-delay=".2s">
              <div className='col-lg-4 col-md-12'>
                    <div className='row justify-content-center text-center'>
                        <div className='col-lg-6'>
                            <h4 className='size-18 theme-dark text-lg-start move-right' style={{fontWeight:"700"}}>{props.name} &nbsp; &nbsp;</h4>
                        </div>
                        <div className='col-lg-6 text-lg-start'>
                            {stars}
                        </div>
                    </div>
                    <div style={{paddingTop:"15px"}} className='text-center d-flex justify-content-center'>
                        <ReactPlayer
                            url={props.link}
                            controls={true}
                            width='320px'
                            height='400px'
                        />
                    </div>
                </div>
                <div className='col-lg-4 col-md-12'>
                    <div className='row justify-content-center text-center'>
                        <div className='col-lg-6'>
                            <h4 className='size-18 theme-dark text-lg-start move-right' style={{fontWeight:"700"}}>{props.name2} &nbsp; &nbsp;</h4>
                        </div>
                        <div className='col-lg-6 text-lg-start'>
                            {stars}
                        </div>
                    </div>
                    <div style={{paddingTop:"15px"}} className='text-center d-flex justify-content-center'>
                        <ReactPlayer
                            url={props.link2}
                            controls={true}
                            width='320px'
                            height='400px'
                        />
                    </div>
                </div>
            </div>
        </div>       
    );
}

export default Main;