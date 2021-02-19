import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
      position: "relative",
      display: "flex",
      flexDirection: "column",
    },
    center: {
      margin: "0 auto",
      paddiong: theme.spacing(2),
    },
  })
);

export default useStyles;
