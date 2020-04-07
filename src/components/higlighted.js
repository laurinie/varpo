import React from 'react'
import pageStyles from "../pages/page.module.css";
const Highlighted = (props) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ff0000" fillOpacity="1" d="M0,224L1440,128L1440,320L0,320Z"></path>
            </svg>
            <h2 className={pageStyles.highlighted}>{props.highlighted}</h2>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ff0000" fillOpacity="1" d="M0,256L1440,192L1440,0L0,0Z"></path>
            </svg>
        </>
    )
}
export default Highlighted;
