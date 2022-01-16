import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import InnerHTML from 'dangerously-set-html-content'

const Container = styled.div`
    margin: auto;

`

const Title = styled.h1`
    text-align: center;
    margin: auto;
    margin-top: 0px;
    line-height: 2.5rem;
    color: #999;
    font-size: 1.7em;
    font-family: sans-serif;
    font-weight: 500;
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
    color: #999;
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
    width: 60vw;
    margin: auto;

    @media(max-width: 1000px){
        width: 80vw;
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
            loading={true}
            >
            <Container>
                    <Title>{frontmatter.title}</Title>
                    <Date>{frontmatter.date}</Date>
                    <Description>{frontmatter.description}</Description>
                    <Content>
                    <InnerHTML html={html} />
                    </Content>
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
                    
                    title
                  }
                }
    }
`