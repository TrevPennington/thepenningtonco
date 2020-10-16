/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import Hero from "./hero"
import Footer from "./footer"
import "./layout.css"
import "./header.css"
import "./burgerHeader.css"
import mainlogo from "../images/SVG/trevor+shelby light.svg"
import secondlogo from "../images/SVG/trevor+shelby.svg"
import styled from "styled-components"
import { MenuAltRight } from "@styled-icons/boxicons-regular/MenuAltRight"
import { Close } from "@styled-icons/remix-line/Close"

function Layout(props) {

  const [burger, setBurger] = useState(false)
  const [burgerOpen, setOpen] = useState(false)
  
  const { location, children, image } = props

  let header
  let menu
  let burgerMenu

  useEffect(() => {
    // Update the document title using the browser API
    checkBurger()
    window.addEventListener('resize', checkBurger)

    console.log(burgerOpen)
  }, []);

  function checkBurger() {
    if (window.innerWidth < 700) {
      setBurger(true)
    } else {
      setBurger(false)
    }
  }
  
  function toggleBurger() {
    if (!burgerOpen) {
      setOpen(true)
      console.log(burgerOpen)
   
    } else {
      setOpen(false)
      console.log(burgerOpen)
     
    }
  }

  function renderMenu(dark) { //take in a color as props
    if (burger && !burgerOpen) {
      let logoColor
      let closeIconColor
      if (dark) {
        closeIconColor = "black"
        logoColor = (
          <img src={secondlogo} alt='The Pennington Co.' width='150' height='150' style={{color:`black`}} />
        )
      } else {
        closeIconColor = "#efefef"
        logoColor = (
          <img src={mainlogo} alt='The Pennington Co.' width='150' height='150' style={{color:`#efefef`}} />
        )
      }
      burgerMenu = (
        <div className = 'burgerNavWrapper'>
          
          <h1 className='burgerNavLogo'>
            <Link to="/">
              {logoColor}
            </Link>
          </h1>

          <MenuAltRight className="burgerIcon" onClick={toggleBurger} style={{color:closeIconColor}} />

        </div>
      )
      return (burgerMenu)
    } else if (burger && burgerOpen) {

      burgerMenu = (

        <div className = 'burgerOpenNavWrapper'>
          

          <div className="burgerOpenMenuOptions">
            <Link to="/"><h2>HOME</h2></Link>
            <Link to="/recent"><h2>OUR WORK</h2></Link>
            <Link to="/about"><h2>MEET US</h2></Link>
            <Link to="/inquire"><h2>INQUIRE</h2></Link>
          </div>

          <Close className="closeIcon" onClick={toggleBurger} />

        </div>

      )
      return (burgerMenu)
    } else if (!burger) {
      return (menu)
    }
  }

  if (location === `home`) { // ============================ HOME
    menu = (
      <div className = 'navWrapper'>
      <nav className='navBar'>

        <Link to="/" className='linkBox'>
          <h2 className='navLink'>Home</h2>
        </Link>

        <Link to="/recent" className='linkBox'>
          <h2 className='navLink'>Our work</h2>
        </Link>

        <h1 className='navLogo'>
          <Link to="/">
            <img src={mainlogo} alt='The Pennington Co.' width='150' height='150' className='mainLogo' />
          </Link>
        </h1>

        <Link to="/about" className='linkBox'>
          <h2 className='navLink'>meet us</h2>
        </Link>

        <Link to="/inquire" className='linkBox'>
          <h2 className='navLink'>Inquire</h2>
        </Link>
      </nav>
      </div>
    )
    header = (
      <header className = "homeHeaderWrapper" >
          {
            renderMenu(false)
          }
        <Img
          fluid={image}
          className='heroImage'
        />

    </header>
    )
  } else if (location === `recent`) { //================================================== DARK (not home)
    menu = (
      <div className = 'navWrapper'>
      <nav className='navBar'>

          <Link to="/" className='linkBox'>
              <h2 className='navLink dark'>Home</h2>
            </Link>

          <Link to="/recent" className='linkBox'>
            <h2 className='navLink dark'>Our work</h2>
          </Link>

        <h1 className='navLogo'>
          <Link to="/">
            <img src={secondlogo} alt='The Pennington Co.' width='150' height='150' className='mainLogo'/>
            
          </Link>
        </h1>

        <Link to="/about" className='linkBox'>
            <h2 className='navLink dark'>meet us</h2>
        </Link>

        <Link to="/inquire" className='linkBox'>
            <h2 className='navLink dark'>Inquire</h2>
        </Link>
      </nav>
      </div>
    )
    
    header = (
      <header className = "headerWrapper">

          {
            renderMenu(true)
          }

      <Img
        fluid={image}
        className='minorHero recentHero'
      />

    </header>
    )
  } else { //================================================================ LIGHT
    menu = (
      <div className = 'navWrapper'>
      <nav className='navBar'>

            <Link to="/" className='linkBox'>
              <h2 className='navLink'>Home</h2>
            </Link>

          <Link to="/recent" className='linkBox'>
            <h2 className='navLink'>Our work</h2>
          </Link>

        <h1 className='navLogo'>
          <Link to="/">
            <img src={mainlogo} alt='The Pennington Co.' width='150' height='150' className='mainLogo'/>
          </Link>
        </h1>

        <Link to="/about" className='linkBox'>
              <h2 className='navLink'>meet us</h2>
        </Link>

        <Link to="/inquire" className='linkBox'>
            <h2 className='navLink'>Inquire</h2>
        </Link>

      </nav>
      </div>
    )
    header = (
      <header className = "headerWrapper">

          {
            renderMenu(false)
          }

      <Img
        fluid={image}
        
        className='minorHero'
      />

    </header>
    )
  }

  return (
    <>
      <div style={{marginBottom: `100px`}}>
        <header siteTitle={`Trevor and Shelby Pennington`}>
          {header}
        </header>
        <main>{children}</main>
      </div>
      <div style={{position: 'relative', bottom: `-20px`, width: `100%`}}>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Layout
