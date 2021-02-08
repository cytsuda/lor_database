import React, { useState } from "react";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";

// Material-UI
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Box,
  Toolbar,
  Typography,
  InputBase,
} from "@material-ui/core/";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";

import {
  Menu,
  ChevronLeft,
  ViewModuleOutlined,
  ViewComfyOutlined,
  ViewStreamOutlined,
  ViewListOutlined,
  FilterList,
  Search,
} from "@material-ui/icons";

// Custom Component
import Filtercomponent from "../../component/FilterComponent/FilterComponent";

// Style
import useStyles from "./LayoutStyle";

// Types
import { reduxState } from "../../typesProps";

// Redux Action
import { cardDisplayChange } from "../../redux/actions/filterActions";

export default function CustomLayout(props: { children: React.ReactNode }) {
  const filterState = useSelector((state: reduxState) => state.filter);
  const { cardDisplay } = filterState;
  const dispatch = useDispatch();
  // console.log(cardDisplay);

  const [openLeft, setOpenLeft] = useState<boolean>(false);
  const [openRight, setOpenRight] = useState<boolean>(false);

  const { children } = props;
  const classes = useStyles();

  const handleDrawerLeftToggle = () => {
    setOpenLeft((prev) => !prev);
  };
  const handleDrawerRightToggle = () => {
    setOpenRight((prev) => !prev);
  };
  const handleCardDisplay = (event: any, value: string) => {
    if (value !== null) {
      dispatch(cardDisplayChange(value));
    }
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, { [classes.appBarShift]: openLeft })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Abrir menu lateral"
            onClick={handleDrawerLeftToggle}
            edge="start"
            className={clsx(classes.menuButton, openLeft && classes.hide)}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap>
            Phanton - No Database Req
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={openLeft}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerLeftToggle}>
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShiftLeft]: openLeft,
          [classes.contentShiftRight]: openRight,
        })}
      >
        <div className={classes.drawerHeader} />
        <Box className={classes.controller}>
          <ToggleButtonGroup
            value={cardDisplay}
            exclusive
            onChange={handleCardDisplay}
            aria-label="text alignment"
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
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Search />
              </div>
              <InputBase
                placeholder="Buscar…"
                classes={{
                  root: classes.searchInputRoot,
                  input: classes.searchInputBox,
                }}
                inputProps={{ "aria-label": "buscar" }}
              />
            </div>
            <ToggleButton
              className={classes.filterBtn}
              value="check"
              selected={openRight}
              onChange={handleDrawerRightToggle}
              aria-label="filter"
            >
              <FilterList />
            </ToggleButton>
          </div>
        </Box>
        {children}
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={openRight}
        classes={{ paper: classes.drawerPaper }}
      >
        <Toolbar />
        <Filtercomponent />
      </Drawer>
    </div>
  );
}
