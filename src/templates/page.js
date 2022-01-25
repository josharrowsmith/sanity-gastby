import React from "react";
import Hero from "../components/hero";
import ImageBlock from "../components/imageBlock";
import Layout from "../containers/layout";
import SEO from "../components/seo";
import BottomBanner from "../components/bottomBanner";

// so i can reuse same component (ImageBlock) with different data
const storeCss = "lg:grid-cols-3 grid-rows-1 md:grid-cols-2 ss:grid-cols-2 justify-between gap-3 ss:gap-1.5";
const imageGridCss = "lg:grid-flow-col lg:grid-cols-none md:grid-cols-3 ss:grid-cols-3 justify-between gap-5 ss:gap-3 rounded-md";
const socialsCss = "grid-flow-col auto-cols-max gap-10 justify-center";

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
          el = <ImageBlock key={c._key} {...c} styles={imageGridCss} size={300} />;
          break;
        case "bottomBanner":
          el = <BottomBanner key={c._key} {...c} />;
          break;
        case "stores":
          el = <ImageBlock key={c._key} {...c} styles={storeCss} size={600} />;
          break;
        case "socials":
          el = <ImageBlock key={c._key} {...c} styles={socialsCss} size={30} />;
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
