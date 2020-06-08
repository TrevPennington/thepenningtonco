import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import "./post-link.css"

const PostLink = ({ post }) => (
    <div className='post'>
        <Link to={post.frontmatter.path}>
            <h2 className='postTitle'>{post.frontmatter.title}</h2>
            <Img fluid={post.frontmatter.coverPhoto.childImageSharp.fluid} />
        </Link>
    </div>
)

export default PostLink