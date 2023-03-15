import GeneralInfo from './components/GeneralInfo';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      genInfo: {
        name: "",
        email: "",
        phone: "",
      },
    }
  }

  handleNameChange = (e) => {
    this.setState({
      genInfo: {
        name: e.target.value
      }
    })
  }

  handleEmailChange = (e) => {
    this.setState({
      genInfo: {
        email: e.target.value
      }
    })
  }

  handlePhoneChange = (e) => {
    this.setState({
      genInfo: {
        phone: e.target.value
      }
    })
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log("this is:", this);
  };

  render() {
    return (
      <div className="App">
        <form>
          <GeneralInfo
            handleNameChange={this.handleNameChange} 
            name={this.state.genInfo.name}></GeneralInfo>
          <button type="submit" onClick={this.handleClick}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
