import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './components/NavigationBar/NavigationBar';
import Library from './components/Library/Library';

import LoginPage from './components/Pages/LoginPage/LoginPage';
import RegisterPage from './components/Pages/LoginPage/RegisterPage';
import MainPage from './components/Pages/MainPage/MainPage';




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      route:"login",
    };
  }

  changeRoute = (route) => {
    this.setState({route : route});
  }

  WindowDisplay = () => {
    if (this.state.route === "login") {
      return(<LoginPage changeRoute={this.changeRoute}/>)
    }
    else if (this.state.route === "register") {
      return(<RegisterPage changeRoute={this.changeRoute}/>)
    }
    else{
      return(<MainPage changeRoute={this.changeRoute} route={this.state.route}/>)
    }
  }
  render(){
    let windowDisplay = this.WindowDisplay();
    return(
      <div>
        {windowDisplay}
      </div>
    ); 
  }
}

export default App;
