import React from 'react';
// Material-ui 컴포넌트들
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  example: {
    background: "#ffffff",
    border: "1px solid #dddddd",
  },
  preview: {
    padding: "20px 0",
    textAlign: "center",
    background: "#dddddd",
  },
  code: {
    padding: "16px",
    fontSize: "1.2em"
  },
}));

const IconsPage = props => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h3">폰트 사용 안내</Typography><br/>
      <Typography paragraph>
        이 관리자 페이지는 Material-UI 채택해서 사용합니다. &nbsp;
        <a href="https://material-ui.com/components/typography/" target="_blank" rel="noopener noreferrer">Material-UI Typography Page</a>
        에 따르면 roboto 폰트를 기본으로 사용하고 있으나 한국어 특성을 고려해 &nbsp;
        <a href="https://fonts.google.com" target="_blank" rel="noopener noreferrer">Google Fonts</a>
        를 활용해 [Noto Sanas KR] 폰트를 기본 폰트로 사용하고 있습니다.
      </Typography>
      <br/>
      <Typography variant="h4" noWrap>폰트 설정</Typography><br/>
      <Typography>기본 폰트는 Material-UI의 Theme에서 폰트를 변경하는 방법을 따르고 있습니다. </Typography><br/>
      <pre className={classes.example}>
        <div className={classes.preview}>
          [Project Path]/src/components/app.js
        </div>
        <div className={classes.code}>
          {
`// ...
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  typography: { 
    // Typography 컴포넌트들의 기본 폰트 설정
    fontFamily: [
      '"Noto Sans KR"',
      '"Roboto"',
      '"sans-serif"'
    ].join(','),
  },
});`
          }
        </div>
      </pre>
      <Typography>fontFamily 배열에 폰트명을 추가(맨앞)에 하시거나 변경/삭제로 조절이 가능합니다. </Typography><br/>
    </React.Fragment>
  );
}

export default IconsPage;