import React from "react";
//import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from '@material-ui/core/TablePagination';

// Material-ui 컴포넌트들
import Typography from "@material-ui/core/Typography";



const CustomTable = (props)=> (
  <div className={props.classes.root}>
    <React.Fragment>
      
      <Paper className={props.classes.paper}>
        <Table className={props.classes.table} size="">
          <TableHead>
            <TableRow>
              <TableCell className={props.classes.headerCell}>클래스 명</TableCell>
              <TableCell align="left" className={props.classes.headerCell}>타입</TableCell>
              <TableCell align="left" className={props.classes.headerCell}>시간</TableCell>
              <TableCell align="left" className={props.classes.headerCell}>트레이너</TableCell>
              <TableCell align="left" className={props.classes.headerCell}>스팟</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map(row => (
              <TableRow key={row.name} className={props.classes.row}>
                <TableCell align="left" component="th" scope="row" className={`${props.classes.cell} ${props.classes.firstCell}`}>
                  {row.name}
                </TableCell>
                <TableCell align="left" className={props.classes.cell}>{row.type}</TableCell>
                <TableCell align="left" className={props.classes.cell}>{row.hours}</TableCell>
                <TableCell align="left" className={props.classes.cell}>{row.trainer}</TableCell>
                <TableCell align="left" className={`${props.classes.cell} ${props.classes.lastCell}`}>{row.spots}</TableCell>
              </TableRow>
            ))}
          </TableBody>
         
        
        </Table>
        <div className={props.classes.pages}>
          <div className={props.classes.page}>1</div>
          <div className={props.classes.page}>2</div>
          <div className={props.classes.page}>3</div>
          <div className={props.classes.page}>4</div>
          <div className={props.classes.page}>5</div>
          <div className={props.classes.page}>6</div>
          <div className={props.classes.page}>7</div>
          <div className={props.classes.page}>8</div>
          <div className={props.classes.page}>9</div>
          <div className={props.classes.page}>10</div>
          <div className={props.classes.page}>></div>
        </div>
      </Paper>
    </React.Fragment>
  </div>
)
  


export default CustomTable;