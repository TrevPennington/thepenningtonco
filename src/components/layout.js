/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import Hero from "./hero"
import Footer from "./footer"
import "./layout.css"
import "./header.css"
import mainlogo from "../images/SVG/trevor+shelby light.svg"
import secondlogo from "../images/SVG/trevor+shelby.svg"

class Layout extends React.Component {
  render() {
  

  
  const { location, children, image } = this.props

  let header 

  if (location === `home`) { // ============================ HOME
    header = (
      <header className = "homeHeaderWrapper" >
        
        <div className = 'navWrapper'>
        <nav className='navBar'>
          <h2 className='navRecent'>
            <Link to="/recent">
              Recent
            </Link>
          </h2>
          <h1 className='navLogo'>
            <Link to="/">
            {/* TODO: Make this a variable */}
              <img src={mainlogo} alt='The Pennington Co.' width='120' height='120' className='mainLogo' />
            </Link>
          </h1>
          <h2 className='inquire'>
            <Link to="/inquire">
              Inquire
            </Link>
          </h2>
        </nav>
        </div>

        <Img
          fluid={image}
          className='heroImage'
        />

    </header>
    )
  } else if (location === `recent` || location === `about`) { //================================================== DARK (not home)
    header = (
      <header className = "headerWrapper">

      <div className = 'navWrapper'>
      <nav className='navBar'>
        <h2 className='navRecent dark'>
          <Link to="/recent">
            Recent
          </Link>
        </h2>
        <h1 className='navLogo dark'>
          <Link to="/">
            <img src={secondlogo} alt='The Pennington Co.' width='120' height='120' className='mainLogo'/>
            
          </Link>
        </h1>
        <h2 className='inquire dark'>
          <Link to="/inquire">
            Inquire
          </Link>
        </h2>
      </nav>
      </div>

      <Img
        fluid={image}
        className='minorHero'
      />

    </header>
    )
  } else { //================================================================ LIGHT
    header = (
      <header className = "headerWrapper">

      <div className = 'navWrapper'>
      <nav className='navBar'>
        <h2 className='navRecent'>
          <Link to="/recent">
            Recent
          </Link>
        </h2>
        <h1 className='navLogo dark'>
          <Link to="/">
            <img src={mainlogo} alt='The Pennington Co.' width='120' height='120' className='mainLogo'/>
          </Link>
        </h1>
        <h2 className='inquire'>
          <Link to="/inquire">
            Inquire
          </Link>
        </h2>
      </nav>
      </div>

      <Img
        fluid={image}
        className='minorHero'
      />

    </header>
    )
  }
  return (
    <>
      <div style={{marginBottom: `200px`}}>
        <header siteTitle={`Trevor and Shelby Pennington`}>
          {header}
        </header>
        <main>{children}</main>
      </div>
      <div style={{position: 'relative', bottom: `-120px`, width: `100%`}}>
        <Footer />
      </div>
    </>
  )
}
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Layout
