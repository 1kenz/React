import React, { Component } from 'react';

export default class ProductList extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        let title = this.props.info.title;

        return (
            <div>
                <h2>{title}</h2>
            </div>
        );
    }
}
