import React from "react";
import { GatsbyImage, withArtDirection } from "gatsby-plugin-image";
import { getSanityImages } from "../lib/image-url";


function Hero(props) {
  const desktopImage = getSanityImages(props.desktopImage, 2000, "fullWidth");
  const mobileImage = getSanityImages(props.mobileImage, 800, "fullWidth");

  const data = withArtDirection(desktopImage, [
    {
      media: "(max-width: 767px)",
      image: mobileImage
    }
  ]);

  return (
    <div className="relative">
      <GatsbyImage
        image={data}
        loading="lazy"
        className="imageWrapper artdirected"
        alt={"stuff"}
      />
    </div>
  );
}

export default Hero;
