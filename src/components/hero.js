import React from "react";
import clientConfig from "../../client-config";
import { getGatsbyImageData } from "gatsby-source-sanity";
import { GatsbyImage, withArtDirection } from "gatsby-plugin-image";
import useWindowSize from "../hooks/useGatsbyWindowSize"
import classnames from "classnames";

const getSanityImages = props => {
  let img = null;
  if (props.desktopImage && props.mobileImage) {
    const desktopImage = getGatsbyImageData(
      props.desktopImage.asset,
      {
        layout: "fullWidth",
        width: 2000
      },
      clientConfig.sanity
    );

    const mobileImage = getGatsbyImageData(
      props.mobileImage.asset,
      {
        layout: "fullWidth",
        width: 600
      },
      clientConfig.sanity
    );

    const images = withArtDirection(desktopImage, [
      {
        media: "(max-width: 1024px)",
        image: mobileImage
      }
    ]);

    img = (
      <GatsbyImage
        image={images}
        loading="lazy"
        className={classnames("imageWrapper artdirected")}
        alt={"stuff"}
      />
    );
  }
  return img;
};

function Hero(props) {
  const { height, width } = useWindowSize()
  const img = getSanityImages(props);

  return <div className="relative">{img}</div>;
}

export default Hero;
