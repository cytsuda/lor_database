import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { yellow, grey } from "@material-ui/core/colors";
import { fade } from "@material-ui/core/styles/colorManipulator";

const bgColor = grey[900];
const bdColor = grey[800];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    img: {
      width: 200,
      "&.loading": {
        display: "none",
      },
    },
    arrow: {
      fontSize: theme.spacing(3),
      "&::before": {
        backgroundColor: fade(bgColor, 0.7),
        border: `1px solid ${bdColor}`,
      },
    },
    tooltip: {
      fontSize: theme.typography.pxToRem(16),
      backgroundColor: fade(bgColor, 0.7),
      padding: theme.spacing(1),
      boxShadow: `1px 1px 6px 6px rgba(255,255,255,.1)`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontWeight: 700,
      color: yellow[700],
      "&.image": {
        cursor: "pointer",
      },
    },
    container: {
      display: "inline-flex",
      gridGap: theme.spacing(0.5),
      alignItems: "baseline",
    },
  })
);

export default useStyles;
