import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      height: 20,
      alignSelf: "center",
    },
  })
);

export default useStyles;
