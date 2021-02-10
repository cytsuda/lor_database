import React, { useState, useEffect } from "react";
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
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(dataSort);
  const { filter, display } = useSelector((state: reduxState) => state);
  const { cardDisplay, collectible } = display;
  const { set, region, mana, type } = filter;

  useEffect(() => {
    setLoading(true);
    setData((prev) => {
      let newData = dataSort;
      if (collectible) {
        newData = newData.filter((item) => item.collectible);
        console.log("apenas colecionaveis");
      }

      if (set.active) {
        newData = newData.filter((item) => {
          const val = set.value.find((el) => el === item.set.toLowerCase());
          if (val) return val;
        });
        console.log("com filtro de conjunto");
      }

      if (region.active) {
        newData = newData.filter((item) => {
          const val = region.value.find(
            (el) => el.toLowerCase() === item.regionRef.toLowerCase()
          );
          if (val) return val;
        });
        console.log("com filtro de regioes");
      }

      if (mana.active) {
        newData = newData.filter((item) => {
          const val = mana.value.find((el) =>
            el >= 7 && el <= item.cost ? true : el === item.cost ? true : false
          );
          if (val !== undefined) return true;
        });
        console.log("com filtro de custo de mana");
      }

      if (type.active) {
        newData = newData.filter((item) => {
          const val = type.value.find((el) => el === item.typeRef);
          if (val) return val;
        });
        console.log("com filtro de type");
      }
      console.log(newData.length);
      return newData;
    });
    setLoading(false);
  }, [collectible, set, region, mana, type]);

  const showedData = data.slice(0, 100);

  return (
    <Layout>
      <h2 className={classes.title}>
        Home Screen - {cardDisplay} {loading && "- IS LOADING"}
      </h2>

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
