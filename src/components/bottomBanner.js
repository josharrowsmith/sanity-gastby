import React from "react";
import { GatsbyImage, withArtDirection } from "gatsby-plugin-image";
import { getSanityImages } from "../lib/image-url";

const bottomBanner = props => {
  const desktopImage = getSanityImages(props.desktopImage, null, "constrained");
  const mobileImage = getSanityImages(props.mobileImage, null, "constrained");

  const data = withArtDirection(desktopImage, [
    {
      media: "(max-width: 767px)",
      image: mobileImage
    }
  ]);

  return (
    <div className="container mt-8 ss:mt-5 mx-auto w-auto bg-contain bg-center imageWrapper">
      <GatsbyImage
        image={data}
        alt="stuff"
        className="botttomBanner"
        style={{ display: "block" }}
      />
    </div>
  );
};

export default bottomBanner;
