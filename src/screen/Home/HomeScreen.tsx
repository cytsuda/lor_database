import React from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";

// CustomComponent
import Layout from "../../hoc/LayoutWFilter/Layout";
import CardImage from "../../component/CardImage/CardImage";
import CardList from "../../component/CardList/CardList";
import CardTable from "../../component/CardTable/CardTable";

// CustomStyle
import useStyle from "./HomeStyle";

// Types
import { reduxState } from "../../typesProps";

// RawData
import rawData from "../../data/lor_data.json";

const data = rawData.filter((el) => el.collectible);
let dataSort = data.sort((a, b) =>
  a.name > b.name ? 1 : a.name < b.name ? -1 : 0
);
dataSort = dataSort.sort((a, b) => a.cost - b.cost);

const CardScreen = () => {
  const classes = useStyle();
  const { cardDisplay } = useSelector((state: reduxState) => state.filter);
  const showedData = dataSort.slice(0, 100);
  return (
    <Layout>
      <h2 className={classes.title}>Home Screen - {cardDisplay}</h2>
      {cardDisplay === "list" && <CardList data={showedData} />}
      {cardDisplay === "table" && <CardTable data={showedData} />}
      {(cardDisplay === "smallGrid" || cardDisplay === "largeGrid") && (
        <div className={clsx(classes.container, cardDisplay)}>
          {showedData.map(
            (item) =>
              item.collectible && <CardImage key={item.cardCode} data={item} />
          )}
        </div>
      )}
    </Layout>
  );
};

export default CardScreen;
