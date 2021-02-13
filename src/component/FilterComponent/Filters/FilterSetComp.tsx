import React from "react";

// Material-Ui
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";

// Styles
import useStyles from "./FiltersStyles";

// Types
import { FilterStringTypes } from "../../../typesProps";

// Info
import { sets } from "../../../data/info_data.json";

// Interface
interface PropTypes {
  data: FilterStringTypes;
  handler: (value: string[]) => void;
}

const FilterSetComp = (props: PropTypes) => {
  const classes = useStyles();
  const { data, handler } = props;

  return (
    <ToggleButtonGroup
      value={data.value}
      classes={{root:classes.set}}
      onChange={(e, value) => handler(value)}
      // className={classes.set}
    >
      {sets.map((item) => (
        <ToggleButton classes={{root: classes.setItem}} key={item.nameRef} value={item.nameRef.toLowerCase()}>
          <img
            className={classes.setImg}
            alt={item.name}
            src={`./img/sets/${item.nameRef.toLowerCase()}.png`}
          />
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default FilterSetComp;
