import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class CategoryList extends Component {
    state = {
        categories: [
            { categoryId: 1, categoryName: 'Beverages' },
            { categoryId: 2, categoryName: 'Condiments' },
        ],
    };

    render() {
        let title = this.props.info.title;

        return (
            <div>
                <h2>{title}</h2>
                <ListGroup>
                    {this.state.categories.map((category) => (
                        <ListGroupItem
                            onClick={() => this.props.changeCategory(category)}
                            key={category.categoryId}
                        >
                            {category.categoryName}
                        </ListGroupItem>
                    ))}
                </ListGroup>
                <h4>{this.props.currentCategory}</h4>
            </div>
        );
    }
}
