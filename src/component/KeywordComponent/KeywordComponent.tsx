import React from "react";
import clsx from "clsx";

// Style
import useStyles from "./KeywordComponentStyle";

// Material-ui
import { Tooltip } from "@material-ui/core";

// Data
import { keywords } from "../../data/info_data.json";

const KeywordComponent = (props: { data: string; table?: boolean }) => {
  const { data, table } = props;
  const classes = useStyles();
  const info: any = keywords.find((item) => item.nameRef === data);
  return (
    <Tooltip
      classes={{ tooltip: classes.tooltip, arrow: classes.arrow }}
      title={info.description}
      arrow
    >
      <div className={clsx(classes.keyword, table && "table")}>
        <img
          src={`./img/common/keywords/Keyword_${info.nameRef}.svg`}
          alt={info.nameRef}
          className={clsx(classes.keywordImg, table && "table")}
        />
        <span className={clsx(classes.keywordInfo, table && "table")}>
          {info.name}
        </span>
      </div>
    </Tooltip>
  );
};

export default KeywordComponent;
