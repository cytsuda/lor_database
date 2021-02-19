import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

//Material Ui

// CustomComponent
import Layout from "../../hoc/LayoutWFilter/Layout";
import CardList from "../../component/CardList/CardList";
import CardTable from "../../component/CardTable/CardTable";

// Custom Sreen
import GridScreen from "./GridScreen/GridScreen";

// Types
import { reduxState } from "../../typesProps";

// RawData
import rawData from "../../data/lor_data.json";

let dataSort = rawData.sort((a, b) =>
  a.name > b.name ? 1 : a.name < b.name ? -1 : 0
);
dataSort = dataSort.sort((a, b) => a.cost - b.cost);

const CardScreen = () => {
  const [data, setData] = useState(dataSort);
  const { filter, display, search } = useSelector((state: reduxState) => state);
  const { cardDisplay, collectible } = display;
  const { set, region, mana, type, rarity, keyword } = filter;

  useEffect(() => {
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
          else return false;
        });
        console.log("com filtro de conjunto");
      }

      if (region.active) {
        newData = newData.filter((item) => {
          const val = region.value.find(
            (el) => el.toLowerCase() === item.regionRef.toLowerCase()
          );
          if (val) return val;
          else return false;
        });
        console.log("com filtro de regioes");
      }

      if (mana.active) {
        newData = newData.filter((item) => {
          const val = mana.value.find((el) =>
            el >= 7 && el <= item.cost ? true : el === item.cost ? true : false
          );
          if (val !== undefined) return true;
          else return false;
        });
        console.log("com filtro de custo de mana");
      }

      if (type.active) {
        newData = newData.filter((item) => {
          const val = type.value.find((el) => el === item.typeRef);
          if (val) return val;
          else return false;
        });
        console.log("com filtro de type");
      }

      if (rarity.active) {
        newData = newData.filter((item) => {
          const val = rarity.value.find((el) => el === item.rarityRef);
          if (val) return val;
          else return false;
        });
      }

      if (keyword.active) {
        newData = newData.filter((item) => {
          const val = keyword.value.find((el) => {
            return item.keywordRefs.find((i) => i.includes(el.value));
          });
          if (val) return true;
          else return false;
        });
      }

      if (search.length > 0) {
        newData = newData.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        );
      }

      return newData;
    });
  }, [collectible, set, region, mana, type, rarity, keyword, search]);

  return (
    <Layout>
      {cardDisplay === "list" && <CardList data={data} />}
      {cardDisplay === "table" && <CardTable data={data} />}
      {(cardDisplay === "smallGrid" || cardDisplay === "largeGrid") && (
        <GridScreen data={data} dataType={cardDisplay} />
      )}
    </Layout>
  );
};

export default CardScreen;
