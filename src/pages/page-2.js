import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => {

  const data = useStaticQuery(graphql`
   query {
       file(relativePath: { eq: "demo/amanda-frank-tvw_dg4UYzU-unsplash.jpg" }) {
         childImageSharp {
           # Specify the image processing specifications right in the query.
           # Makes it trivial to update as your page's design changes.
           fixed(width: 300, height: 300) {
             ...GatsbyImageSharpFixed
           }
         }
       }
     }
   `)

   console.log(data);
  return (
      <Layout>
        <p>hello</p>
        <Img 
          fixed={data.file.childImageSharp.fixed}
          alt='Trevor and Shelby'
        /> 
      </Layout>
  )
}