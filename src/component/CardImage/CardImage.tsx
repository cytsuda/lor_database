import React, { useState } from "react";
import clsx from "clsx";

// Custom component
import CardImageTooltip from "./CardImageTooltip/CardImageTooltip";
// Style
import useStyle from "./Styles";
// Types
import { TypeCard } from "../../typesProps";

const CardScreen = (props: { data: TypeCard }) => {
  const classes = useStyle();
  const [load, setLoad] = useState(true);
  const { data } = props;
  return (
    <>
      {load && (
        <img
          className={classes.img}
          alt={data.name}
          src="./img/common/card/card_back.png"
        />
      )}
      <div className={clsx(load && classes.hidden)}>
        <CardImageTooltip data={data}>
          <img
            className={classes.img}
            alt={data.name}
            src={data.assets[0].gameAbsolutePath}
            onLoad={() => setLoad(false)}
            onClick={() => console.log(data)}
          />
        </CardImageTooltip>
      </div>
    </>
  );
};

export default CardScreen;
