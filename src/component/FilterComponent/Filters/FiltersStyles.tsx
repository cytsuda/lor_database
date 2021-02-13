import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { grey } from "@material-ui/core/colors";

const borderColor = grey[700];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    baseRoot: {
      padding: `${theme.spacing(1)}px ${theme.spacing(1)}px`,
    },
    baseTitle: {
      display: "flex",
      alignItems: "center",
      marginBottom: theme.spacing(1.5),
    },
    baseText: {
      fontSize: theme.typography.pxToRem(18),
      fontWeight: 700,
      color: borderColor,
    },
    baseLine: {
      flexGrow: 1,
      borderBottom: `1px solid ${borderColor}`,
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
    },
    baseBtn: {
      color: borderColor,
      fontSize: theme.typography.pxToRem(14),
      letterSpacing: 1,
      fontFamily: "Beoford",
      textTransform: "capitalize",
      fontWeight: 600,
      padding: `${theme.spacing(0.5)}px ${theme.spacing(2)}px`,
      "&:hover": {
        color: grey[400],
      },
    },
    set: {
      display: "flex",
      gridGap: theme.spacing(0.5),
    },
    setItem: {
      borderRadius: `${theme.spacing(0.5)}px !important`,
      border: `1px solid ${fade(borderColor, 0.5)}!important`,
    },
    setImg: {
      width: "30%",
    },
    gen: {
      display: "grid!important",
      gridTemplateColumns: "repeat(2,1fr)",
      gridGap: theme.spacing(0.5),
    },
    genRoot: {
      border: `transparent!important`,
      borderRadius: "4px!important",
      display: "flex!important",
      justifyContent: "flex-start",
      padding: theme.spacing(1) + "px!important",
    },
    genImg: {
      height: 24,
      marginRight: theme.spacing(0.5),
    },
    genInfo: {
      fontSize: theme.typography.pxToRem(16),
      fontWeight: 400,
      textTransform: "capitalize",
    },
    mana: {
      display: "flex!important",
      justifyContent: "space-between",
    },
    manaRoot: {
      borderRadius: "50%!important",
      opacity: 0.3,
      cursor: "pointer",
      fontSize: theme.typography.pxToRem(12),
      "&:hover": {
        opacity: 1,
      },
    },
    manaActive: {
      opacity: 1,
    },
  })
);

export default useStyles;
