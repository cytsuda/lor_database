import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "space-between",
      background: "transparent",
    },
    filter: {
      display: "flex",
    },
    filterVisibility: {
      borderRadius: 0,
    },
    filterOptions: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
  })
);

export default useStyles;
