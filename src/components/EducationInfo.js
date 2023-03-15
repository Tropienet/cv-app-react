import React, { Component } from "react";

class EducationInfo extends Component {

    render() {
        return (
            <div>
               <label htmlFor="school">Please enter the name of your school</label>
               <br></br>
               <input
                    id="school"
                    type="text"
                    name="school"
                    value={this.props.school}
                    onChange={this.props.handleInputChange}>
               </input>
               <br></br>
               <label htmlFor="title">Please enter the title</label>
               <br></br>
               <input
                    id="title"
                    type="text"
                    name="title"
                    value={this.props.title}
                    onChange={this.props.handleInputChange}>
                </input>
                <br></br>
                <label htmlFor="date">Please enter the date you finished</label>
                <br></br>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={this.props.date}
                    onChange={this.props.handleInputChange}>
                    </input>
            </div>
        )
    }
}

export default EducationInfo