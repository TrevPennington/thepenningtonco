import React from "react"
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import styled from "styled-components"

// export default function BlogImages({ folder }) {
//     const thisProps = folder

//     const data = useStaticQuery(graphql`
//     query ($thisProps) {
//         folder: file(relativePath: { eq: $thisProps }) {
//          childImageSharp {
//            fluid(maxWidth: 400, quality: 100) {
//              ...GatsbyImageSharpFluid
//            }
//          }
//        }
 
//       }
 
//     `)

//     return (
//         <div>
//             <p>IMAGES {thisProps}</p>
//             <Img className='portrait' fluid={data.folder.childImageSharp.fluid} alt='The Pennington Co.' />
//         </div>
//     )
// }