import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mana: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: 34,
      height: 34,
      borderRadius: "100%",
      zIndex: 1,
      color: "white",
      fontWeight: "bold",
      border: "1px solid rgb(189, 158, 89)",
      transition: "opacity 0.3s ease 0s",
      boxShadow:
        "rgba(20, 11, 36, 0.8) 0px 0px 6px 0px, black 0px 0px 0px 2px inset",
      backgroundImage:
        "linear-gradient(138deg, rgb(160, 223, 246) 18%, rgba(41, 150, 164, 0) 35%, rgba(41, 150, 164, 0) 67%, rgb(160, 223, 246) 82%), radial-gradient(circle, rgb(47, 79, 143), rgb(41, 70, 129) 44%, rgb(9, 127, 149) 73%, rgb(45, 165, 183) 76%)",
      "&.button": {
        opacity: 0.3,
        cursor: "pointer",
        "&.active": {
          opacity: 1,
        },
        "&:hover": {
          opacity: 1,
        },
      },
    },
  })
);

export default useStyles;
