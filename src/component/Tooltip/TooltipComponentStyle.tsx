import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { grey } from "@material-ui/core/colors";

const bdColor = grey[800];
const bgColor = grey[900];

const useStyles = ([x, y]: [number, number]) => {
  return makeStyles((theme: Theme) =>
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
        boxShadow: `1px 1px 6px 6px ${fade(grey[900], 0.5)}`,
      },
      padding: {
        padding: theme.spacing(x, y),
      },
    })
  );
};

export default useStyles;
