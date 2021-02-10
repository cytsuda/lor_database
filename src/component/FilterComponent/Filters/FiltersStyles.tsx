import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const borderColor = grey[700];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    baseRoot: {
      padding: `${theme.spacing(2)}px ${theme.spacing(1)}px`,
    },
    baseTitle: {
      display: "flex",
      alignItems: "center",
      marginBottom: theme.spacing(2),
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
      fontSize: theme.typography.pxToRem(16),
      letterSpacing: 1,
      fontFamily: "Beoford",
      textTransform: "capitalize",
      fontWeight: 600,
      paddingRight: theme.spacing(1.5),
      paddingLeft: theme.spacing(1.5),
      "&:hover": {
        color: grey[400],
      },
    },
    // ---------------------------------------
    setItem: {
      width: "33%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gridGap: theme.spacing(1),
      padding: `${theme.spacing(1)}px 0`,
      border: `1px solid ${grey[700]}`,
    },
    setImg: {
      width: "45%",
    },
    // ---------------------------------------
    regionRoot: {
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gridGap: theme.spacing(1),
    },
    regionCont: {
      border: `transparent!important`,
      borderRadius: "4px!important",
      display: "flex",
      justifyContent: "flex-start",
      padding: theme.spacing(1),
    },
    regionImg: {
      height: 24,
      marginRight: theme.spacing(1),
    },
    regionInfo: {
      fontSize: theme.typography.pxToRem(16),
      fontWeight: 400,
      textTransform: "none",
    },
    // ---------------------------------------
    mana: {
      display: "flex",
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
