import React from "react";
import { getSanityImageUrl } from "../lib/image-url";

const stores = ({ columns }) => {
  return (
    <section className="container mx-auto pt-10 ss:px-4 grid lg:grid-cols-3 grid-rows-1 ss:grid-cols-2 justify-between gap-3">
      {columns.map(i => {
        return (
          <a href={i.cta ? i.cta.link : null} target="_blank" className="stores">
            <img src={getSanityImageUrl(i.image.asset.url, 600)} style={{ height: "100%" }} />
          </a>
        );
      })}
    </section>
  );
};

export default stores;
