import React from "react";
import { List, Divider } from "@material-ui/core";

// Custom Components
import CardItem from "./CardItem/CardItem";

// Styles
import useStyles from "./CardListStyle";

// Types
import { TypeCard } from "../../typesProps";

const CardList = (props: { data: TypeCard[] }) => {
  const classes = useStyles();
  const { data } = props;
  return (
    <List className={classes.container}>
      {data.map((item, index) => (
        <div key={index}>
          <CardItem data={item} />
          {index + 1 !== data.length && <Divider />}
        </div>
      ))}
    </List>
  );
};

export default CardList;
