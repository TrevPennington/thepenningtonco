import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import "./post-link.css"
import styled from "styled-components"

const PostCard = styled.div`
    background-color: snow;
    padding: 8px;
    margin-right: 40%;
    margin-left: -5%;
    margin-bottom: -2%;
    z-index: -10;
`

const PostLink = ({ post }) => (
    <div className='post'>
        <Link to={post.frontmatter.path}>
            <PostCard>
                <h2 className='postTitle'>{post.frontmatter.title}</h2>
            </PostCard>
                <Img fluid={post.frontmatter.coverPhoto.childImageSharp.fluid} />
            
        </Link>
    </div>
)

export default PostLink