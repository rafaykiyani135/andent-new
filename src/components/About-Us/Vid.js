import ReactPlayer from "react-player";

function Main (){
    return(
        <div>
            <div className="container move-up2" >
            <div className="row justify-content-center">
             <div className='col-lg-8 col-md-8 col-12 d-flex justify-content-center web-vid'>
                    <div style={{ position: 'relative', paddingTop: '56.25%', width: '100%' }} >
                    <ReactPlayer
                        url="https://streamable.com/1fom0f"
                        controls={true}
                        width='100%'
                        height='100%'
                        style={{ position: 'absolute', top: 0, left: 0 }}
                    />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Main;