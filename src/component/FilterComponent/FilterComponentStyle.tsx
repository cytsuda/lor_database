import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) => {
  const defaultPadding = theme.spacing(2);

  return createStyles({
    base: {
      padding: `0 ${defaultPadding}px`,
    },
    setImg: {
      width: "100%",
    },
  });
});

export default useStyles;
