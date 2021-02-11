import React from "react";

// Material-Ui
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";

// Styles
import useStyles from "./FiltersStyles";

// Types
import { FilterStringTypes } from "../../../typesProps";

// Info
import { rarities } from "../../../data/info_data.json";

// Interface
interface PropTypes {
  data: FilterStringTypes;
  handler: (value: string[]) => void;
}

const FilterRarityComp = (props: PropTypes) => {
  const classes = useStyles();
  const { data, handler } = props;

  return (
    <ToggleButtonGroup
      className={classes.gen}
      value={data.value}
      onChange={(e, value) => handler(value)}
    >
      {rarities.map(
        (item) =>
          item.nameRef !== "None" && (
            <ToggleButton
              classes={{ root: classes.genRoot }}
              key={item.nameRef}
              value={item.nameRef}
            >
              <img
                className={classes.genImg}
                alt={item.nameRef}
                src={`./img/rarities/rarities_${item.nameRef.toLowerCase()}.png`}
              />
              <span className={classes.genInfo}>{item.name.toLowerCase()}</span>
            </ToggleButton>
          )
      )}
    </ToggleButtonGroup>
  );
};

export default FilterRarityComp;
