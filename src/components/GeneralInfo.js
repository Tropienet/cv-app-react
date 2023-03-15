import React, { Component } from "react";

class GeneralInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( 
            <div>
               <label htmlFor="name">Please enter your name</label>
               <br></br>
               <input
                    id="name"
                    type="text"
                    name="name"
                    value={this.props.name}
                    onChange={this.props.handleInputChange}>
               </input>
               <br></br>
               <label htmlFor="email">Please enter your email</label>
               <br></br>
               <input
                    id="email"
                    type="email"
                    name="email"
                    value={this.props.email}
                    onChange={this.props.handleInputChange}>
                </input>
                <br></br>
                <label htmlFor="phone">Please enter your phone</label>
                <br></br>
                <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={this.props.phone}
                    onChange={this.props.handleInputChange}>
                    </input>
            </div>
        )
    }
}

export default GeneralInfo;