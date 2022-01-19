import React, { useState } from "react";
import { graphql } from "gatsby";

import Hero from "../components/hero";
import CTA from "../components/cta";

import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    route: sanityRoute(id: { eq: $id }) {
      slug {
        current
      }
      page {
        ...PageInfo
      }
    }
  }
`;

const Page = props => {
  const { data, errors } = props;
  console.log(data)

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const page = data.page || data.route.page;

  const content = (page._rawContent || [])
    .filter(c => !c.disabled)
    .map((c, i) => {
      let el = null;
      switch (c._type) {
      
        case "hero":
          el = <Hero key={c._key} {...c} />;
          break;
        case "cta":
          el = <CTA key={c._key} {...c} />;
          break;
        default:
          el = null;
      }
      return el;
    });

  return (
    <Layout textWhite={true}>
      <div className="pt-24">{content}</div>
    </Layout>
  );
};

export default Page;
