import React, { useState } from "react";
import { List, Divider , ListItem} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { Helmet } from "react-helmet";

// Custom Components
import CardItem from "./CardItem/CardItem";

// Styles
import useStyles from "./CardListStyle";

// Types
import { TypeCard } from "../../typesProps";

const CardList = (props: { data: TypeCard[] }) => {
  const { data } = props;
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [showedData, setShowedData] = useState(data.slice(0, 100));
  const pageChangeHandler = (event: any, page: number) => {
    setPage(page);
    const init = (page-1) * 100;
    const end = (page) * 100;
    setShowedData(data.slice(init, end));
  };
  return (
    <>
      <Helmet>
        <title>LoR Showcase - Listas</title>
    </Helmet>
    <List className={classes.container}>
      {showedData.map((item, index) => (
        <div key={index}>
          <CardItem data={item} />
          {index + 1 !== data.length && <Divider />}
        </div>
      ))}
      <ListItem alignItems="center">

      <Pagination
        classes={{root:classes.center}}
        page={page}
        count={Math.ceil(data.length / 100)}
        color="primary"
        onChange={pageChangeHandler}
      />
      </ListItem>
    </List>
    </>
  );
};

export default CardList;
