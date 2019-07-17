import './App.css';
import React from 'react';
// others
import Layouts from './layouts';
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
});

class App extends React.Component {
  state = {
    mobileOpen: false, // 모바일 레이아웃일때 Drawer가 열려있는 상태
  };

  // 모바일 사이즈일 경우 메뉴창 토글
  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render(){
    return (
      <ThemeProvider theme={theme}>
        <div className="App">  
          <Layouts
            mobileOpen={ this.state.mobileOpen }
            onDrawerToggle={ this.handleDrawerToggle }
          />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
