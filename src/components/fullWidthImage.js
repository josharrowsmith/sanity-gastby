import React from "react";
import clientConfig from "../../client-config";
import { getGatsbyImageData } from "gatsby-source-sanity";
import { GatsbyImage, withArtDirection } from 'gatsby-plugin-image';
import * as styles from "./fullWidthImage.module.css";


const getSanityImages = (props) => {
  let img = null;
  if (props.backgroundImage && props.backgroundImageMobile) {
    const desktopImage = getGatsbyImageData(
      props.backgroundImage.asset,
      {
        layout: 'constrained',
      },
      clientConfig.sanity
    );

    const mobileImage = getGatsbyImageData(
      props.backgroundImageMobile.asset,
      {
        layout: 'constrained',
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
      />
    );
  }
  return img;
};


const imageGrid = (props) => {
  const img = getSanityImages(props);

  return (
    <div className="container mx-auto w-auto bg-contain bg-center">{img}</div>
  );
}

export default imageGrid;