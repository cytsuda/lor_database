import {
  createStyles,
  makeStyles,
  Theme,
  fade,
} from "@material-ui/core/styles";

const drawerWidthRight = 360;
const drawerWidthLeft = 250;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
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
    controller: {
      display: "flex",
      justifyContent: "space-between",
      background: "transparent",
    },
    filter: {
      display: "flex",
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    searchInputRoot: {
      color: "inherit",
      height: "100%",
    },
    searchInputBox: {
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
    filterBtnRight: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
    filterBtnCenter: {
      borderRadius: 0,
    },
  })
);

export default useStyles;
