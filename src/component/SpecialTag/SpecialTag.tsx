import React, { useState } from "react";
import clsx from "clsx";
import { Tooltip, CircularProgress } from "@material-ui/core";

import useStyles from "./SpecialTagStyle";
import rawData from "../../data/lor_data.json";
// Types
import { TypeCard } from "../../typesProps";

export default function SpecialTag(props: any) {
  const { type, cardRef, children } = props;
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  if (type === "card") {
    const card: any = rawData.find(
      (item: TypeCard) => item.cardCode === cardRef[0]
    );
    return (
      <Tooltip
        arrow
        classes={{ arrow: classes.arrow, tooltip: classes.tooltip }}
        title={
          <div>
            {loading && <CircularProgress />}
            <img
              className={clsx(classes.img, loading && "loading")}
              alt={card.name}
              src={card.assets[0].gameAbsolutePath}
              onLoad={() => setLoading(false)}
            />
          </div>
        }
      >
        <span className={clsx(classes.title, "image")}>{children}</span>
      </Tooltip>
    );
  } else {
    return (
      <span className={classes.title}>
        <div className={classes.container}>{children}</div>
      </span>
    );
  }
}
