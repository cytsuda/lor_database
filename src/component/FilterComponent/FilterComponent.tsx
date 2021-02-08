import React, { useState } from "react";
import clsx from "clsx";

// Material-Ui
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";

// Data
import { sets } from "../../data/info_data.json";

import useStyles from "./FilterComponentStyle";
const FilterComponent = () => {
  const classes = useStyles();
  const [set, setSet] = useState<string[]>([]);

  const changeSetHandler = (event: React.MouseEvent, value: string[]) => {
    setSet(value);
  };

  return (
    <>
      <h4 className={classes.base}>Filter component</h4>
      <ToggleButtonGroup
        className={clsx(classes.base)}
        value={set}
        onChange={changeSetHandler}
      >
        {sets.map((item) => (
          <ToggleButton
            value={item.nameRef.toLowerCase()}
            aria-label="Primordiais"
          >
            <img
              className={classes.setImg}
              alt={item.name}
              src={`./img/sets/${item.nameRef.toLowerCase()}.png`}
            />
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <p>{set}</p>
    </>
  );
};

export default FilterComponent;

{
  /* <Chip color="primary" onDelete={handleDelete} avatar={<Avatar src="/static/images/avatar/1.jpg" />} /> */
}
