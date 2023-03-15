import GeneralInfo from './components/GeneralInfo';
import DisplayInformation from './components/DisplayInformation';
import './App.css';
import React, { Component } from 'react';
import EducationInfo from './components/EducationInfo';

class App extends Component {
  constructor() {
    super();

    this.state = {
        name: "",
        email: "",
        phone: "",
        school: "",
        title: "",
        date: "",
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
      <div>
        <div className='header'>
           <h1 className='site-name'>CV-application</h1> 
        </div>
        <div className="app">
          <div className='form-container'>
          <form>
            <GeneralInfo
              handleInputChange={this.handleInputChange}
              name={this.state.name}
              email={this.state.email}
              phone={this.state.phone}
              ></GeneralInfo>
              <EducationInfo
                handleInputChange={this.handleInputChange}
                school={this.state.school}
                title={this.state.title}
                date={this.state.date}
                >  
              </EducationInfo>
            <button type="submit" onClick={this.handleClick}>Submit</button>
          </form>
        </div>
        <DisplayInformation
          name={this.state.name}
          email={this.state.email}
          phone={this.state.phone}
        >  
        </DisplayInformation>
      </div>
      </div>
    );
  }
}

export default App;
