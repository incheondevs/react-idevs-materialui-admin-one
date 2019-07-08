import React from "react";
//import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';

import Paper from "@material-ui/core/Paper";
// Material-ui 컴포넌트들
import Typography from "@material-ui/core/Typography";
import CustomeTable from "../atoms/customTable"
import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';
// 컴포넌트 분리 참조 사이트  - https://ibrahimovic.tistory.com/33
// 컴포넌트 데이터 전달 참조 사이트 - https://ibrahimovic.tistory.com/34

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
    
    borderCollapse: 'collapse',
    borderRadius: '1em',
    overflow: 'hidden',
    
  },
  table: {
    minWidth: 650,
    borderCollapse: "separate",
    borderSpacing: "0 10px",
    padding:"10px",
    
    
  },
  headerCell : {
    borderBottom : "none",
    color: grey[600],
    fontSize:"1rem"
  },
  cell : {
    borderBottom : "none",
    color : grey[500],
    
  },
  row: {
    backgroundColor:grey[100],
    border: "1px grey[100] solid",
    borderRadius: "1em",
    '&:hover': {
      background: grey[200],
      '& td, & th' :{
        color: grey[700],
        fontWeight:"600"
      }
    },
   
  },
  firstCell:{
    //border: "0px grey[100] solid",
    borderTopLeftRadius: "12px",
    borderBottomLeftRadius: "12px",

  },
  lastCell:{
    //border: "0px grey[100] solid",
    borderTopRightRadius: "12px",
    borderBottomRightRadius: "12px",
  },
  page :{
    float : "left",
    width: "30px",
    height: "30px",
    textAlign: "center",
    paddingTop: "4px",
    '&:hover' :{
      borderColor : blue[500],
      border: "3px solid ",
      cursor : "pointer",
      color : blue[500],
      fontWeight:"600"
    }
    
  },
  pages : {
    height: "2em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom : "10px"
  }
}));

function createData(name, type, hours, trainer, spots) {
  return { name, type, hours, trainer, spots };
}

const rows = [
  createData('나비처럼', "복싱", "오전 9:00 - 11:00", "아론 챔프맨", 10),
  createData('몸과 마음', "요가", "오전 8:00 - 9:00", "아담 스튜왈트", 15),
  createData('심장 강화 운동', "헬스", "오전 9:00 - 10:00", "아론 챔프맨", 15),
  createData('바퀴 자세', "요가", "오전 7:00 - 8:30", "도나 윌슨", 20),
  createData('재미난 댄스', "요가","오전 8:00 - 9:00", "도나 윌슨", 15),
  createData('줌바 댄스', "댄스","오후 5:00 - 7:00", "도나 윌슨", 10),
  createData('심장 폭발 운동', "헬스", "오후 5:00 - 7:00", "랜디 포터", 15),
  createData('필라테스', "헬스", "오전 8:00 - 9:00", "랜디 포터", 10),
  createData('척추와 어깨', "요가", "오전 6:30 - 8:00", "랜디 포터", 10),
  createData('디바를 위한 요가', '요가', "오전 9:00 - 10:00", "도나 윌슨", 10),
  createData('가상 사이클', "헬스", "오전 8:00 - 9:00", "랜디 포터", 15),

];

export default function DenseTable() {
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" noWrap>
        다목적 테이블 리스트
      </Typography>
      <br />
      <Typography paragraph>
        원하는 목적에 맞는 테이블 스타일을 도입해 사용해 보세요.
        <br />
        더욱 직관적이고 편리하게 확인할 수 있습니다.
      </Typography>
      <Typography variant="h5" noWrap>
          기본 테이블 
        </Typography>
        
        <Typography paragraph>
          React Admin 기본 테이블
        </Typography>
      <CustomeTable classes={classes} data = {rows} />
      {/**
      <Typography variant="h5" noWrap>
        테이블 2
      </Typography>
      
      <Typography paragraph>
        테이블 설명
      </Typography>
      <CustomeTable classes={classes} data = {rows} />
      <Typography variant="h5" noWrap>
        테이블 3
      </Typography>
      
      <Typography paragraph>
        테이블 설명
      </Typography>
      <CustomeTable classes={classes} data = {rows} />
      <Typography variant="h5" noWrap>
        테이블 4
      </Typography>
      
      <Typography paragraph>
        테이블 설명
      </Typography>
      <CustomeTable classes={classes} data = {rows} />
       */}
    </div>
  );
}