import React from "react";
import Hero from "../components/hero";
import ImageGrid from "../components/imageGrid";
import Layout from "../containers/layout";
import SEO from "../components/seo";
import FullWidthImage from "../components/fullWidthImage";
import Stores from "../components/stores";
import Socials from "../components/socials";

const Page = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  const page = data.page;
  const pageTitle = page.title;

  const content = (page._rawContent || [])
    .filter(c => !c.disabled)
    .map((c, i) => {
      let el = null;
      switch (c._type) {
        case "hero":
          el = <Hero key={c._key} {...c} />;
          break;
        case "imageGrid":
          el = <ImageGrid key={c._key} {...c} />;
          break;
        case "fullWidthImage":
          el = <FullWidthImage key={c._key} {...c} />;
          break;
        case "stores":
          el = <Stores key={c._key} {...c} />;
          break;
        case "socials":
          el = <Socials key={c._key} {...c} />;
          break;
        default:
          el = null;
      }
      return el;
    });

  return (
    <Layout textWhite={true}>
      <SEO
        title={pageTitle}
        description={site.description}
        keywords={site.keywords}
        bodyAttr={{
          class: "leading-normal tracking-normal text-white gradient"
        }}
      />
      <div>{content}</div>
    </Layout>
  );
};

export default Page;
