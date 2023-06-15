

function Review() {
  return (
    <div className='container' style={{paddingBottom:"50px"}}>
    <div className='row justify-content-center'>
    <div className='col-lg-12 text-center'>
    <h1 >Google Reviews</h1>
    <iframe src='https://cdn.trustindex.io/amp-widget.html#14a092a12fb16057ce863991d95' title="google reviews" sandbox='allow-scripts allow-same-origin'  resizable='resizable' height="506"></iframe>
    </div>
    <div className='col-lg-12 text-center'>
    <h1 >Trustpilot Reviews</h1>
    <iframe src='https://cdn.trustindex.io/amp-widget.html#492565312cf460514b764dc37a2' title="trustpilot reviews" sandbox='allow-scripts allow-same-origin' resizable='resizable' height="506"></iframe>
    </div>
    </div>
    </div>
  );
};
export default Review;