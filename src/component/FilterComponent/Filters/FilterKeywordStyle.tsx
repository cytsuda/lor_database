import { fade } from "@material-ui/core/styles/colorManipulator";
import { grey, red } from "@material-ui/core/colors";

const stylesConfig = {
  control: (provider: any, state: any) => ({
    ...provider,
    backgroundColor: "transparent",
    borderColor: grey[700],
    fontSize: 16,
  }),
  input: (provider: any, state: any) => ({
    ...provider,
    color: grey[400],
  }),
  indicatorsContainer: (provider: any, state: any) => ({
    ...provider,
    backgroundColor: grey[800],
    cursor: "pointer",
  }),
  option: (provider: any, state: any) => ({
    ...provider,
    backgroundColor: state.isFocused && fade(grey[200], 0.05),
    color: state.isFocused ? grey[100] : grey[600],
    "&:active": {
      backgroundColor: fade(grey[200], 0.25),
    },
  }),
  multiValue: (provider: any, state: any) => ({
    ...provider,
    backgroundColor: fade(grey[800], 0.25),
    border: `1px solid ${grey[700]}`,
    color: "white",
  }),
  multiValueLabel: (provider: any, state: any) => ({
    color: "white",
    padding: "4px 8px",
    borderRight: `1px solid ${grey[700]}`,
  }),
  multiValueRemove: (provider: any, state: any) => ({
    ...provider,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: fade(red[200], 0.25),
      color: red[400],
    },
  }),
  menu: (provider: any, state: any) => ({
    ...provider,
    backgroundColor: grey[900],
    border: `1px solid ${grey[700]}`,
    color: grey[100],
  }),
  indicatorSeparator: (provider: any, state: any) => ({
    ...provider,
    backgroundColor: grey[800],
  }),
};
export default stylesConfig;
