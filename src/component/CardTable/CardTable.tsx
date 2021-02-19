import React, { useState, useEffect } from "react";
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
import { Block } from "@material-ui/icons";
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
  const [page, setPage] = useState(0);
  const [row, setRow] = useState(100);
  const [showedData, setShowedData] = useState(data.slice(0, 100));

  const columns = [
    { id: "cardCode", label: "CardCode", align: false },
    { id: "name", label: "Nome", align: false },
    { id: "type", label: "Tipo", align: false },
    {
      id: "cost",
      label: <ManaCircle isActive value={"M"} />,
      align: false,
    },
    { id: "rarity", label: "Raridade", align: true },
    { id: "region", label: "Região", align: false },
    {
      id: "description",
      label: "Descrição",
      classes: classes.colWidth,
      align: false,
    },
    { id: "keyword", label: "Palavras-chaves", align: false },
  ];

  const handleChangeRowsPerPage = (event: any) => {
    setRow(event.target.value);
    setShowedData(data.slice(0, event.target.value));
  };

  const handleChangePage = (event: any, value: number) => {
    setPage(value);
    const ini = value * row;
    const end = (value + 1) * row;
    setShowedData(data.slice(ini, end));
  };
  useEffect(() => {
    setPage(0);
    setShowedData(data.slice(0, row));
  }, [data, row]);

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  className={clsx(column.classes)}
                  align={column.align ? "center" : "inherit"}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {showedData.map((item) => (
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

                <TableCell key={item.cardCode + "_rarity"} align="center">
                  {item.rarityRef === "None" ? (
                    <Block />
                  ) : (
                    <img
                      className={classes.tableImg}
                      alt={item.rarity}
                      src={`./img/rarities/${item.rarityRef}_icon.png`}
                    />
                  )}
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

                <TableCell
                  classes={{ root: classes.tableKeyword }}
                  key={item.cardCode + "_keywords"}
                >
                  {item.keywordRefs.map((el, index) => (
                    <KeywordComponent key={index} data={el} table={true} />
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={data.length}
        rowsPerPageOptions={[10, 25, 100]}
        rowsPerPage={row}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
export default CardList;
