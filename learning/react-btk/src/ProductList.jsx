import React, { Component } from 'react';

export default class ProductList extends Component {
    constructor(props) {
        super(props);
        // var title = this.props.title;
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
            </div>
        );
    }
}
