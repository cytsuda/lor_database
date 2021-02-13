import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Custom component
import Base from "./Filters/Base";
import FilterSetComp from "./Filters/FilterSetComp";
import FilterRegionComp from "./Filters/FilterRegionComp";
import FilterManaComp from "./Filters/FilterManaComp";
import FilterTypeComp from "./Filters/FilterTypeComp";
import FilterRarityComp from "./Filters/FilterRarityComp";
import FilterKeywordComp from "./Filters/FilterKeywordComp";

// Styles
import useStyles from "./FilterComponentStyle";

// Types
import { reduxState, SelectTypes } from "../../typesProps";

// Action
import {
  filterSetAction,
  filterRegionAction,
  filterManaAction,
  filterTypeAction,
  filterRarityAction,
  filterKeywordAction,
} from "../../redux/actions/filterActions";

const FilterComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { set, region, mana, type, rarity, keyword } = useSelector(
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
  const rarityHandler = (value: string[]) => {
    dispatch(filterRarityAction(value));
  };
  const keywordHandler = (value: SelectTypes[]) => {
    dispatch(filterKeywordAction(value));
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
      <Base title="Raridade" handler={rarityHandler}>
        <FilterRarityComp data={rarity} handler={rarityHandler} />
      </Base>
      <Base title="Palavras-chave">
        <FilterKeywordComp data={keyword} handler={keywordHandler} />
      </Base>
    </div>
  );
};

export default FilterComponent;
