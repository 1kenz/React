import React, { Component } from 'react';

export default class ProductList extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
            </div>
        );
    }
}
