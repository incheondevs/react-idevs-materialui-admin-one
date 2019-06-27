import './App.css';
import React from 'react';
// others
import Layouts from './layouts';

class App extends React.Component {
  state = {
    mobileOpen: false, // 모바일 레이아웃일때 Drawer가 열려있는 상태
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render(){
    return (
      <div className="App">
        <Layouts
          mobileOpen={ this.state.mobileOpen }
          onDrawerToggle={ this.handleDrawerToggle }
        />
      </div>
    );
  }
}

export default App;
