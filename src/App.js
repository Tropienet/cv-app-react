import GeneralInfo from './components/GeneralInfo';
import DisplayInformation from './components/DisplayInformation';
import './App.css';
import React, { Component } from 'react';
import EducationInfo from './components/EducationInfo';
import PracticalExperience from './components/PracticalExperience';

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
        company: "",
        positionTitle: "",
        tasks: "",
        workStartDate: "",
        workEndDate: "",
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
              <PracticalExperience
                handleInputChange={this.handleInputChange}
                company={this.state.company}
                positionTitle={this.state.positionTitle}
                tasks={this.state.tasks}
                workStartDate={this.state.workStartDate}
                workEndDate={this.state.workEndDate}>
              </PracticalExperience>
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
