import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from "../lib/helpers";

import { responsiveTitle1 } from "../components/typography.module.css";
import { animated } from "@react-spring/web";

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

const items = [
    ({ style }) => <animated.h1 style={{ ...style, position: 'relative', fontSize: 75, marginBottom: 0}}>{"Blog"}</animated.h1>,
    ({ style }) => <animated.p style={{ ...style, position: 'relative', }}>{"My thoughts and interests"}</animated.p>,
]

const BlogPage = props => {
    const { data, errors } = props;

    const articleNodes =
        // data && data.articles && mapEdgesToNodes(data.articles).filter(filterOutDocsWithoutSlugs);

    console.log(articleNodes)

    if (errors) {
        return(
            <Layout>
                <GraphQLErrorList errors={errors} />
            </Layout>
        )
    }

    return (
        <Layout showIntro={true} headerItems={items}>
            <SEO title="Blog" />
            <Container>
                {articleNodes && articleNodes.length > 0 ?
                    <>
                    </>
                : <h1 className={responsiveTitle1}>There isn't anything here right now, check it out again at some time later!</h1>}
            </Container>
        </Layout>
    );
};

export default BlogPage;
