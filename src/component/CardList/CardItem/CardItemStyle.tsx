import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { grey } from "@material-ui/core/colors";

const bgColor = grey[900];
const bdColor = grey[800];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      marginBottom: theme.spacing(1),
    },
    img: {
      width: "100%",
    },
    avatar: {
      backgroundColor: "transparent",
      border: `1px solid ${grey[600]}`,
    },
    avatarType: {
      backgroundColor: "transparent",
      borderColor: "transparent",
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
    region: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "auto",
    },
    text: {
      fontSize: theme.typography.pxToRem(16),
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
