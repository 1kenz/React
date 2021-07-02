import Navi from './Navi';
import ProductList from './ProductList';
import CategoryList from './CategoryList';
import NotFound from './NotFound';
import { Row, Container, Col } from 'reactstrap';
import alertify from 'alertifyjs';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CartList from './CartList';

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
        alertify.success(product.productName + ' added to cart!', 2);
        // console.log(product);
        console.log(this.state.cart);
    };

    removeFromCart = (product) => {
        let newCart = this.state.cart.filter(
            (c) => c.product.id !== product.id
        );
        this.setState({ cart: newCart });
        alertify.error(product.productName + ' deleted to cart!', 2);
    };

    render() {
        // encapsulation
        let categoryInfo = { title: 'Category List' };
        let productInfo = { title: 'Product List' };

        return (
            <div>
                <Container>
                    <Navi
                        removeFromCart={this.removeFromCart}
                        cart={this.state.cart}
                    />
                    <Row>
                        <Col xs="3">
                            <CategoryList
                                currentCategory={this.state.currentCategory}
                                changeCategory={this.changeCategory}
                                info={categoryInfo}
                            />
                        </Col>
                        <Col xs="9">
                            <Switch>
                                <Route
                                    exact
                                    path="/"
                                    // component={() => {
                                    //     return (
                                    //         <ProductList
                                    //             products={this.state.products}
                                    //             currentCategory={
                                    //                 this.state.currentCategory
                                    //             }
                                    //             addToCart={this.addToCart}
                                    //             info={productInfo}
                                    //         />
                                    //     );
                                    // }}
                                    render={(props) => (
                                        <ProductList
                                            {...props}
                                            products={this.state.products}
                                            currentCategory={
                                                this.state.currentCategory
                                            }
                                            addToCart={this.addToCart}
                                            info={productInfo}
                                        />
                                    )}
                                ></Route>
                                <Route
                                    exact
                                    path="/cart"
                                    render={(props) => (
                                        <CartList
                                            {...props}
                                            cart={this.state.cart}
                                            removeFromCart={this.removeFromCart}
                                        />
                                    )}
                                ></Route>
                                <Route component={NotFound}></Route>
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
