import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby"
import { RichText } from "prismic-reactjs"
import "./recentBlock.css"
import { linkResolver } from "../utils/linkResolver";


export default () => {
  const data = useStaticQuery(graphql`      
    query {
      prismic {
        allBlog_homes {
          edges {
            node {
              headline
              description
              image
            }
          }
        }
        allPosts(sortBy: date_DESC) {
          edges {
            node {
              _meta {
                id
                uid
                type
              }
              title
              date
            }
          }
        }
      }
    }
  `)

  	
  // const doc = data.prismic.allRecentss.edges.slice(0,1).pop();
  // if (!doc) return null;

      const doc = data.prismic.allBlog_homes.edges.slice(0, 1).pop()
      const posts = data.prismic.allPosts.edges
      if (!doc) return null

    return (
        <div className='recentsWrapper'>
            <h1 className='heading'>Recent Sessions</h1>
            {/* <div>
                {data.prismic.allRecentss.edges.map(post => {
                    return(
                    <div key={post.node.title}>
                        <h2 className='title'>{RichText.asText(post.node.title)}</h2>
                    </div>
                    )
                })}
                </div> */}

            {/* <div>
              <img src={doc.node.image.url} alt={doc.node.image.alt} /> 
              <h1>{RichText.asText(doc.node.headline)}</h1>
              <p>{RichText.asText(doc.node.description)}</p>
          </div> */}

            <div>
              {posts.map(post => {
                return (
                  <div key={post.node._meta.id}>
                    <Link to={linkResolver(post.node._meta)} className='link'>
                      <img className='image' src={doc.node.image.url} alt={doc.node.image.alt} /> 
                      <h1 className='title'>{RichText.asText(post.node.title)}</h1>
                    </Link>
                  </div>
                )
              })}
          </div>
        </div>
    )
}