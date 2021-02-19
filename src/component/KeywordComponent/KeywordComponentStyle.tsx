import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import { fade } from "@material-ui/core/styles/colorManipulator";

const bgColor = grey[900];
const bdColor = grey[800];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    keyword: {
      display: "flex",
      gridGap: theme.spacing(1),
      alignItems: "center",
      border: `1px solid ${fade(grey[100], 0.1)}`,
      padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
      borderRadius: "2px",
      cursor: "pointer",
      "&.table": {
        border: 0,
        padding: 0,
        display: "inline-flex",
        margin: theme.spacing(1, 2, 1, 0),
      },
    },
    keywordImg: {
      height: 24,
      "&.table": {
        height: "16",
      },
    },
    keywordInfo: {
      fontSize: theme.typography.pxToRem(18),
      "&.table": {
        fontSize: theme.typography.pxToRem(16),
      },
    },
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
      padding: theme.spacing(1),
      boxShadow: `1px 1px 6px 6px rgba(255,255,255,.1)`,
    },
  })
);

export default useStyles;
