import React from "react";
// Material-Ui
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";

// CustomComponent
import Tooltip from "../../Tooltip/TooltipComponent";

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
const FilterManaComp = (props: PropTypes) => {
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
            root: classes.manaRoot,
            selected: classes.manaActive,
          }}
        >
          <Tooltip
            title={
              item === 7
                ? "Custo: " + item.toString() + "+"
                : "Custo: " + item.toString()
            }
            padding={[1, 2]}
          >
            <div className={manaClasses.mana}>
              <span>{item === 7 ? item + "+" : item}</span>
            </div>
          </Tooltip>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default FilterManaComp;
