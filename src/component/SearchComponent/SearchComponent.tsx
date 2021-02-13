import React from "react";

// Material-ui
import { InputBase } from "@material-ui/core";
import { Search } from "@material-ui/icons";

// Styles
import useStyles from "./SearchComponentStyle";

interface PropTypes {
  value: string;
  handler: (event: any) => void;
}

const SearchComponent = (props: PropTypes) => {
  const classes = useStyles();
  const { value, handler } = props;
  
  return (
    <div className={classes.root}>
      <div className={classes.icon}>
        <Search />
      </div>
      <InputBase
        placeholder="Buscar..."
        classes={{
          root: classes.inputRoot,
          input: classes.inputBox,
        }}
        inputProps={{ "aria-label": "buscar" }}
        value={value}
        onChange={handler}
      />
    </div>
  );
};

export default SearchComponent;