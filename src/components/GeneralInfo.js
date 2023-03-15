import React, { Component } from "react";

class GeneralInfo extends Component {
    constructor(props) {
        super(props);

    }

    onClick = (e) => {
        e.preventDefault();
        console.log(this.props.name)
    }

    render() {

        return ( 
            <div>
                <label htmlFor="name">Enter your name:</label>
                <input 
                    type="text"
                    id="name"
                    value={this.props.name}
                    onChange={this.props.handleNameChange}></input>
                <label htmlFor="email">Enter your email:</label>
                <input type="email" id="email"></input>
                <label htmlFor="phone">Enter your phone:</label>
                <input type="number" id="phone"></input>
                <button
                onClick={this.onClick}    >
                    Info</button>
            </div>
        )
    }
}

export default GeneralInfo;