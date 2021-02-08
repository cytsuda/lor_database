import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      gridGap: theme.spacing(2),
      "&.smallGrid": {
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
      },
      "&.largeGrid": {
        display: "grid",
        gridTemplateColumns: "repeat(10, 1fr)",
      },
    },
    title: {
      display: "flex",
    },
  })
);

export default useStyles;
