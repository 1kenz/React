import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                { categoryId: 1, categoryName: 'Beverages' },
                { categoryId: 2, categoryName: 'Condiments' },
            ],
        };
    }
    render() {
        let title = this.props.info.title;

        return (
            <div>
                <h2>{title}</h2>
                <ListGroup>
                    {this.state.categories.map((category) => (
                        <ListGroupItem key={category.categoryId}>
                            {category.categoryName}
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </div>
        );
    }
}
