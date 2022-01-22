import React from "react";

const imageGrid = ({ columns }) => {
  return (
    <section className="container mx-auto justify-between grid grid-cols-7 ss:grid-cols-3 gap-10 ss:gap-2 py-10 ss:px-4">
      {columns.map(i =>
        <div className="bg-black w-auto h-32 ss:h-32 bg-contain bg-center" style={{ backgroundImage: `url(${i.asset.url})` }}></div>)}
    </section>
  );
}

export default imageGrid;
