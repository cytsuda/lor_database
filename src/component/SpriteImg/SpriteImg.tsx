import React from "react";

import useStyles from "./Style";

export default function SpriteImg(props: any) {
  const { value } = props;
  const classes = useStyles();
  return <img alt={value} src={`./img/common/keywords/Keyword_${value}.svg`} />;
}
