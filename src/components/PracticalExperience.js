import React, {Component} from "react";

class PracticalExperience extends Component {
    render () {
        return (
            <div>
               <label htmlFor="company-name">Please enter the name of your school</label>
               <br></br>
               <input
                    id="company-name"
                    type="text"
                    name="company"
                    value={this.props.company}
                    onChange={this.props.handleInputChange}>
               </input>
               <br></br>
               <label htmlFor="title">Please enter the title you had at your job</label>
               <br></br>
               <input
                    id="title"
                    type="text"
                    name="positionTitle"
                    value={this.props.title}
                    onChange={this.props.handleInputChange}>
                </input>
                <br></br>
                <label htmlFor="taks">Describe the tasks at your job</label>
                <br></br>
                <textarea
                    id="tasks"
                    name="tasks"
                    value={this.props.tasks}
                    onChange={this.props.handleInputChange}>
                </textarea>
                <br></br>
                <label htmlFor="start-date">Start date</label>
                <br></br>
                <input
                    id="start-date"
                    type="date"
                    name="workStartDate"
                    value={this.props.workStartDate}
                    onChange={this.props.handleInputChange}>
                    </input>
                    <br></br>
                <label htmlFor="date">End date</label>
                <br></br>
                <input
                    id="date"
                    type="date"
                    name="workEndDate"
                    value={this.props.workEndDate}
                    onChange={this.props.handleInputChange}>
                    </input>
            </div>
        )
    }
}

export default PracticalExperience;