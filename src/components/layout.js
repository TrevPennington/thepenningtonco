/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Hero from "./hero"
import Footer from "./footer"
import "./layout.css"
import "./header.css"

class Layout extends React.Component {
  render() {
  

  
  const { location, children } = this.props

  let header 

  if (location === `home`) {
    header = (
      <header className = "homeHeaderWrapper" >
        <Hero className = 'hero' />
      <nav className='navBar'>
        <h2 className='navRecent'>
          <Link to="/recent">
            Recent
          </Link>
        </h2>
        <h1 className='navLogo'>
          <Link to="/">
          {/* TODO: Make this a variable */}
            The Pennington Co 
          </Link>
        </h1>
        <h2 className='inquire'>
          <Link to="/inquire">
            Inquire
          </Link>
        </h2>
      </nav>
    </header>
    )
  } else {
    header = (
      <header className = "headerWrapper">
      <nav className='navBar'>
        <h2 className='navRecent dark'>
          <Link to="/recent">
            Recent
          </Link>
        </h2>
        <h1 className='navLogo dark'>
          <Link to="/">
            The Pennington Co
          </Link>
        </h1>
        <h2 className='inquire dark'>
          <Link to="/inquire">
            Inquire
          </Link>
        </h2>
      </nav>
    </header>
    )
  }
  return (
    <>
      <header siteTitle={`Trevor and Shelby Pennington`}>
        {header}
      </header>
      <div>
        <main>{children}</main>
        <Footer />
          {/* © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      </div>
    </>
  )
}
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Layout
