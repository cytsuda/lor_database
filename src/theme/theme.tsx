import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Beoford"].join(","),
  },
  palette: {
    type: "dark",
  },
});

export default responsiveFontSizes(theme);
