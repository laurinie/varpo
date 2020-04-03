import React from 'react'
import { Link } from "gatsby"
import { useState } from 'react';
import { useEffect } from 'react';
import "./info.css";
const year = 31556952000;
const Info = () => {
    const [visible,setVisible] = useState(false);
    const onCookieBannerClick=()=>{
        setVisible(false);
        localStorage.setItem("cookieBannerShowed",2);
        localStorage.setItem("bannerExpiresIn",new Date().getTime()+year)
    }
    useEffect(()=>{
        const now = new Date().getTime();
        const times = parseInt(localStorage.getItem("cookieBannerShowed"))||0;
        const age = localStorage.getItem("bannerExpiresIn")|| now;
        if (times<2 || age <= now) {
            localStorage.setItem("cookieBannerShowed",times+1);
            localStorage.setItem("bannerExpiresIn",now+year)
            setVisible(true);
          }
    },[])
    return (
        <div className="flag">
            {visible&&<div className="flag-link"><span role="img" onClick={onCookieBannerClick}>Sulje  </span><Link to={"/evasteet"} onClick={onCookieBannerClick}>🍪 Käytämme evästeitä. Lue lisää.</Link></div>}
        </div>
    )
}

export default Info
