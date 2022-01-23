import React from "react";
import { getSanityImageUrl } from "../lib/image-url";

const socials = ({ columns }) => {
  return (
    <section className="container mx-auto pt-10 ss:px-4 grid grid-flow-col auto-cols-max gap-10 justify-center">
      {columns.map(i => {
        return (
          <div >
            <img src={getSanityImageUrl(i.asset.url, 30)} style={{ height: "100%" }} />
          </div>
        );
      })}
    </section>
  );
};

export default socials;
