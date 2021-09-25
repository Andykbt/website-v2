import React from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import ProjectPreviewGrid from "../components/project-preview-grid";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import Section from "../components/Section/Section";

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
      subtitle
    }
    sections: allSanitySection {
      edges {
        node {
          id
          title
          content {
            _key
            _type
            style 
            list
            children {
              _key
              _type
              marks
              text
            }
          }
        }
      }
    }
    projects: allSanitySampleProject(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const IndexPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];
  
  const sectionNodes = (data || {}).sections
    ? mapEdgesToNodes(data.sections)
    : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings".'
    );
  }

  console.log(data)
  console.log(projectNodes)
  console.log(sectionNodes)

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Container>
        <Section node={sectionNodes[0]}/>
        {/* <Section /> */}
        {projectNodes && (
          <ProjectPreviewGrid
            title="Latest projects"
            nodes={projectNodes}
            browseMoreHref="/archive/"
          />
        )}
      </Container>
    </Layout>
  );
};

export default IndexPage;
