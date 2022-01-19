import { graphql, StaticQuery } from "gatsby";
import React, { useState } from "react";
import Layout from "../components/layout";

function LayoutContainer(props) {
  const { textWhite = false } = props;

  return (
    <>
      <Layout {...props} textWhite={textWhite} />
    </>
  );
}

export default LayoutContainer;
