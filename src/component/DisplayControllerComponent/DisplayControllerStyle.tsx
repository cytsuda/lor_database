import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

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
    bold: {
      color: red[500],
      fontWeight: 900,
      borderBottom: `1px solid ${red[500]}`,
    },
  })
);

export default useStyles;
