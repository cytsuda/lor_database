import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Custom component
import Base from "./Filters/Base";
import FilterSetComp from "./Filters/FilterSetComp";
import FilterRegionComp from "./Filters/FilterRegionComp";
import FilterManaComp from "./Filters/FilterManaComp";
import FilterTypeComp from "./Filters/FilterTypeComp";

// Styles
import useStyles from "./FilterComponentStyle";

// Types
import { reduxState } from "../../typesProps";

// Action
import {
  filterSetAction,
  filterRegionAction,
  filterManaAction,
  filterTypeAction,
} from "../../redux/actions/filterActions";

const FilterComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { set, region, mana, type } = useSelector(
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
  };

  const typeHandler = (value: string[]) => {
    dispatch(filterTypeAction(value));
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
      <Base title="Tipo" handler={typeHandler}>
        <FilterTypeComp data={type} handler={typeHandler} />
      </Base>

    </div>
  );
};

export default FilterComponent;
