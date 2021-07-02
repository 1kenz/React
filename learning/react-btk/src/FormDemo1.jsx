import React, { Component } from 'react';

export default class FormDemo1 extends Component {
    state = { userName: '', city: '' };

    onChangeHandler = (event) => {
        // this.setState({ userName: event.target.value });

        let name = event.target.name;
        let value = event.target.value;

        this.setState({ [name]: value });
    };

    onSubmitHandler = (event) => {
        event.preventDefault();
        alert(this.state.userName);
        alert(this.state.city);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <h2>User Name</h2>
                    <input
                        name="userName"
                        type="text"
                        onChange={this.onChangeHandler}
                    />
                    <h3>User name is {this.state.userName}</h3>

                    <h2>City</h2>
                    <input
                        name="city"
                        type="text"
                        onChange={this.onChangeHandler}
                    />
                    <h3>City is {this.state.city}</h3>

                    <input type="submit" value="Save" />
                </form>
            </div>
        );
    }
}
