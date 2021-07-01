import Navi from './Navi';
import ProductList from './ProductList';
import CategoryList from './CategoryList';
import { Row, Container, Col } from 'reactstrap';

import React, { Component } from 'react';

export default class App extends Component {
    state = { currentCategory: '', products: [], cart: [] };

    componentDidMount() {
        this.getProducts();
    }

    changeCategory = (category) => {
        this.setState({
            currentCategory: category.categoryName,
        });
        this.getProducts(category.id);
    };

    getProducts = (categoryId) => {
        let url = 'http://localhost:3000/products';
        if (categoryId) {
            url += '?categoryId=' + categoryId;
        }

        fetch(url)
            .then((response) => response.json())
            .then((data) => this.setState({ products: data }));
    };

    addToCart = (product) => {
        let newCart = this.state.cart;
        var addedItem = newCart.find((c) => c.product.id === product.id);
        if (addedItem) {
            addedItem.quantity += 1;
        } else {
            newCart.push({ product: product, quantity: 1 });
        }
        this.setState({ cart: newCart });
    };

    render() {
        // encapsulation
        let categoryInfo = { title: 'Category List' };
        let productInfo = { title: 'Product List' };
        return (
            <div>
                <Container>
                    <Navi cart={this.state.cart} />
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
                                products={this.state.products}
                                currentCategory={this.state.currentCategory}
                                addToCart={this.addToCart}
                                info={productInfo}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
