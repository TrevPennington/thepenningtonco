import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout" 
import heroImage from "../components/heroImage"
import PostLink from "../components/post-link"
import styled from 'styled-components'

const Title = styled.h1`
  width: 100%;
  margin: auto;
  text-align: center;
  letter-spacing: 1.5px;
  margin-top: -100px;
  margin-bottom: 100px;
`

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
      <Title>Recent stories</Title>
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
            coverPhoto {
              childImageSharp {
                  fluid(maxWidth: 500) {
                      src
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

    
  
  

