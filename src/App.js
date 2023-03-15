import GeneralInfo from './components/GeneralInfo';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
        name: "",
        email: "",
        phone: "",
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
        [name]: value
    })
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.phone)
  };

  render() {
    return (
      <div className="App">
        <form>
          <GeneralInfo
            handleInputChange={this.handleInputChange}
            name={this.state.name}
            email={this.state.email}
            phone={this.state.phone}
            ></GeneralInfo>
          <button type="submit" onClick={this.handleClick}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
