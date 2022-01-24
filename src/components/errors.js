import React from "react";
import GraphQLErrors from "../components/graphqlErrors";
import Layout from "../containers/layout";

const Errors = ({ errors }) => (
  <Layout>
    <GraphQLErrors errors={errors} />
  </Layout>
);

export default Errors;
