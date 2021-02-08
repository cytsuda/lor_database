import React from "react";
import clsx from "clsx";

// CustomStyle
import useStyles from "./ManaCircleStyle";

const ManaCircle = (props: {
  value: string;
  isButton?: boolean;
  isActive?: boolean;
}) => {
  const classes = useStyles();
  const { value, isButton, isActive } = props;

  return (
    <div
      className={clsx(classes.mana, isButton && "button", isActive && "active")}
    >
      {value}
    </div>
  );
};

export default ManaCircle;
