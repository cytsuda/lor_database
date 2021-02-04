import React, { useState } from "react";

// Material-UI
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core/";
import { Menu, ChevronLeft } from "@material-ui/icons";
// Style
import useStyles from "./style";
import clsx from "clsx";

export default function CustomLayout(props: { children: React.ReactNode }) {
  const [open, setOpen] = useState<boolean>(false);
  const { children } = props;
  const classes = useStyles();

  const handleDrawerToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, { [classes.appBarShift]: open })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Abrir menu lateral"
            onClick={handleDrawerToggle}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
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
        open={open}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerToggle}>
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />
      </Drawer>
      <main className={clsx(classes.content, { [classes.contentShift]: open })}>
        <div className={classes.drawerHeader} />
        {children}
      </main>
    </div>
  );
}
