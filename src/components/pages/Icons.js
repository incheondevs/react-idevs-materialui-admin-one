import React from 'react';
// Material-ui 컴포넌트들
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
// icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import TableIcon from "@material-ui/icons/TableChart";
import SettingsIcon from "@material-ui/icons/Settings";
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';

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
      <Typography variant="h3" noWrap>아이콘들 (Icons) </Typography><br/>
      <Typography paragraph>
        이 관리자 페이지는 Material-UI 채택해서 사용합니다. 따라서 &nbsp;
        <a href="https://material.io/tools/icons/" target="_blank" rel="noopener noreferrer">Material Icons</a>
        에 나온 아이콘들을 사용할 수 있습니다. <br/>또한 &nbsp;
        <a href="https://material-ui.com/components/icons/" target="_blank" rel="noopener noreferrer">Material-UI Icons Page</a>
        에 나온 SVG를 임포트 하는 방법으로도 사용이 가능합니다.
      </Typography>

      <br/>
      <br/>
      <Typography variant="h4" noWrap>기본 사용법</Typography><br/>
      <Typography paragraph>
        사용할 아이콘 이름을 기억한뒤 "@material-ui/icons/" 하위에서 찾아서 import 하여 사용합니다.
      </Typography>
      <pre className={classes.example}>
        <div className={classes.preview}>
          <DashboardIcon/> <TableIcon/> <SettingsIcon/>
        </div>
        <div className={classes.code}>
import DashboardIcon from "@material-ui/icons/Dashboard"; <br/>
import TableIcon from "@material-ui/icons/TableChart"; <br/>
import SettingsIcon from "@material-ui/icons/Settings"; <br/>
<br/>
&lt;DashboardIcon/> <br/>
&lt;TableIcon/> <br/>
&lt;SettingsIcon/>
        </div>
      </pre>
      <Typography >기본(Icon Font) 방법으로도 사용은 가능합니다.</Typography><br/>
      <pre className={classes.example}>
        <div className={classes.preview}>
          <i className="material-icons">face</i>
        </div>
        <div className={classes.code}>
          &lt;i className="material-icons">face&lt;/i>
        </div>
      </pre>
      <br/>
      <Typography paragraph>
        Material-UI에서 SVG 아이콘을 사용하는 이유는 성능이나 화질면에서 조금 더 우수하다고 합니다. 자세한 내용은
        <a href="https://github.blog/2016-02-22-delivering-octicons-with-svg" target="_blank" rel="noopener noreferrer">이곳</a>
        을 참고해주세요.
      </Typography>

      <br/>
      <br/>
      <Typography variant="h4" noWrap>크기 조절 Props</Typography><br/>
      <Typography>세밀한 크기 조절은 css로 설정이 가능합니다. 간단한 경우에는 fontSize prop를 사용해 조절 가능합니다. </Typography><br/>
      <pre className={classes.example}>
        <div className={classes.preview}>
          <SettingsIcon fontSize="small"/> <SettingsIcon fontSize="default"/> <SettingsIcon fontSize="large"/>
        </div>
        <div className={classes.code}>
import SettingsIcon from "@material-ui/icons/Settings"; <br/>
<br/>
&lt;SettingsIcon fontSize="small" /> <br/>
&lt;SettingsIcon fontSize="default" /> <br/>
&lt;SettingsIcon fontSize="large" />
        </div>
      </pre>

      <br/>
      <br/>
      <Typography variant="h4" noWrap>색상 조절 Props</Typography><br/>
      <Typography>색상 또한 css로 설정이 가능하지만 color prop를 사용해 몇가지 기본 색상을 제공합니다. </Typography><br/>
      <pre className={classes.example}>
        <div className={classes.preview}>
          <TableIcon color="primary"/> <TableIcon color="secondary"/> <TableIcon color="action"/> <TableIcon color="error"/> <TableIcon color="disabled"/>
        </div>
        <div className={classes.code}>
import SettingsIcon from "@material-ui/icons/Settings"; <br/>
<br/>
&lt;TableIcon color="primary" /> <br/>
&lt;TableIcon color="secondary" /> <br/>
&lt;TableIcon color="action" /> <br/>
&lt;TableIcon color="error" /> <br/>
&lt;TableIcon color="disabled" />
        </div>
      </pre>


      <br/>
      <br/>
      <Typography variant="h4" noWrap>스타일 별 아이콘</Typography><br/>
      <Typography>Material Icons은 몇가지 스타일로 제공되고 있습니다. </Typography><br/>
      <pre className={classes.example}>
        <div className={classes.preview}>
          Filled : <DeleteIcon /><br/>
          Outlined : <DeleteOutlinedIcon /><br/>
          Rounded : <DeleteRoundedIcon /><br/>
          Two Tone : <DeleteTwoToneIcon /><br/>
          Sharp : <DeleteSharpIcon /><br/>

        </div>
        <div className={classes.code}>
import SettingsIcon from "@material-ui/icons/Settings"; <br/>
<br/>
&lt;DeleteIcon /> <br/>
&lt;DeleteOutlinedIcon /> <br/>
&lt;DeleteRoundedIcon /> <br/>
&lt;DeleteTwoToneIcon /> <br/>
&lt;DeleteSharpIcon />
        </div>
      </pre>

      <br/>
      <br/>
      <Typography variant="h4" noWrap>기타</Typography><br/>
      <Typography>이상 보다 자세한 사용 방법은 Material-UI의 &nbsp;
        <a href="https://material-ui.com/components/icons/" target="_blank" rel="noopener noreferrer">Icons Page</a>나 &nbsp;
        <a href="https://material-ui.com/api/icon/" target="_blank" rel="noopener noreferrer">Icons API</a> 그리고 
        <a href="https://google.github.io/material-design-icons/#icon-font-for-the-web" target="_blank" rel="noopener noreferrer">Material Icons</a>
        페이지를 참고하시어 사용하면 됩니다. </Typography><br/>
    </React.Fragment>
  );
}

export default IconsPage;