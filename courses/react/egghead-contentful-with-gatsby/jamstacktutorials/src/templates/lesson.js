import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

export default function Lesson({ data }) {
    return (
        <Layout>
            <SEO 
                title={data.contentfulLesson.seo.title}
                description={data.contentfulLesson.seo.description}
            />
            <div>
                <h2>{data.contentfulLesson.title}</h2>
                {documentToReactComponents(data.contentfulLesson.body.json, {
                    renderNode: {
                        [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
                            return (
                                <img src={node.data.target.fields.file['en-US'].url} />
                            )
                        }
                    }
                })}
            </div>
        </Layout>
    );
}

export const query = graphql`
    query lessonQuery($slug: String!) {
        contentfulLesson(slug: { eq: $slug }) {
            title
            body {
                json
            }
            seo {
                title
                description
            }
        }
    }
`;