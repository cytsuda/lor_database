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

let dataSort = rawData.sort((a, b) =>
  a.name > b.name ? 1 : a.name < b.name ? -1 : 0
);
dataSort = dataSort.sort((a, b) => a.cost - b.cost);

const CardScreen = () => {
  const classes = useStyle();
  const { filter, display } = useSelector((state: reduxState) => state);
  const { cardDisplay, collectible } = display;
  const { set, region, mana } = filter;
  let data = dataSort;
  if (collectible) {
    data = data.filter((item) => item.collectible);
  }
  if (set.active) {
    data = data.filter((item) => {
      const val = set.value.find((el) => el === item.set.toLowerCase());
      if (val) return val;
    });
  }
  if (region.active) {
    data = data.filter((item) => {
      const val = region.value.find(
        (el) => el.toLowerCase() === item.regionRef.toLowerCase()
      );
      if (val) return val;
    });
  }
  if (mana.active) {
    data = data.filter((item) => {
      const val = mana.value.find((el) => {
        if (el >= 7 && el <= item.cost) {
          return true;
        } else if (el === item.cost) {
          return true;
        } else {
          return false;
        }
      });
      if (val !== undefined) return true;
    });
  }

  const showedData = data.slice(0, 100);

  return (
    <Layout>
      <h2 className={classes.title}>Home Screen - {cardDisplay}</h2>
      {cardDisplay === "list" && <CardList data={showedData} />}
      {cardDisplay === "table" && <CardTable data={showedData} />}
      {(cardDisplay === "smallGrid" || cardDisplay === "largeGrid") && (
        <div className={clsx(classes.container, cardDisplay)}>
          {showedData.map((item) => (
            <CardImage key={item.cardCode} data={item} />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default CardScreen;
