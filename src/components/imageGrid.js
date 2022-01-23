import React from "react";
import { getSanityImageUrl } from "../lib/image-url";

const imageGrid = ({ columns }) => {
  return (
    <section className="container mx-auto pt-10 ss:px-4 grid lg:grid-flow-col ss:grid-cols-3 justify-between gap-3">
      {columns.map(i => {
        return (
          <div className="homeStandard">
            <img src={getSanityImageUrl(i.asset.url, 200)} className="rounded-md" style={{ height: "100%" }} />
          </div>
        );
      })}
    </section>
  );
};

export default imageGrid;
