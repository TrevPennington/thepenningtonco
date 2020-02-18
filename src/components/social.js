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
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }

        two: file(relativePath: { eq: "social/bence-balla-schottner-V2x4jJKYJ7I-unsplash.jpg" }) {
          childImageSharp {
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }

        three: file(relativePath: { eq: "social/dimitar-donovski-4fQifsKKfO4-unsplash.jpg" }) {
          childImageSharp {
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }

        four: file(relativePath: { eq: "social/esther-tuttle-m9SAITsAU8s-unsplash.jpg" }) {
          childImageSharp {
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }


 
      }
    `)


    return (
        <div className='socialWrapper'>
            <div className='socialTitle'>
                <h1>Follow Along!</h1>
            </div>
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
              <Img fixed={data.one.childImageSharp.fixed} />
              <Img fixed={data.two.childImageSharp.fixed} />
              <Img fixed={data.three.childImageSharp.fixed} />
              <Img fixed={data.four.childImageSharp.fixed} />
            </div>
            
        </div>
    )
}