import React from "react"
import "./footer.css"
import styled from "styled-components";
import { Instagram } from "styled-icons/boxicons-logos/Instagram";
import { Facebook } from "styled-icons/icomoon/Facebook";
import { PinterestAlt } from "styled-icons/boxicons-logos/PinterestAlt";

const Insta = styled(Instagram)`
    color: whitesmoke;
    transition-duration: 0.2s;
    &:hover {
        transform: scale(1.2);
        transition-duration: 0.2s;
    }
`

const Faceboo = styled(Facebook)`
    color: whitesmoke;
    transform: translateY(-2px);
    transition-duration: 0.2s;
    &:hover {
        transform: scale(1.2);
        transition-duration: 0.2s;
    }
`

const Pinterest = styled(PinterestAlt)`
    color: whitesmoke;
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
                <a href="#"><Insta size="27px" /></a>
                <a href="#"><Faceboo size="18px" /></a>
                <a href="#"><Pinterest size="25px" /></a>
            </div>
            <h1 className='footerCreator'>
                <a href="https://www.trevorpennington.com/">created by Trevor Pennington</a>
            </h1>
        </div>
    </div>
)

export default Footer