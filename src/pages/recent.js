import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout" 
import heroImage from "../components/heroImage"
import PostLink from "../components/post-link"

const Recent = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
  .filter(edge => !!edge.node.frontmatter.date) //filter however you want
  .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout 
      location={`recent`}
      image={heroImage} //TODO: make this WORK
    >
      <div className='postsWrapper'>{Posts}</div>
    </Layout>
)
}

export default Recent

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            photo {
              childImageSharp {
                  fluid(maxWidth: 500) {
                      ...GatsbyImageSharpFluid
                  }
              }
            }
          }
        }
      }
    }
  }
`

    
  
  

