import React, { useState } from "react";
import clsx from "clsx";
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TablePagination,
} from "@material-ui/core";

// Custom Components
import ManaCircle from "../ManaCircle/ManaCircle";
import KeywordComponent from "../KeywordComponent/KeywordComponent";
import SpecialComponent from "../SpecialComponent/SpecialComponent";

// Styles
import useStyles from "./CardTableStyle";

// Types
import { TypeCard } from "../../typesProps";

const CardList = (props: { data: TypeCard[] }) => {
  const classes = useStyles();
  const { data } = props;
  const columns = [
    { id: "cardCode", label: "CardCode" },
    { id: "name", label: "Nome" },
    { id: "type", label: "Tipo" },
    { id: "cost", label: <ManaCircle isActive value={"M"} /> },
    { id: "rarity", label: "Raridade" },
    { id: "region", label: "Região" },
    { id: "description", label: "Descrição", classes: classes.colWidth },
    { id: "keyword", label: "Palavras-chaves" },
  ];

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} className={clsx(column.classes)}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow hover tabIndex={-1} key={item.cardCode}>
                <TableCell key={item.cardCode}>{item.cardCode}</TableCell>
                <TableCell key={item.cardCode + "_name"}>{item.name}</TableCell>
                <TableCell key={item.cardCode + "_type"}>
                  <img
                    className={classes.tableImg}
                    alt={item.typeRef}
                    src={`./img/common/types/${item.typeRef}_card.svg`}
                  />
                </TableCell>

                <TableCell key={item.cardCode + "_mana"}>
                  <ManaCircle isActive value={item.cost.toString()} />
                </TableCell>

                <TableCell key={item.cardCode + "_rarity"}>
                  <img
                    className={classes.tableImg}
                    alt={item.rarity}
                    src={`./img/rarities/${item.rarityRef}_icon.png`}
                  />
                </TableCell>

                <TableCell key={item.cardCode + "_region"}>
                  <img
                    className={classes.tableImg}
                    alt={item.region}
                    src={`./img/regions/icon-${item.regionRef}.png`}
                  />
                </TableCell>

                <TableCell key={item.cardCode + "_description"}>
                  {SpecialComponent(
                    item.descriptionNew,
                    item.associatedCardRefs
                  )}
                </TableCell>

                <TableCell key={item.cardCode + "_keywords"}>
                  {item.keywordRefs.map((el, index) => (
                    <KeywordComponent key={index} data={el} table={true} />
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
};

export default CardList;
