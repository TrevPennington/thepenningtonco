import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout" 
import heroImage from "../components/heroImage"
import PostLink from "../components/post-link"
import styled from 'styled-components'

const PostWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-flow: row wrap;
  justify-content: center;
  margin: auto;
`

const Title = styled.h1`
  margin: auto;
  text-align: center;
  margin-top: -150px;
  margin-bottom: 100px;
  color: #888;
  
  &::before {
    content: '';
    display: block;
    width: 90%;
    height: 500px;
    margin: auto;
    margin-top: 10px;
    margin-bottom: -400px;
    background-color: #f6f6f4;
  }

    @media (max-width: 400px) {
      margin-top: -60px;
      margin-bottom: 50px;
    }
  
`

const Recent = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
  .filter(edge => !!edge.node.frontmatter.date) //filter however you want
  .map(edge => 

    <PostLink key={edge.node.id} post={edge.node} />

  )

  return (
    <Layout 
      location={`recent`}
      image={heroImage} //TODO: make this WORK
    >
      <PostWrapper>{Posts}</PostWrapper>
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
                  fluid(maxWidth: 900, maxHeight: 900) {
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

    
  
  

