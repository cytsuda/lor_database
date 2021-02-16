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
import Tooltip from "../Tooltip/TooltipComponent";

// Types
import { reduxState } from "../../typesProps";

// Action
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

const displayGrid = [
  {
    value: "smallGrid",
    label: "cinco por linha",
    title: "Mostrar cinco cartas por linha",
    icon: <ViewModuleOutlined />,
  },
  {
    value: "largeGrid",
    label: "dez por linha",
    title: "Mostrar dez cartas por linha",
    icon: <ViewComfyOutlined />,
  },
  {
    value: "list",
    label: "exibir cartas em lista",
    title: "Mostrar cartas em lista ",
    icon: <ViewStreamOutlined />,
  },
  {
    value: "table",
    label: "exibir cartas em uma tabela",
    title: "Mostrar carrtas tabelada",
    icon: <ViewListOutlined />,
  },
];

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
        {displayGrid.map((item) => (
          <ToggleButton value={item.value} aria-label={item.label}>
            <Tooltip padding={[1, 2]} title={item.title}>
              {item.icon}
            </Tooltip>
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <div className={classes.filter}>
        <SearchComponent value={search} handler={searchHandler} />

        <Tooltip
          padding={[1, 2]}
          title={
            collectible ? (
              "Mostrar todos"
            ) : (
              <span>
                Esconder <span className={classes.bold}>não</span> colecionáveis
              </span>
            )
          }
        >
          <ToggleButton
            className={classes.filterVisibility}
            value={!collectible}
            selected={collectible}
            onChange={handleCardCollectible}
            aria-label="filter"
          >
            {collectible ? <Visibility /> : <VisibilityOff />}
          </ToggleButton>
        </Tooltip>
        <Tooltip
          padding={[1, 2]}
          title={
            open ? "Fechar as opções do filtro." : "Abrir as opções do filtro."
          }
        >
          <ToggleButton
            className={classes.filterOptions}
            value="check"
            selected={open}
            onChange={setOpen}
            aria-label="filter"
          >
            <FilterList />
          </ToggleButton>
        </Tooltip>
      </div>
    </Box>
  );
};

export default DisplayControllerComponent;
