import React from "react";

// Material-Ui
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
// Custom component
import Tooltip from "../../Tooltip/TooltipComponent";

// Styles
import useStyles from "./FiltersStyles";

// Types
import { FilterStringTypes } from "../../../typesProps";

// Info
import { types } from "../../../data/info_data.json";

// Interface
interface PropTypes {
  data: FilterStringTypes;
  handler: (value: string[]) => void;
}

const FilterTypeComp = (props: PropTypes) => {
  const classes = useStyles();
  const { data, handler } = props;

  return (
    <ToggleButtonGroup
      className={classes.gen}
      value={data.value}
      onChange={(e, value) => handler(value)}
    >
      {types.map((item) => (
        <ToggleButton
          classes={{ root: classes.genRoot }}
          key={item.nameRef}
          value={item.nameRef}
        >
          <Tooltip title={item.name} padding={[1, 2]}>
            <div className={classes.genComp}>
              <img
                className={classes.genImg}
                alt={item.name}
                src={`./img/common/types/${item.nameRef}_card.svg`}
              />
              <span className={classes.genInfo}>{item.name}</span>
            </div>
          </Tooltip>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default FilterTypeComp;
