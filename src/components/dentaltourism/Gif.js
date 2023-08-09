import gif from '../../assets/andent-data/s.gif';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';


function Main (){

    const {t,i18n}=useTranslation();

    useEffect(() => {
        const lng= navigator.language;
        i18n.changeLanguage(lng)
      });

    
    const scrollToBottom = () => {
        window.scrollTo({
        top: document.documentElement.scrollHeight - window.innerHeight - 500,
        behavior: 'smooth',
        });
        window.analytics.track("Link clicked", {
            buttonText: "Learn More",
            link: "Scrolled To Bottom",
            clickedOnPage: window.location.pathname
          });
    };

    return(
        <div className=''>
            <div className='row justify-content-center text-center'>
            <div className='col-lg-8 col-md-8 col-12 d-flex justify-content-center'>
                <div>
                <img src={gif} alt="loading.." style={{borderRadius:"10px"}}/>
                </div>
            </div>
            </div>
            <div className='row justify-content-center text-center'>
                <div className='col-lg-8 col-md-8 d-flex justify-content-center'>
                <div className='upper-padding'>
                        <button className='btn d-flex align-items-center justify-content-center' style={{ height: "50px" }} onClick={scrollToBottom}>
                            <p style={{transform:"translateY(8px)"}}>
                                {t("learnmore")}
                            </p>
                        </button>
                        </div>
                </div>
               </div>
        </div>
    )
}

export default Main;