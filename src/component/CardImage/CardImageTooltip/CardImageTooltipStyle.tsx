import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { grey, blueGrey } from "@material-ui/core/colors";

const bgColor = grey[900];
const bdColor = grey[800];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    arrow: {
      fontSize: theme.spacing(3),
      "&::before": {
        backgroundColor: bgColor,
        border: `1px solid ${bdColor}`,
      },
    },
    tooltip: {
      fontSize: theme.typography.pxToRem(16),
      backgroundColor: bgColor,
      border: `1px solid ${bdColor}`,
      padding: 0,
      margin: 0,
      boxShadow: `1px 1px 6px 6px ${fade(blueGrey[900], 0.5)}`,
    },
    card: {
      marginBottom: theme.spacing(1),
    },
    cardType: {
      padding: `${theme.spacing(1)}px ${theme.spacing(2)}px `,
      borderBottom: `1px solid ${bdColor}`,
      display: "flex",
      alignItems: "center",
      gridGap: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    cartTypeImg: {
      height: 20,
    },
    cartTypeInfo: {
      lineHeight: "20px",
    },
    cardKeyword: {
      padding: `${theme.spacing(1)}px ${theme.spacing(2)}px `,
    },
    cardKeywordTittle: {
      display: "flex",
      alignItems: "center",
      gridGap: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    cardKeywordImg: {
      height: 24,
    },
    cardKeywordInfo: {
      fontWeight: 600,
      letterSpacing: 1,
    },
    cardKeywordDesc: {
      color: grey[700],
      margin: 0,
    },
    flavor: {
      padding: `${theme.spacing(1)}px ${theme.spacing(2)}px `,
      display: "flex",
      flexDirection: "column",
    },
    flavorTxt: {
      color: grey[800],
      display: "flex",
      alignItems: "center",
    },
    flavorTxtS: {
      margin: `0 ${theme.spacing(1)}px`,
      fontSize: 12,
      textTransform: "uppercase",
      fontWeight: 600,
      letterSpacing: 2,
    },
    flavorTxtL: {
      flexGrow: 1,
      borderBottom: "1px solid",
      borderBottomColor: grey[800],
      height: 0,
    },
    flavorDesc: {
      color: grey[600],
      margin: 0,
    },
  })
);

export default useStyles;
