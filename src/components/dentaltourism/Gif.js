import gif from '../../assets/andent-data/s.gif';


function Main (){

    return(
        <div>
            <div className='row justify-content-center text-center upper-padding'>
            <div className='col-lg-8 col-md-8 col-12 d-flex justify-content-center upper-padding'>
                <div>
                <img src={gif} alt="loading.."/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Main;