import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    img: {
      maxWidth: "100%",
      cursor: "pointer",
    },
    hidden: {
      display: "none",
    },
  })
);

export default useStyles;
