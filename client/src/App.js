import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginPage from './components/Pages/LoginPage/LoginPage';
import RegisterPage from './components/Pages/LoginPage/RegisterPage';
import MainPage from './components/Pages/MainPage/MainPage';

import { connect } from 'react-redux';


class App extends Component {
  onChange(event){
    this.setState({[event.target.name] : event.target.value});
  }

  WindowDisplay = () => {
    if (this.props.route === "login") {
      return(<LoginPage onChange={this.onChange}/>)
    }
    else if (this.props.route === "register") {
      return(<RegisterPage onChange={this.onChange}/>)
    }
    else{
      return(<MainPage route={this.props.route}/>)
    }
  }
  render(){
    let windowDisplay = this.WindowDisplay();
    return(
      <div className = "bg-transparent">
        {windowDisplay}
      </div>
    ); 
  }
}

const mapStateToProps = state =>({
  route: state.route.route
})

export default connect(mapStateToProps,null)(App);
