import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
      position: "relative",
      display: "flex",
      flexDirection: "column",
    },
  })
);

export default useStyles;
