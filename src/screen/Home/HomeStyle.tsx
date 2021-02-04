import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gridGap: theme.spacing(2),
    },
    title: {
      display: "flex",
    },
  })
);

export default useStyles;
