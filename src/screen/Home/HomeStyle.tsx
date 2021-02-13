import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      gridGap: theme.spacing(2),
      height: "100%",
      "&.smallGrid": {
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
      },
      "&.largeGrid": {
        display: "grid",
        gridTemplateColumns: "repeat(10, 1fr)",
      },
    },
    main: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    pagination: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    title: {
      display: "flex",
    },
  })
);

export default useStyles;
