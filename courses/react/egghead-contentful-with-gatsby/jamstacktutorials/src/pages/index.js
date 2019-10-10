import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from '../components/card';

const IndexPage = ({ data: { allContentfulLesson } }) => (
  <Layout>
    <SEO title="Home" />
    <h1>LESSONS</h1>
    {
      allContentfulLesson.edges.map(({ node }) => (
        <Card 
          key={node.slug}
          title={node.title}
          image={node.image.file.url}
          slug={node.slug}
        />
      ))
    }
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
{
  allContentfulLesson {
    edges {
      node {
        title
        slug
        image {
          file {
            url
          }
        }
      }
    }
  }
}
`;
