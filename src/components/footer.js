import React from "react"
import "./footer.css"
import styled from "styled-components";
import { Instagram } from "styled-icons/boxicons-logos/Instagram";
import { Facebook } from "styled-icons/icomoon/Facebook";
import { PinterestAlt } from "styled-icons/boxicons-logos/PinterestAlt";

const Insta = styled(Instagram)`
    color: whitesmoke;
`

const Faceboo = styled(Facebook)`
    color: whitesmoke;
    transform: translateY(-2px);
`

const Pinterest = styled(PinterestAlt)`
    color: whitesmoke;
`

const Footer = () => (

    <div className='footerWrapper'>
        <div className='social'>
            <a href="#"><Insta size="27px" /></a>
            <a href="#"><Faceboo size="18px" /></a>
            <a href="#"><Pinterest size="25px" /></a>
        </div>
        <h1 className='footerCreator'>
            <a href="#">created by Trevor Pennington</a>
        </h1>
    </div>
)

export default Footer