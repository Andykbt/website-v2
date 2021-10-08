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

import logo from '../components/assets/logo.png'

const favicon = document.getElementById("favicon");
favicon.href = logo

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
      subtitle
    }
    sections: allSanitySection(
      sort: { fields: [publishedAt], order: ASC }
    ) {
      edges {   
        node {
          id
          title
          content {
            _type
            style 
            list
            children {
              _type
              marks
              text
            }
          }
          collection {
            caption
            alt
            colour
            svg {
              _type
              style
              list
              children {
                _type
                marks
                text
              }
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
          codeURL
          projectURL
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

  return (
    <Layout showIntro={true}>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Container>
        <Section
          node={sectionNodes[0]}
          showHeight={'0.1'}
          hideHeight={'0.75'}
        />

        <Section 
          node={sectionNodes[1]}
          showHeight={'0.1'}
          hideHeight={'0.4'}
          isAnimated={true}
        />

        {projectNodes && (
          <ProjectPreviewGrid
            title="Some Things I've Built"
            nodes={projectNodes}
            browseMoreHref="/archive/"
          />
        )}

        <Section 
          node={sectionNodes[2]}
          showHeight={'0'}
          hideHeight={'0.4'}
        />

        <Section 
          node={sectionNodes[3]}
          showHeight={'0.1'}
          hideHeight={'0.4'}
        />
      </Container>
    </Layout>
  );
};

export default IndexPage;
