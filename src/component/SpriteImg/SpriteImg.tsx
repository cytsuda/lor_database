import React from "react";

import useStyles from "./SpriteImgStyle";

export default function SpriteImg(props: any) {
  const { value } = props;
  const classes = useStyles();
  return (
    <img
      className={classes.image}
      alt={value}
      src={`./img/common/keywords/Keyword_${value}.svg`}
    />
  );
}
