import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Material-ui
import { Box } from "@material-ui/core";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
import {
  ViewModuleOutlined,
  ViewComfyOutlined,
  ViewStreamOutlined,
  ViewListOutlined,
  Visibility,
  VisibilityOff,
  FilterList,
} from "@material-ui/icons";
// Custom Component
import SearchComponent from "../SearchComponent/SearchComponent";

// Types
import { reduxState } from "../../typesProps";

// Action
// import {} from "../../redux/actions/filterActions";
import {
  cardDisplayChange,
  cardCollectibleChange,
} from "../../redux/actions/displayActions";
import { searchAction } from "../../redux/actions/searchAction";
// Style
import useStyles from "./DisplayControllerStyle";

interface DisplayControllerType {
  open: boolean;
  setOpen: () => void;
}
const DisplayControllerComponent = (props: DisplayControllerType) => {
  const { open, setOpen } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const { display, search } = useSelector((state: reduxState) => state);
  const { cardDisplay, collectible } = display;

  const handleCardDisplay = (event: any, value: string) => {
    dispatch(cardDisplayChange(value));
  };

  const handleCardCollectible = () => {
    dispatch(cardCollectibleChange(!collectible));
  };

  const searchHandler = (event: any) => {
    dispatch(searchAction(event.target.value));
  };

  return (
    <Box className={classes.root}>
      <ToggleButtonGroup
        value={cardDisplay}
        exclusive
        onChange={handleCardDisplay}
        aria-label="alterar a exibição"
      >
        <ToggleButton value="smallGrid" aria-label="cinco por linha">
          <ViewModuleOutlined />
        </ToggleButton>
        <ToggleButton value="largeGrid" aria-label="dez por linha">
          <ViewComfyOutlined />
        </ToggleButton>
        <ToggleButton value="list" aria-label="lista">
          <ViewStreamOutlined />
        </ToggleButton>
        <ToggleButton value="table" aria-label="tabela">
          <ViewListOutlined />
        </ToggleButton>
      </ToggleButtonGroup>
      <div className={classes.filter}>
        <SearchComponent value={search} handler={searchHandler} />
        <ToggleButton
          className={classes.filterVisibility}
          value={!collectible}
          selected={collectible}
          onChange={handleCardCollectible}
          aria-label="filter"
        >
          {collectible ? <Visibility /> : <VisibilityOff />}
        </ToggleButton>
        <ToggleButton
          className={classes.filterOptions}
          value="check"
          selected={open}
          onChange={setOpen}
          aria-label="filter"
        >
          <FilterList />
        </ToggleButton>
      </div>
    </Box>
  );
};

export default DisplayControllerComponent;
