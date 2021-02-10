import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Custom component
import Base from "./Filters/Base";
import FilterSetComp from "./Filters/FilterSetComp";
import FilterRegionComp from "./Filters/FilterRegionComp";
import FilterManaComp from "./Filters/FilterManaComp";

// Styles
import useStyles from "./FilterComponentStyle";

// Types
import { reduxState } from "../../typesProps";

// Action
import {
  filterSetAction,
  filterRegionAction,
  filterManaAction,
} from "../../redux/actions/filterActions";

const FilterComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { set, region, mana } = useSelector(
    (state: reduxState) => state.filter
  );

  const setHandler = (value: string[]) => {
    dispatch(filterSetAction(value));
  };
  const regionHandler = (value: string[]) => {
    dispatch(filterRegionAction(value));
  };

  const manaHandler = (value: number[]) => {
    dispatch(filterManaAction(value));
    console.log(mana);
  };

  return (
    <div className={classes.root}>
      <Base title="Conjunto" handler={setHandler}>
        <FilterSetComp data={set} handler={setHandler} />
      </Base>
      <Base title="Região" handler={regionHandler}>
        <FilterRegionComp data={region} handler={regionHandler} />
      </Base>
      <Base title="Custo de Mana" handler={manaHandler}>
        <FilterManaComp data={mana} handler={manaHandler} />
      </Base>
    </div>
  );
};

export default FilterComponent;
