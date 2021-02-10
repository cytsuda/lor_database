import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      gridGap: theme.spacing(2),
      fontSize: theme.typography.pxToRem(16),
    },
  })
);

export default useStyles;
