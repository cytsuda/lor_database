import React from "react";

// CustomComponent
import Layout from "../hoc/Layout";

// RawData
import rawData from "../data/lor_data.json";
const data = rawData.filter((el) => el.collectible);

const CardScreen = () => {
  return (
    <Layout>
      
    </Layout>
  );
};

export default CardScreen;
