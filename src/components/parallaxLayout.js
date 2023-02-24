import React from "react"
import "./parallaxLayout.css"
import Img from "gatsby-image"
import { NavBar } from "./navBar"
export const ParallaxLayout = ({ children, imageSrc, title }) => {
  return (
    <>
      <NavBar />
      <div className="page">
        <div className="parallaxContainer">
          <div className="background">
            <Img fluid={imageSrc} className="backgroundImg" />
          </div>
        </div>

        <div className="section">{children}</div>

        <div className="footer">
          <p>footer component</p>
        </div>
      </div>
    </>
  )
}
