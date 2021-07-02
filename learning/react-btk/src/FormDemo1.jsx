import React, { Component } from 'react';

export default class FormDemo1 extends Component {
    state = { userName: '' };

    onChangeHandler = (event) => {
        this.setState({ userName: event.target.value });
    };

    render() {
        return (
            <div>
                <form>
                    <h2>User Name</h2>
                    <input type="text" onChange={this.onChangeHandler} />
                    <h3>User name is {this.state.userName}</h3>
                </form>
            </div>
        );
    }
}
