import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const drawerWidthRight = 360;
const drawerWidthLeft = 250;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      width: "100%",
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      zIndex: theme.zIndex.drawer + 1,
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidthLeft}px)`,
      marginLeft: drawerWidthLeft,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: "none",
    },
    drawerLeft: {
      width: drawerWidthLeft,
      flexShrink: 0,
    },
    drawerRight: {
      width: drawerWidthRight,
      flexShrink: 0,
    },
    right: {
      zIndex: -1,
    },
    drawerPaperRight: {
      width: drawerWidthRight,
    },
    drawerPaperLeft: {
      width: drawerWidthLeft,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidthLeft,
      marginRight: -drawerWidthRight,
    },
    contentShiftLeft: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    contentShiftRight: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    },
  })
);

export default useStyles;
