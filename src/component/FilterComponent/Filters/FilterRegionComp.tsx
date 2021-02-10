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

const FilterSetComp = (props: PropTypes) => {
  const classes = useStyles();
  const { data, handler } = props;

  return (
    <ToggleButtonGroup
      className={classes.regionRoot}
      value={data.value}
      onChange={(e, value) => handler(value)}
    >
      {regions.map((item) => (
        <ToggleButton
          classes={{ root: classes.regionCont }}
          key={item.nameRef}
          value={item.nameRef}
        >
          <img
            className={classes.regionImg}
            alt={item.nameRef}
            src={`./img/regions/icon-${item.nameRef.toLowerCase()}.png`}
          />
          <span className={classes.regionInfo}>{item.name}</span>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default FilterSetComp;
