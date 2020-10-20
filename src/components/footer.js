import React from "react"
import "./footer.css"
import styled from "styled-components";
import { Instagram } from "styled-icons/boxicons-logos/Instagram";
import { Facebook } from "styled-icons/icomoon/Facebook";
import { PinterestAlt } from "styled-icons/boxicons-logos/PinterestAlt";

const Insta = styled(Instagram)`
    color: #333;
    transition-duration: 0.2s;
    &:hover {
        transform: scale(1.2);
        transition-duration: 0.2s;
    }
`

const Faceboo = styled(Facebook)`
    color: #333;
    transform: translateY(-2px);
    transition-duration: 0.2s;
    &:hover {
        transform: scale(1.2);
        transition-duration: 0.2s;
    }
`

const Pinterest = styled(PinterestAlt)`
    color: #333;
    transition-duration: 0.2s;
    &:hover {
        transform: scale(1.2);
        transition-duration: 0.2s;
    }
`

const Footer = () => (

    <div className='footerWrapper'>
        <div className='contentWrapper'>
            <div className='social'>
                <a href="https://www.instagram.com/thepennington.co/" target="_blank"><Insta size="27px" /></a>
                <a href="https://www.facebook.com/thepennington.co/" target="_blank"><Faceboo size="18px" /></a>
                <a href="https://www.pinterest.com/thepenningtonco/" target="_blank"><Pinterest size="25px" /></a>
            </div>
            <h1 className='footerCreator'>
                <a href="https://www.trevorpennington.com/" target="_blank" style={{color: `#333`}}>created by Trevor Pennington</a>
            </h1>
        </div>
    </div>
)

export default Footer