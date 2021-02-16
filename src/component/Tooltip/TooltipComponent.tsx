import React, { FunctionComponent } from "react";
import clsx from "clsx";

// Material-ui
import { Tooltip } from "@material-ui/core";

// Style
import useStyles from "./TooltipComponentStyle";

type TooltipType = {
  title: string | React.ReactElement<any, any>;
  children: React.ReactElement<any, any>;
  padding?: [number, number];
};

const CustomTooltip: FunctionComponent<TooltipType> = ({
  title,
  children,
  padding = [0, 0],
}) => {
  const classes = useStyles(padding)();
  return (
    <Tooltip
      title={title}
      classes={{
        tooltip: clsx(classes.tooltip, classes.padding),
        arrow: classes.arrow,
      }}
      arrow
    >
      {children}
    </Tooltip>
  );
};

export default CustomTooltip;
