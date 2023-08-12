import d1 from '../../assets/andent-data/o1.png'
import d2 from '../../assets/andent-data/o2.png'
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function Main () {
    const [bottomPadding, setBottomPadding] = useState(0);
    const [isMobile, setIsMobile] = useState(false)

    const {t,i18n}=useTranslation();

    useEffect(() => {
        const lng= i18n.language;

        if (lng==='it' && !isMobile)  {
            setBottomPadding(160);
          }
        else  if (lng==='it' && isMobile)  {
            setBottomPadding(50);
          }
           else {
            setBottomPadding(0);
          }
    },[bottomPadding,i18n,isMobile]);

     //choose the screen size 
     const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
      }
    
      // create an event listener
      useEffect(() => {
        window.addEventListener("resize", handleResize)
  
      })



    return(
        <div className='container mob-top-pad orth-types-bot-pad' style={{paddingBottom:bottomPadding}}>
            <div className='row justify-content-center'>
                <div className='col-lg-10 col-md-10'>
                    <h3 className='theme-dark size-60 mob-heading text-center decent-pad'>
                        {t("orthtypes")}
                    </h3>
                </div>
            </div>
            <div className="row justify-content-center upper-pad-20 orth-type">
                <div className='col-lg-6 col-md-12 move-right'>
                    <div className='orth-types'>
                        <img src={d1} alt='traditional bracer' style={{width:"240px",height:"144px",borderRadius:"10px"}}/>
                    </div>
                    <div className='decent-pad orth-text-head'>
                        <h3 className='theme-dark size-25 text-center upper-pad-10' style={{lineHeight:"37.5px"}}>
                        {t("ortht1")}
                        </h3>
                        <p className='size-16 text-center' style={{lineHeight:"20px",fontWeight:"400",color:"black"}}>
                        {t("ortht1p")}
                        </p>
                    </div>
                </div>
                <div className='col-lg-6 col-md-12 move-left'>
                    <div className='orth-types'>
                        <img src={d2} alt='traditional bracer' style={{width:"240px",height:"144px",borderRadius:"10px"}}/>
                    </div>
                    <div className='decent-pad orth-text-head'>
                        <h3 className='theme-dark size-25 text-center upper-pad-10' style={{lineHeight:"37.5px"}}>
                        {t("ortht2")}<br/> {t("ortht21")}
                        </h3>
                        <p className='size-16 text-center' style={{lineHeight:"20px",fontWeight:"400",color:"black"}}>
                        {t("ortht2p")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;