import React from "react";

// Material ui
import { Tooltip } from "@material-ui/core";

// Custom Component
import SpecialTag from "../../SpecialTag/SpecialTag";
import SpriteImg from "../../SpriteImg/SpriteImg";

// Style
import useStyles from "./CardImageTooltipStyle";

// types
import { TypeCard } from "../../../typesProps";

// Info Data
import { keywords } from "../../../data/info_data.json";

interface CardTooltipType {
  data: TypeCard;
  children: React.ReactElement<any, any>;
}

const KeywordsComponent = (props: { data: any }) => {
  const classes = useStyles();
  const { data } = props;
  return (
    <div className={classes.cardKeyword}>
      <div className={classes.cardKeywordTittle}>
        <img
          className={classes.cardKeywordImg}
          alt={data.nameRef}
          src={`./img/common/keywords/Keyword_${
            data.nameRef === "SpellOverwhelm" ? "Overwhelm" : data.nameRef
          }.svg`}
        />
        <span className={classes.cardKeywordInfo}>{data.name}</span>
      </div>
      <div className={classes.cardKeywordDesc}>{data.description}</div>
    </div>
  );
};

const CardImageTooltipComponent = (props: { data: TypeCard }) => {
  const { data } = props;
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <div className={classes.cardType}>
        {data.typeRef !== "Skill" && (
          <img
            className={classes.cartTypeImg}
            src={`./img/common/types/${data.typeRef}_card.svg`}
            alt={data.typeRef}
          />
        )}
        <span className={classes.cartTypeInfo}>{data.type}</span>
      </div>
      {data.keywordRefs.length > 0 ? (
        data.keywordRefs.map((item, index) => (
          <KeywordsComponent
            key={index}
            data={keywords.find((element) => element.nameRef === item)}
          />
        ))
      ) : (
        <div className={classes.flavor}>
          <div className={classes.flavorTxt}>
            <span className={classes.flavorTxtL} />
            <span className={classes.flavorTxtS}>Referência</span>
            <span className={classes.flavorTxtL} />
          </div>
          <div className={classes.flavorDesc}>{data.flavorText}</div>
        </div>
      )}
    </div>
  );
};

const CardImageTooltip = (props: CardTooltipType) => {
  const { data, children } = props;
  const classes = useStyles();
  return (
    <Tooltip
      classes={{ tooltip: classes.tooltip, arrow: classes.arrow }}
      title={<CardImageTooltipComponent data={data} />}
      placement="right"
      arrow
    >
      {children}
    </Tooltip>
  );
};

export default CardImageTooltip;
