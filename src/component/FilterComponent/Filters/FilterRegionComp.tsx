import React from "react";

// Material-Ui
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";

// Styles
import useStyles from "./FiltersStyles";

// Types
import { FilterStringTypes } from "../../../typesProps";

// Info
import { regions } from "../../../data/info_data.json";

// Interface
interface PropTypes {
  data: FilterStringTypes;
  handler: (value: string[]) => void;
}

const FilterRegionComp = (props: PropTypes) => {
  const classes = useStyles();
  const { data, handler } = props;

  return (
    <ToggleButtonGroup
      className={classes.gen}
      value={data.value}
      onChange={(e, value) => handler(value)}
    >
      {regions.map((item) => (
        <ToggleButton
          classes={{ root: classes.genRoot }}
          key={item.nameRef}
          value={item.nameRef}
        >
          <img
            className={classes.genImg}
            alt={item.nameRef}
            src={`./img/regions/icon-${item.nameRef.toLowerCase()}.png`}
          />
          <span className={classes.genInfo}>{item.name}</span>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default FilterRegionComp;
