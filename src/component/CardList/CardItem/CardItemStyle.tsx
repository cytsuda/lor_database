import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      marginBottom: theme.spacing(1),
    },
    img: {
      width: "100%",
    },
    status: {
      display: "flex",
      flex: "2 1 0",
    },
    avatar: {
      backgroundColor: "transparent",
      border: `1px solid ${grey[600]}`,
    },
    avatarImg: {
      height: 40,
    },
    rarity: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginRight: theme.spacing(2),
    },
    info: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    infoImg: {
      height: 32,
    },
    infoTxt: {
      fontWeight: 600,
      fontSize: theme.typography.pxToRem(24),
      marginLeft: -theme.spacing(1),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    center: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    mr: {
      marginRight: "auto",
    },
    text: {
      fontSize: theme.typography.pxToRem(16),
    },
    textRoot: {
      flex: "1 4 0",
    },
    textSecondary: {
      color: grey[500],
      textTransform: "capitalize",
    },
    tittle: {
      fontWeight: 600,
      fontSize: theme.typography.pxToRem(14),
      color: grey[600],
      letterSpacing: 2,
      textTransform: "uppercase",
      margin: `${theme.spacing(1)}px 0`,
    },
    container: {
      borderRight: `8px solid ${grey[700]}`,
      borderLeft: `8px solid ${grey[700]}`,
      borderBottom: `1px solid ${grey[700]}`,
    },
    keywordContainer: {
      display: "flex",
      gridGap: theme.spacing(1),
    },
  })
);

export default useStyles;
