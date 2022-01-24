import React from "react";
import { getSanityImageUrl } from "../lib/image-url";
import classnames from "classnames";
import useWindowSize from "../hooks/useGatsbyWindowSize"

const imageBlock = ({ columns, styles, _type, size }) => {
  const { width } = useWindowSize()

  return (
    <section className={classnames("container mx-auto pt-10 ss:px-4 grid ", styles)}>
      {columns.map(i => {
        return (
          <a key={i} a href={i.cta ? i.cta.link : undefined} target="_blank" className={_type}>
            <img src={getSanityImageUrl(i.image.asset.url, size)} className={classnames("h-full")} alt="stuff" />
          </a>
        );
      })}
    </section>
  );
};

export default imageBlock;
