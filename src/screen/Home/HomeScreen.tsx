import React from "react";

// CustomComponent
import Layout from "../../hoc/Layout";
import CardImage from "../../component/CardImage/CardImage";
// CustomStyle
import useStyle from "./HomeStyle";

// RawData
import rawData from "../../data/lor_data.json";
const data = rawData.filter((el) => el.collectible);
let dataSort = data.sort((a, b) =>
  a.name > b.name ? 1 : a.name < b.name ? -1 : 0
);
dataSort = dataSort.sort((a, b) => a.cost - b.cost);
const CardScreen = () => {
  const classes = useStyle();
  return (
    <Layout>
      <h2 className={classes.title}>Home Screen</h2>
      <div className={classes.container}>
        {dataSort
          .slice(0, 100)
          .map(
            (item) =>
              item.collectible && <CardImage key={item.cardCode} data={item} />
          )}
      </div>
    </Layout>
  );
};

export default CardScreen;
