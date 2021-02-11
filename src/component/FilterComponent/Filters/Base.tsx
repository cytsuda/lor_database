import React, { ReactChild } from "react";

// Material-Ui
import { Button } from "@material-ui/core";

// Styles
import useStyles from "./FiltersStyles";

// Types
interface BaseProps {
  title: string;
  children: ReactChild;
  handler: (value: any) => void;
}

const Base = (props: BaseProps) => {
  const classes = useStyles();
  const { title, children, handler } = props;
  return (
    <div className={classes.baseRoot}>
      <div className={classes.baseTitle}>
        <span className={classes.baseText}>{title}</span>
        <div className={classes.baseLine} />
        <Button
          size="small"
          className={classes.baseBtn}
          onClick={() => handler([])}
        >
          Limpar
        </Button>
      </div>
      {children}
    </div>
  );
};

export default Base;
