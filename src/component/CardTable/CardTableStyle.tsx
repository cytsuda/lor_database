import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      border: "1px solid white",
    },
    container: {
      maxHeight: "75vh",
    },
    tableImg: {
      height: 32,
    },
    colWidth: {
      width: "30%",
    },
  })
);

export default useStyles;
