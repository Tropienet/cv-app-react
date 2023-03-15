import React, { Component } from "react";

class DisplayInformation extends Component {

    render() {
        return(
            <div className="display">
                <p>Name {this.props.name}</p>
                <p>Email {this.props.email}</p>
                <p>Phone Number: {this.props.phone}</p>
                <p>School: {this.props.school}</p>
                <p>Title: {this.props.title}</p>
                <p>Date {this.props.date}</p>
            </div>
        )
    }
}

export default DisplayInformation;