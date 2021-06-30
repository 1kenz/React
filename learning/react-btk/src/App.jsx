import Navi from './Navi';
import ProductList from './ProductList';
import CategoryList from './CategoryList';
import { Row, Container, Col } from 'reactstrap';

import React, { Component } from 'react';

export default class App extends Component {
    state = { currentCategory: '' };

    changeCategory = (category) => {
        this.setState({
            currentCategory: category.categoryName,
        });
    };

    render() {
        // encapsulation
        let categoryInfo = { title: 'Category List' };
        let productInfo = { title: 'Product List' };
        return (
            <div>
                <Container>
                    <Row>
                        <Navi />
                    </Row>
                    <Row>
                        <Col xs="3">
                            <CategoryList
                                currentCategory={this.state.currentCategory}
                                changeCategory={this.changeCategory}
                                info={categoryInfo}
                            />
                        </Col>
                        <Col xs="9">
                            <ProductList
                                currentCategory={this.state.currentCategory}
                                info={productInfo}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
