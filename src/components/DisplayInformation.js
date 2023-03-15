import React, { Component } from "react";

class DisplayInformation extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="display">
                <p>Name {this.props.name}</p>
                <p>Email {this.props.email}</p>
                <p>Phone Number: {this.props.phone}</p>
            </div>
        )
    }
}

export default DisplayInformation;