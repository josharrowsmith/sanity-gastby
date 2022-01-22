import React from "react";
import clientConfig from "../../client-config";
import { getGatsbyImageData } from "gatsby-source-sanity";
import { GatsbyImage, withArtDirection, getImage } from "gatsby-plugin-image";
import * as styles from "./hero.module.css";


const getSanityImages = (props) => {
  let img = null;
  if (props.desktopImage && props.mobileImage) {
    const desktopImage = getGatsbyImageData(
      props.desktopImage.asset,
      {
        layout: 'fullWidth',
        maxWidth: 2000
      },
      clientConfig.sanity
    );

    const mobileImage = getGatsbyImageData(
      props.mobileImage.asset,
      {
        layout: 'fullWidth',
        maxWidth: 1024
      },
      clientConfig.sanity
    );

    const images = withArtDirection((desktopImage), [
      {
        media: "(max-width: 1024px)",
        image: mobileImage,
      },
    ])

    img = (
      <GatsbyImage
        image={images}
        className={styles.artdirected}
        alt={props.alt}
      />
    );
  }
  return img;
};

function Hero(props) {
  const img = getSanityImages(props);

  return (
    <div className="relative">{img}</div>
  );
}

export default Hero;