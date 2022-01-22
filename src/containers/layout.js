import { graphql, StaticQuery } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/siteSettings/" }) {
      title
    }
  }
`;

function LayoutContainer(props) {
  const { textWhite = false } = props;

  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <Layout
            {...props}
            siteTitle={data.site.title}
            textWhite={textWhite}
          />
        );
      }}
    />
  );
}

export default LayoutContainer;
