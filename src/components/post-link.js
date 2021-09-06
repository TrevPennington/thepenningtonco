import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Post = styled.div`
    width: 500px;
    height: 500px;
    margin: 25px;
    transition-duration: .15s;
    &:hover {
        opacity: 70%;
        transition-duration: .15s;
    }
`

const PostCard = styled.div`
 

`

const PostTitle = styled.h2`
    text-decoration: none;
    color: #efefef;
    font-size: 1em;
    font-family: Lora;
    font-weight: 100;
    letter-spacing: 2.5px;
    padding-left: 50px;
    text-transform: uppercase;

    position: relative;
    top: -80px;
    z-index: 999;
    
    @media (max-width: 750px) {
        font-size: 0.8em;
        top: -45px;
        padding-left: 20px;
    }
`

const PostLink = ({ post }) => (
    <Post>
        <Link to={post.frontmatter.path}>
            <PostCard>
                <Img fluid={post.frontmatter.coverPhoto.childImageSharp.fluid} />
                <PostTitle>{post.frontmatter.title}</PostTitle>

            </PostCard>
        </Link>
    </Post>
)

export default PostLink