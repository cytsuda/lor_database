import { createStyles,makeStyles, Theme, fade, } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.05),
      border: `1px solid ${fade(theme.palette.common.white, 0.12)}`,
      borderRight: 0,
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.10),
      },
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      marginRight: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    icon: {
      padding: theme.spacing(0, 1.5),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
      height: "100%",
    },
    inputBox: {
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
  })
);

export default useStyles;
