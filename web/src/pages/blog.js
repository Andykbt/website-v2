import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import ProjectPreviewGrid from "../components/project-preview-grid";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from "../lib/helpers";

import { responsiveTitle1 } from "../components/typography.module.css";

export const query = graphql`
query BlogPageQuery {
    articles: allSanityBlogArticle {
        edges {
            node {
                id
                title
                mainImage {
                    asset {
                        _id
                    }
                    alt
                }
                _rawExcerpt
                slug {
                    current
                }
            }
        }
    }
}
`;

const BlogPage = props => {
    const { data, errors } = props;

    // console.log(props)
    console.log(data)
    // console.log(errors)

    return (
        <Layout>
            <SEO title="Blog" />
            <Container>
                <h1 className={responsiveTitle1}>Blog</h1>
            </Container>
        </Layout>
    );
};

export default BlogPage;
