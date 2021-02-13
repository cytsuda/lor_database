import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";

//Material Ui
import { Pagination } from "@material-ui/lab";

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
  const [page, setPage] = useState(1);
  const [data, setData] = useState(dataSort);
  const { filter, display, search } = useSelector((state: reduxState) => state);
  const { cardDisplay, collectible } = display;
  const { set, region, mana, type, rarity, keyword } = filter;

  useEffect(() => {
    setLoading(true);
    setPage(1);
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

      console.log(newData.length);
      return newData;
    });
    setLoading(false);
  }, [collectible, set, region, mana, type, rarity, keyword, search]);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const showedData = data.slice((page - 1) * 100, page * 100);

  return (
    <Layout>
      <h2 className={classes.title}>
        Home Screen - {cardDisplay} {loading && "- IS LOADING"}
      </h2>
      {cardDisplay === "list" && <CardList data={showedData} />}
      {cardDisplay === "table" && <CardTable data={showedData} />}
      {(cardDisplay === "smallGrid" || cardDisplay === "largeGrid") && (
        <div className={classes.main}>
          <div className={clsx(classes.container, cardDisplay)}>
            {showedData.map((item) => (
              <CardImage key={item.cardCode} data={item} />
            ))}
          </div>
          {data.length > 100 && (
            <Pagination
              className={classes.pagination}
              count={Math.ceil(data.length / 100)}
              onChange={handleChangePage}
            />
          )}
        </div>
      )}
    </Layout>
  );
};

export default CardScreen;
