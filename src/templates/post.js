import React from "react"
import { graphql, Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import Layout from "../components/layout"
import "./post.css"

export const query = graphql`
  query BlogPostQuery($uid: String) {
    prismic {
      allPosts(uid: $uid) {
        edges {
          node {
            title
            date
            post_body
          }
        }
      }
    }
  }
`

export default ({ data }) => {
  const doc = data.prismic.allPosts.edges.slice(0, 1).pop()
  if (!doc) return null

  return (
      <Layout>
        <div className='postWrapper'>
          <h1 className='postTitle'>{RichText.asText(doc.node.title)}</h1>
          <span>
            <em>{doc.node.date}</em>
          </span>
          <div>{RichText.render(doc.node.post_body)}</div>
        </div>
      </Layout>
  )
}