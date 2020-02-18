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
          body {
            ... on PRISMIC_PostBodyImage_gallery {
              type
              label
              fields {
                gallery_image
              }
            }
          }
        }
      }
    }
  }
}

`

export default ({ data }) => {
  const doc = data.prismic.allPosts.edges.slice(0, 1).pop()
  if (!doc) return null



  // Sort and display slice options
const PostSlices = ({ slices }) => {
  return slices.map((slice, index) => {
    const res = (() => {
      switch(slice.type) {
        case 'image_gallery': return (
          <div key={ index } className="image-gallery">
            {/* {console.log(doc.node.body[0].fields)}
            {console.log('images')} */}

            {doc.node.body[0].fields.map((image, index) => {
              return ( <img key={ index } src={image.gallery_image.url} className="gallery-image" />)
            })
            }

          </div>
        )

        default: return
      }
    })();
    return res;
  })
}




  return (
      <Layout>
        <div className='postWrapper'>
          <h1 className='postTitle'>{RichText.asText(doc.node.title)}</h1>
          <span>
            <em>{doc.node.date}</em>
          </span>
          <div>{RichText.render(doc.node.post_body)}</div>      
          <PostSlices slices={ doc.node.body } />
        </div>
      </Layout>
  )
  }