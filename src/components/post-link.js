import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Post = styled.div`
    max-width: 500px;
    width: 70vw;

    margin-bottom: 30px;
    transition-duration: .15s;


    &:nth-child(even) {
        margin-top: 50px;
    }

    // &:nth-child(odd) {
    //     transform: translateX(50px);
    // }

    // &:nth-child(2n+3) {
    //     transform: translateY(-60px);
    // }

    &:hover {
        opacity: 70%;
        transition-duration: .15s;
    }

    @media(max-width: 1200px) {
        &:nth-child(even) {
            margin-top: 0px;
        }
    }
`

const PostCard = styled.div`
    

`

const PostTitle = styled.h2`
    text-decoration: none;
    color: #efefef;
    font-size: 1.5em;
    font-family: Lora;
    font-weight: 100;
    letter-spacing: 1px;
    padding-left: 50px;

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