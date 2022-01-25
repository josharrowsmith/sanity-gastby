import React from "react";
import { getSanityImageUrl } from "../lib/image-url";
import classnames from "classnames";
import useWindowSize from "../hooks/useGatsbyWindowSize";

const imageBlock = ({ columns, styles, _type, size }) => {
  const { width } = useWindowSize();

  return (
    <section className={classnames("container relative mx-auto pt-8 ss:pt-5 ss:px-4 grid justify-items-center ", styles)}>
      {columns.map(i => {
        if (i.disabled && width > 1024) return;
        return (
          <a
            key={_type.id}
            href={i.cta ? i.cta.link : undefined}
            target={i.cta ? "_blank" : undefined}
            className={_type}
          >
            <img
              src={getSanityImageUrl(i.image.asset.url, size)}
              className={classnames("h-full")}
              alt="stuff"
            />
          </a>
        );
      })}
    </section>
  );
};

export default imageBlock;
