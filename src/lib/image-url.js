import clientConfig from "../../client-config";
import { getGatsbyImageData } from "gatsby-source-sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(clientConfig.sanity);

export function imageUrlFor(source) {
  return builder.image(source);
}

export const getSanityImageUrl = (image, width) =>
  imageUrlFor(image)
    .auto("format")
    .width(width)
    .url();

export function buildImageObj(source = { asset: {} }) {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id }
  };

  if (source.crop) imageObj.crop = source.crop;
  if (source.hotspot) imageObj.hotspot = source.hotspot;

  return imageObj;
}

// becuase we are using raw fields (page builder) we cant use graphql directily
export function getSanityImages(props, size, layout) {
  if (props) {
    const imageData = getGatsbyImageData(
      props.asset,
      {
        layout: layout,
        width: size
      },
      clientConfig.sanity
    );
    return imageData;
  }
}
