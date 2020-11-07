import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

const Container = styled.div`
    margin: auto;
`

const Title = styled.h1`
    text-align: center;
    margin: auto;
    margin-top: 0px;
    line-height: 2.5rem;
    color: #333;
    font-size: 1.7em;
    font-family: sans-serif;
    font-weight: 600;
    font-style: italic;
    @media(max-width: 840px){
        font-size: 1rem;
        margin-top: 0px;
    }
`

const Date = styled.h3`
    text-align: center;
    margin: auto;
    font-family: sans-serif;
    font-size: 15px;
`

const Description = styled.h2`
    color: #555;
    text-align: center;
    margin: auto;
    line-height: 2.5rem;
    margin-bottom: 50px;
    font-weight: 100;
    font-size: 1rem;

    @media(max-width: 840px){
        font-size: 0.8rem;
        line-height: 1.4em;
    }
`

const Content = styled.div`
    width: 50vw;
    margin: auto;
    line-height: 4.7px;

    @media(max-width: 840px){
        line-height: 2.4px;
        width: 80vw;
    }
`

export default function Template({
    data, //this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data //data.markdownRemark holds post data
    const { frontmatter, html } = markdownRemark

    function contentToDisplay(){
        if (frontmatter.html == null) {
            return (
                <Content dangerouslySetInnerHTML={{ __html: html }} />
            )
        } else {
            return (
                <Content dangerouslySetInnerHTML={{ __html: frontmatter.html }} />
            )
        }
    }

    return (
        <Layout
            location='recent'
            image='hi'
            >
            <Container>
                <div className='blog-post'>
                    <Title>{frontmatter.title}</Title>
                    <Date>{frontmatter.date}</Date>
                    <Description>{frontmatter.description}</Description>
                    {contentToDisplay()}
                </div>
            </Container>
        </Layout>
    )
}

export const PageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
                    html
                  frontmatter {
                    description
                    photos
                    title
                  }
                }
    }
`