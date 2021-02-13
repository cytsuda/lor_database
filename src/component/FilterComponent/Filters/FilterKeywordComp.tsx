import React from "react";
import Select from "react-select";

// Material-Ui
// import { InputBase } from "@material-ui/core";

// Styles
// import useStyles from "./FiltersStyles";
import keywordStyle from "./FilterKeywordStyle";

// Types
import { FilterKeywordTypes, SelectTypes } from "../../../typesProps";

// Info
import { keywords, regions } from "../../../data/info_data.json";

let terms = keywords
  .filter((keyword) =>
    regions.find((region) => region.nameRef === keyword.nameRef)
      ? false
      : keyword.nameRef === "SpellOverwhelm"
      ? false
      : true
  )
  .map((term) => ({ label: term.name, value: term.nameRef }));

// Interface
interface PropTypes {
  data: FilterKeywordTypes;
  handler: (value: SelectTypes[]) => void;
}

const FilterKeywordComp = (props: PropTypes) => {
  // const classes = useStyles();
  const { data, handler } = props;
  const keywordFilterHandler = (value: any) => {
    handler(value);
  };
  return (
    <Select
      styles={keywordStyle}
      onChange={keywordFilterHandler}
      value={data.value}
      isClearable
      isMulti
      options={terms}
    />
  );
};

export default FilterKeywordComp;
