import React, { useState } from "react";
import clsx from "clsx";

// Material-UI
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core/";

import {
  // Menu,
  ChevronLeft,
} from "@material-ui/icons";

// Custom Component
import FilterComponent from "../../component/FilterComponent/FilterComponent";
import DisplayControllerComponent from "../../component/DisplayControllerComponent/DisplayControllerComponent";

// Style
import useStyles from "./LayoutStyle";

export default function CustomLayout(props: { children: React.ReactNode }) {
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

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, { [classes.appBarShift]: openLeft })}
      >
        <Toolbar>
          {/* <IconButton
            color="inherit"
            aria-label="Abrir menu lateral"
            onClick={handleDrawerLeftToggle}
            edge="start"
            className={clsx(classes.menuButton, openLeft && classes.hide)}
          >
            <Menu />
          </IconButton> */}
          <Typography variant="h6" noWrap>
            Phanton - No Database Req
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawerLeft}
        variant="persistent"
        anchor="left"
        open={openLeft}
        classes={{ paper: classes.drawerPaperLeft }}
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
        <DisplayControllerComponent
          open={openRight}
          setOpen={handleDrawerRightToggle}
        />
        {children}
      </main>
      <Drawer
        className={clsx(classes.drawerRight, { [classes.right]: !openRight })}
        variant="persistent"
        anchor="right"
        open={openRight}
        classes={{ paper: classes.drawerPaperRight }}
      >
        <Toolbar />
        <FilterComponent />
      </Drawer>
    </Box>
  );
}
