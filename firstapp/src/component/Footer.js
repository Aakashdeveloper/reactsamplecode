import React from 'react';

const Footer = (props) => {
    console.log(">>>>",props)
    return(
        <div>
            <hr/>
            <center>
                <h3>&copy; Developer Funnel {props.year}</h3>
            </center>
        </div>
    )

}

export default Footer;