import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import "./social.css"

export default () => {

    // const data = useStaticQuery(graphql`
    //   query {
    //     allFile(filter:{extension:{regex:"/social/"}}) {
    //       edges {
    //         node {
    //           childImageSharp {
    //             fixed(width: 150, height: 150) {
    //                 ...GatsbyImageSharpFixed
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }

    // `)

    const data = useStaticQuery(graphql`
    query {
        one: file(relativePath: { eq: "social/amanda-frank-tvw_dg4UYzU-unsplash.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        two: file(relativePath: { eq: "social/bence-balla-schottner-V2x4jJKYJ7I-unsplash.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        three: file(relativePath: { eq: "social/dimitar-donovski-4fQifsKKfO4-unsplash.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        four: file(relativePath: { eq: "social/esther-tuttle-m9SAITsAU8s-unsplash.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
 
      }
    `)


    return (
        <div className='socialWrapper'>

            {/* <div className='socialPhotos'>
                {data.allFile.edges.map(node =>
                    
                    <Img 
                      className='image'
                      key={node}
                      title="Photo image"
                      alt="Photo"
                      fixed={node.childImageSharp.fixed}
                    />
                    )}
            </div> */}

            <div className='socialPhotos'>
              <Img fluid={data.one.childImageSharp.fluid} alt='Gerold' />
              <Img fluid={data.two.childImageSharp.fluid} alt='Gerold' />
              <Img fluid={data.three.childImageSharp.fluid} alt='Gerold' />
              <Img fluid={data.four.childImageSharp.fluid} alt='Gerold' />
            </div>

            <div className='socialTitle'>
                <h1>Follow Along!</h1>
            </div>
            
        </div>
    )
}