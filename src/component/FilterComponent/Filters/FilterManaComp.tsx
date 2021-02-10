import React from "react";
import clsx from "clsx";
// Material-Ui
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";

// CustomComponent
// import ManaCircle from "../../ManaCircle/ManaCircle";

// Styles
import useStyles from "./FiltersStyles";
import manaStyles from "../../ManaCircle/ManaCircleStyle";

// Types
import { FilterNumberTypes } from "../../../typesProps";

// Interface
interface PropTypes {
  data: FilterNumberTypes;
  handler: (value: number[]) => void;
}

const manaValues = [0, 1, 2, 3, 4, 5, 6, 7];
const FilterSetComp = (props: PropTypes) => {
  const classes = useStyles();
  const manaClasses = manaStyles();
  const { data, handler } = props;

  return (
    <ToggleButtonGroup
      className={classes.mana}
      value={data.value}
      onChange={(e, value) => handler(value)}
    >
      {manaValues.map((item) => (
        <ToggleButton
          key={"mana_" + item}
          value={item}
          classes={{
            root: clsx(manaClasses.mana, classes.manaRoot),
            selected: classes.manaActive,
          }}
        >
          <span>{item === 7 ? item + "+" : item}</span>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default FilterSetComp;
