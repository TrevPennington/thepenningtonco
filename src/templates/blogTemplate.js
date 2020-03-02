import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

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
            <div className='blog-post-container'>
                <div className='blog-post'>
                    <h1>{frontmatter.title}</h1>
                    <h2>{frontmatter.date}</h2>
                    <h3>{frontmatter.description}</h3>
                    <div
                        className='blog-post-content'
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            </div>
        </Layout>
    )
}

export const PageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                description
                link
                photo {
                    childImageSharp {
                        fluid(maxWidth: 500) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`