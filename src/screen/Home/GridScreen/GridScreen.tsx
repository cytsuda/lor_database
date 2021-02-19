import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";

// Material ui components
import { Pagination } from "@material-ui/lab";
// Custom component
import CardImage from "../../../component/CardImage/CardImage";

// Style
import useStyles from "./GridScreenStyle";

// Type
import { TypeCard, reduxState } from "../../../typesProps";

interface GridScreenType {
  dataType: string;
  data: TypeCard[];
}

const GridScreen = (props: GridScreenType) => {
  const classes = useStyles();
  const { filter, search, display } = useSelector((state: reduxState) => state);
  const [page, setPage] = useState(1);
  const { dataType, data } = props;
  let showedData = data.slice((page - 1) * 100, page * 100);
  const pageCahngeHandler = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };
  useEffect(() => {
    setPage(1);
  }, [filter, display.collectible, dataType, search]);

  return (
    <>
      {(dataType === "smallGrid" || dataType === "largeGrid") && (
        <div className={classes.main}>
          <div className={clsx(classes.container, dataType)}>
            {showedData.map((item) => (
              <CardImage key={item.cardCode} data={item} />
            ))}
          </div>
          {data.length > 100 && (
            <Pagination
              page={page}
              className={classes.pagination}
              count={Math.ceil(data.length / 100)}
              onChange={pageCahngeHandler}
            />
          )}
        </div>
      )}
    </>
  );
};

export default GridScreen;
