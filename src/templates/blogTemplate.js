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
    margin-top: -120px;
    line-height: 2.5rem;
    font-size: 1.2rem;
    @media(max-width: 840px){
        font-size: 1rem;
    }
`

const Date = styled.h3`
    text-align: center;
    margin: auto;
    font-size: 15px;
`

const Description = styled.h2`
    text-align: center;
    margin: auto;
    line-height: 2.5rem;
    margin-bottom: 50px;
    font-weight: 100;
    font-size: 1rem;

    @media(max-width: 840px){
        font-size: 0.8rem;
    }
`

const Content = styled.div`
    width: 50vw;
    margin: auto;
    line-height: 4.7px;

    @media(max-width: 840px){
        line-height: 2.4px;
        width: 70vw;
    }
`



export default function Template({
    data, //this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data //data.markdownRemark holds post data
    const { frontmatter, html } = markdownRemark
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
                    <Content dangerouslySetInnerHTML={{ __html: html }} />
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