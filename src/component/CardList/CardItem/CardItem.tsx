import React, { useState } from "react";
import {
  Avatar,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  IconButton,
  Collapse,
  Box,
  Divider,
  Grid,
} from "@material-ui/core";
import { ExpandMore, ExpandLess, NotInterested } from "@material-ui/icons";

// Custom Components
import SpecialComponent from "../../SpecialComponent/SpecialComponent";
import KeywordComponent from "../../KeywordComponent/KeywordComponent";
import ManaCircle from "../../ManaCircle/ManaCircle";

// Types
import { TypeCard } from "../../../typesProps";

// Styles
import useStyles from "./CardItemStyle";

const CardItem = (props: { data: TypeCard }) => {
  const classes = useStyles();
  const { data } = props;
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <ListItem className={classes.item} key={data.cardCode}>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <img
              alt={data.type}
              src={`./img/common/types/${data.typeRef}_card.svg`}
            />
          </Avatar>
        </ListItemAvatar>

        <ListItemText
          classes={{
            root: classes.textRoot,
            secondary: classes.textSecondary,
          }}
          primary={data.name}
          secondary={
            data.rarityRef === "None"
              ? "Sem raridade"
              : data.rarity.toLowerCase()
          }
        />

        {(data.typeRef === "Follower" || data.typeRef === "Champion") && (
          <div className={classes.status}>
            <ListItemAvatar className={classes.center}>
              <div className={classes.info}>
                <img
                  className={classes.infoImg}
                  src="./img/common/keywords/Keyword_Attack.svg"
                  alt="Ataque"
                />
                <span className={classes.infoTxt}>{data.attack}</span>
              </div>
            </ListItemAvatar>
            <ListItemAvatar className={classes.center}>
              <div className={classes.info}>
                <img
                  className={classes.infoImg}
                  src="./img/common/keywords/Keyword_Heart.svg"
                  alt="Ataque"
                />
                <span className={classes.infoTxt}>{data.health}</span>
              </div>
            </ListItemAvatar>
          </div>
        )}

        <ListItemAvatar className={classes.center}>
          <ManaCircle value={data.cost.toString()} />
        </ListItemAvatar>
        <ListItemAvatar className={classes.center}>
          <img
            className={classes.avatarImg}
            alt={`icon-${data.regionRef.toLowerCase()}.png`}
            src={`./img/regions/icon-${data.regionRef.toLowerCase()}.png`}
          />
        </ListItemAvatar>

        <ListItemAvatar className={classes.rarity}>
          <>
            {data.rarityRef !== "None" ? (
              <img
                className={classes.avatarImg}
                alt={data.rarityRef}
                src={`./img/rarities/${data.rarityRef.toLowerCase()}_icon.png`}
              />
            ) : (
              <NotInterested />
            )}
          </>
        </ListItemAvatar>

        <ListItemSecondaryAction>
          {expanded ? (
            <IconButton onClick={() => setExpanded(false)}>
              <ExpandLess />
            </IconButton>
          ) : (
            <IconButton onClick={() => setExpanded(true)}>
              <ExpandMore />
            </IconButton>
          )}
        </ListItemSecondaryAction>
      </ListItem>
      <Collapse
        className={classes.container}
        in={expanded}
        timeout="auto"
        unmountOnExit
      >
        <Divider />
        <Box px={2} py={1}>
          <Grid container spacing={3}>
            <Grid item xs={2}>
              <img
                className={classes.img}
                src={data.assets[0].gameAbsolutePath}
                alt={data.name}
              />
            </Grid>
            <Grid item xs={6}>
              <p className={classes.tittle}>Referência</p>
              <span className={classes.text}>{data.flavorText}</span>
              {data.descriptionNew.length !== 0 && (
                <>
                  <p className={classes.tittle}>Descrição</p>
                  <span className={classes.text}>
                    {SpecialComponent(
                      data.descriptionNew,
                      data.associatedCardRefs
                    )}
                  </span>
                </>
              )}
              {data.keywordRefs.length !== 0 && (
                <>
                  <p className={classes.tittle}>Palavra-chaves</p>
                  <div className={classes.keywordContainer}>
                    {data.keywordRefs.map((el, index) => (
                      <KeywordComponent key={index} data={el} />
                    ))}
                  </div>
                </>
              )}
            </Grid>
            <Grid item xs={5}></Grid>
          </Grid>
        </Box>
      </Collapse>
    </>
  );
};

export default CardItem;
/*


*/
