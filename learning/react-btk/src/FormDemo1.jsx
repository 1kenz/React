import React, { Component } from 'react';

export default class FormDemo1 extends Component {
    state = { userName: '' };

    onChangeHandler = (event) => {
        this.setState({ userName: event.target.value });
    };

    onSubmitHandler = (event) => {
        event.preventDefault();
        alert(this.state.userName);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <h2>User Name</h2>
                    <input type="text" onChange={this.onChangeHandler} />
                    <h3>User name is {this.state.userName}</h3>
                    <input type="submit" value="Save" />
                </form>
            </div>
        );
    }
}
